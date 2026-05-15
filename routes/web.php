<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| This application is a Headless API. 
| All data routing is handled in routes/api.php.
| All UI is handled by the external React application (medserve-frontend).
*/

Route::get('/', function () {
    return response()->json([
        'message' => 'MedServe API is running securely.',
        'status' => 'active'
    ]);
});