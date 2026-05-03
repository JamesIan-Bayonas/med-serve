<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\DispensationService;
use Exception;

class DispensationController extends Controller
{
    protected $dispensationService;

    public function __construct(DispensationService $dispensationService)
    {
        $this->dispensationService = $dispensationService;
    }

    public function store(Request $request)
    {
        $request->validate([
            'resident_id' => 'required|exists:residents,id',
            'medicine_id' => 'required|exists:medicines,id',
            'quantity' => 'required|integer|min:1',
            'dosage_days' => 'required|integer|min:1'
        ]);

        try {
            $this->dispensationService->processDispensation(
                $request->resident_id,
                $request->medicine_id,
                $request->quantity,
                $request->dosage_days
            );

            return response()->json(['message' => 'Medicine dispensed successfully via FIFO.'], 200);

        } catch (Exception $e) {
            // This catches the "Dispensation Block" or "Insufficient Stock" errors
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }
}