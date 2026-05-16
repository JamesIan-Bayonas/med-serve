<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DispensationController;
use App\Http\Controllers\AuthController; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// 1. --- PUBLIC ROUTES ---
// Accessible by anyone. The React app starts here to get the token.
Route::post('/login', [AuthController::class, 'login']);

// 2. --- TOKEN PROTECTED ROUTES ---
// All routes inside this group REQUIRE a "Bearer" token
Route::middleware('auth:sanctum')->group(function () {

    // --- General Auth Routes ---
    // Useful for checking who is currently logged in
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Logout endpoint to revoke the current token
    Route::post('/logout', [AuthController::class, 'logout']);

    // 3. --- ROLE & PERMISSION PROTECTED ROUTES --- 

    // AC: Admin can access user management features
    Route::middleware('role:Admin')->group(function () {
        // Route::get('/users', [UserController::class, 'index']); 
        // Route::post('/users', [UserController::class, 'store']);
    });

    // AC: Health staff can access patient and health service records
    Route::middleware('role:Nurse|Midwife|Barangay Health Worker|Admin')->group(function () {
        // Route::get('/patients', [PatientController::class, 'index']);
        // Route::post('/health-services', [ServiceController::class, 'store']);
    });

    // AC: Inventory staff can access medicine inventory features
    Route::middleware('role:Inventory Staff|Admin')->group(function () {
        // Route::get('/inventory', [InventoryController::class, 'index']);
        // Route::post('/inventory/add', [InventoryController::class, 'store']);
    });

    // Shared Features: Task 5 Dispensation Engine
    // Instead of locking to a specific role, we lock to the PERMISSION. 
    // This allows any role (Nurse, Midwife, Volunteer, etc.) that has this permission to use the route.
    Route::middleware('permission:dispense medicine')->group(function () {
        Route::post('/dispense', [DispensationController::class, 'store']);
    });

    // In routes/api.php
    Route::middleware('permission:manage inventory')->group(function () {
        Route::get('/batches', [\App\Http\Controllers\MedicineBatchController::class, 'index']);
        Route::post('/batches', [\App\Http\Controllers\MedicineBatchController::class, 'store']);
    });

});