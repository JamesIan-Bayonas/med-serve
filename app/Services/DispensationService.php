<?php

namespace App\Services;

use App\Models\MedicineBatch;
use App\Models\Dispensation; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth; // Add this line!
use Carbon\Carbon;
use Exception;

class DispensationService
{
    /**
     * Handle the FIFO dispensation and validation logic.
     */
    public function processDispensation($residentId, $medicineId, $requestedQuantity, $dosageDays)
    {
        // DB::transaction ensures that if anything fails (like running out of stock mid-loop),
        // the ENTIRE process rolls back. No partial deductions.
        return DB::transaction(function () use ($residentId, $medicineId, $requestedQuantity, $dosageDays) {
            
            // 1. THE OVER-CLAIMING BLOCKER
            $this->validateDosageLimits($residentId, $medicineId);

            // 2. THE FIFO INVENTORY DEDUCTION
            $remainingToDispense = $requestedQuantity;

            // Fetch active batches, ordered by expiration (FIFO)
            // lockForUpdate() is critical here to prevent two users from claiming the same stock
            $batches = MedicineBatch::where('medicine_id', $medicineId)
                ->where('current_stock', '>', 0)
                ->orderBy('expiration_date', 'asc')
                ->lockForUpdate()
                ->get();

            foreach ($batches as $batch) {
                if ($remainingToDispense <= 0) break; // Request fulfilled

                $takeFromBatch = min($batch->current_stock, $remainingToDispense);
                
                // Deduct from the batch
                $batch->current_stock -= $takeFromBatch;
                $batch->save();

                // Log it in the ledger
                Dispensation::create([
                    'resident_id' => $residentId,
                    'medicine_batch_id' => $batch->id,
                    'quantity_given' => $takeFromBatch,
                    'dosage_days' => $dosageDays,
                    'dispensed_at' => now(),
                    'user_id' => Auth::id(), // The health worker who logged it
                ]);

                $remainingToDispense -= $takeFromBatch;
            }

            // If we looped through all batches and still need more, abort.
            if ($remainingToDispense > 0) {
                throw new Exception("Insufficient stock. Short by {$remainingToDispense} units.");
            }

            return true;
        });
    }

    private function validateDosageLimits($residentId, $medicineId)
    {
        // Find the resident's most recent claim for this specific medicine type
        $lastDispensation = Dispensation::join('medicine_batches', 'dispensations.medicine_batch_id', '=', 'medicine_batches.id')
            ->where('dispensations.resident_id', $residentId)
            ->where('medicine_batches.medicine_id', $medicineId)
            ->orderBy('dispensations.dispensed_at', 'desc')
            ->first();

        if ($lastDispensation) {
            $nextEligibleDate = Carbon::parse($lastDispensation->dispensed_at)
                                ->addDays($lastDispensation->dosage_days);

            if (now()->lessThan($nextEligibleDate)) {
                $daysRemaining = now()->diffInDays($nextEligibleDate);
                throw new Exception("Dispensation Block: Resident is not eligible for a refill until {$nextEligibleDate->format('M d, Y')}. ({$daysRemaining} days remaining).");
            }
        }
    }
}