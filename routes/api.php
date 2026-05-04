<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DispensationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// This is the "front door" for your Task 5 logic
Route::post('/dispense', [DispensationController::class, 'store']);

// Default user route (Useful for Member 4's Auth task later)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});