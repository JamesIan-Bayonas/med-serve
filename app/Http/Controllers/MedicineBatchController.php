<?php

namespace App\Http\Controllers;

use App\Models\MedicineBatch;
use Illuminate\Http\Request;

class MedicineBatchController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => MedicineBatch::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'medicine_id' => 'required',
            'batch_number' => 'required|unique:medicine_batches,batch_number',
            'date_received' => 'required|before_or_equal:today',
            'expiration_date' => 'required|after:today',
            'quantity_received' => 'required|numeric|min:1',
        ]);

        $batch = MedicineBatch::create([
            'medicine_id' => $request->medicine_id,
            'batch_number' => $request->batch_number,
            'date_received' => $request->date_received,
            'expiration_date' => $request->expiration_date,
            'quantity_received' => $request->quantity_received,

            // AUTO COMPUTE
            'quantity_remaining' => $request->quantity_received,
        ]);

        return response()->json($batch);
    }
}