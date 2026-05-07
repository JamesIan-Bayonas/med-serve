<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DispensationController;
use App\Http\Controllers\AuthController; // Ensure this is imported

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// 1. --- PUBLIC ROUTES ---
// Accessible by anyone. Member 6's React app starts here.
Route::post('/login', [AuthController::class, 'login']);


// 2. --- TOKEN PROTECTED ROUTES ---
// All routes inside this group REQUIRE a "Bearer" token
Route::middleware('auth:sanctum')->group(function () {

Route::middleware('role:Admin|Health Worker')->group(function () {
        Route::post('/dispense', [DispensationController::class, 'store']);
    });

    // Useful for checking who is currently logged in
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Logout endpoint to revoke the current token
    Route::post('/logout', [AuthController::class, 'logout']);


    // 3. --- ROLE PROTECTED ROUTES --- 
    // Only users with these specific roles can enter this section
    Route::middleware('role:Admin|Health Worker')->group(function () {
        
        // This is your Task 5 logic, now fully secured
        Route::post('/dispense', [DispensationController::class, 'store']);
        
    });

});