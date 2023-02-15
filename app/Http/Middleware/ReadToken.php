<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ReadToken
{
    /**
     * Search for the required token.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->header('X-APP-TOKEN') !== env('VITE_APP_TOKEN')) {
            return response()->json(['error' => '401 Unauthorized'], 401);
        }

        return $next($request);
    }
}
