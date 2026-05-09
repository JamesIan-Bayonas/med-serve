<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    // Task 14: Search and List Patients
    public function index(Request $request)
    {
        $query = Patient::query();

        // Optional search by name
        if ($request->has('search')) {
            $query->where('last_name', 'like', '%' . $request->search . '%')
                  ->orWhere('first_name', 'like', '%' . $request->search . '%');
        }

        return response()->json([
            'data' => $query->orderBy('last_name')->get()
        ]);
    }

    // Task 11: Register a new Patient
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date|before:today',
            'gender' => 'required|in:Male,Female,Other',
            'contact_number' => 'nullable|string',
            'address_purok' => 'required|string',
        ]);

        $patient = Patient::create($validated);

        return response()->json([
            'message' => 'Patient registered successfully',
            'data' => $patient
        ], 201);
    }
}