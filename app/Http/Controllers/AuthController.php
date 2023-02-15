<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Register
     */
    public function register(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Not implemented.'], 401);
    }

    /**
     * Verify
     */
    public function verify(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Not implemented.'], 401);
    }

    /**
     * Recover password
     */
    public function recoverPassword(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Not implemented.'], 401);
    }

    /**
     * Login
     *
     * @throws BindingResolutionException
     */
    public function login(Request $request): JsonResponse
    {
        $validated_credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only(['email', 'password']))) {
            return response()->json(['message' => 'Authentication failed.'], 401);
        }

        $user = Usuario::where('email', '=', $validated_credentials['email'])->firstOrFail();
        $token = $user->createToken('auth_token', [$user->profile])->plainTextToken;

        return response()->json([
            'message' => 'You have been logged in successfully',
            'token' => $token,
            'user' => $user
        ], 200);
    }
}
