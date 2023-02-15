<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    /**
     * Testing
     */
    public function test(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Hello World!'], 200);
    }
}
