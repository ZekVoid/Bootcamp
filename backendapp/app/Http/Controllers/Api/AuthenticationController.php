<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        //return $request;
        $credentials = $request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            $user = User::where('email', $credentials['email'],$credentials['password'])->first();
            $token = $user->createToken('token-name')->plainTextToken;

            return response()->json(['token' => $token]);
        }
        else {

        return response()->json(['error' => 'Invalid credentials'], 401);
    }
}
}