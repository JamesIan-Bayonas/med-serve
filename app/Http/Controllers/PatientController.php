<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
   public function index()
{
    // Fetch your patients from the database
    $patients = Patient::all(); 

    // Render the React component we just made, passing the data
    return Inertia::render('PatientsList', [
        'patients' => $patients,
        'successMessage' => session('success') // Pass success flash messages here
    ]);
}

    public function create()
    {
        return view('patients.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
            'gender' => 'required|string',
            'height' => 'nullable|numeric|min:0',
            'weight' => 'nullable|numeric|min:0',
            'reason_for_checkup' => 'nullable|string',
        ]);

        Patient::create($validated);

        return redirect()->route('patients.index')
            ->with('success', 'Patient registered successfully.');
    }

  public function show(Patient $patient)
{
    return Inertia::render('Patient/Show', [
        'patient' => $patient
    ]);
}
  public function edit(Patient $patient)
{
    return Inertia::render('Patient/Edit', [
        'patient' => $patient
    ]);
}

public function update(Request $request, Patient $patient)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'age' => 'required|integer',
        'gender' => 'required|string',
        'height' => 'nullable|numeric',
        'weight' => 'nullable|numeric',
        'reason_for_checkup' => 'nullable|string',
    ]);

    $patient->update($validated);

    return redirect()->route('patients.show', $patient->id)
        ->with('success', 'Patient profile updated successfully.');
}
}