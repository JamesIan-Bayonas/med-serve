<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PatientController;
use App\Models\MedicineBatch;
use App\Http\Controllers\MedicineBatchController;

Route::redirect('/', '/login');

Route::resource('patients', PatientController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/add-batch', function () {

    MedicineBatch::create([
        'medicine_id' => 1,
        'batch_number' => 'BATCH-001',
        'date_received' => now(),
        'expiration_date' => '2026-12-31',
        'quantity_received' => 100,
        'quantity_remaining' => 100,
    ]);

    return 'Batch Added Successfully';
});

Route::get('/medicine-batches-page', function () {
    return Inertia::render('MedicineBatches');
});

require __DIR__.'/auth.php';

