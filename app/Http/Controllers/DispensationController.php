<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDispensationRequest;
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
        $this->middleware('auth:sanctum');
        $this->dispensationService = $dispensationService;
    }

    /**
     * The 'store' method that your route in api.php is looking for.
     */
    
    public function store(StoreDispensationRequest $request)
    {
        // 1. Validation is now handled by StoreDispensationRequest

        $validatedData = $request->validated();

        try {
            // 2. Call your FIFO Service Engine
            $this->dispensationService->processDispensation(
                $request->resident_id,
                $request->medicine_id,
                $request->quantity,
                $validatedData['resident_id'],
                $validatedData['medicine_id'],
                $validatedData['quantity'],
                $validatedData['dosage_days'],
                $request->user()->id // Pass the authenticated user's ID
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