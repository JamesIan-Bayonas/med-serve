<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1. Validate the incoming request from React
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Attempt to authenticate the user
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login credentials'
            ], 401);
        }

        // 3. Fetch the authenticated user
        $user = User::where('email', $request->email)->firstOrFail();

        // 4. Generate the Sanctum API Token
        $token = $user->createToken('medserve_auth_token')->plainTextToken;

        // 5. Package the RBAC data for the frontend
        $roles = $user->getRoleNames();
        $permissions = $user->getAllPermissions()->pluck('name');

        // 6. Return the secure payload
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $roles,
                'permissions' => $permissions
            ]
        ]);
    }

    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}