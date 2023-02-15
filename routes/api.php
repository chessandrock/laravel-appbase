<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/test', [\App\Http\Controllers:TestController::class, 'test'])
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return response()->json([
            'user' => $request->user()
        ]);
    });

    Route::get('/refresh', function (Request $request) {
        $token = $request->user()->createToken('api')->plainTextToken;
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'access_token' => $token
        ]);
    });

    Route::delete('/logout', function (Request $request) {
        if (is_null($request->user())) {
            return response()->json([
                'message' => 'not_found',
            ], 404);
        }

        Auth::guard('web')->logout();
        // $request->user()->tokens()->where('id', $request->user()->currentAccessToken()->id)->delete();
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'You have been logged out successfully!',
        ], 200);
    });
});
