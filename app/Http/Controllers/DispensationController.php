<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\DispensationService;
use Exception;

class DispensationController extends Controller
{
    protected $dispensationService;

    /**
     * Inject the Service Engine you built into the Controller.
     */
    public function __construct(DispensationService $dispensationService)
    {
        $this->dispensationService = $dispensationService;
    }

    /**
     * The 'store' method that your route in api.php is looking for.
     */
    public function store(Request $request)
    {
        // 1. Validate the incoming request data
        $request->validate([
            'resident_id' => 'required|exists:users,id', // Update 'users' to 'residents' once that table is created
            'medicine_id' => 'required|exists:medicine_batches,medicine_id',
            'quantity' => 'required|integer|min:1',
            'dosage_days' => 'required|integer|min:1'
        ]);

        try {
            // 2. Call your FIFO Service Engine
            $this->dispensationService->processDispensation(
                $request->resident_id,
                $request->medicine_id,
                $request->quantity,
                $request->dosage_days
            );

            return response()->json([
                'status' => 'success',
                'message' => 'Medicine dispensed successfully via FIFO.'
            ], 200);

        } catch (Exception $e) {
            // 3. Catch the "Dispensation Block" or "Insufficient Stock" errors
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 422);
        }
    }
}