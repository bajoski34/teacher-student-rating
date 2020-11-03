<?php

namespace App\Http\Controllers;

use App\Http\Controllers\mail\MailingController;
use App\OneTimeQuestions;
use App\OneTimeVerificationCodes;
use App\Role;
use App\StoreOwner;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api',
            [
                'except' =>
                    [
                        'login',
                        'register',
                        'changePassword'
                    ]
            ]
        );
    }

    public function changePassword(Request $request){
        $data = $request->all();

        $rules = [
            'password'=> 'required|min:6',
            'confirm-password'=> 'required|min:6'
        ];
        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            session()->flash('flash_message','password required, minimum 6 characters');
            return redirect()->back();
        }
        if($data['confirm-password'] !== $data['password']){
            session()->flash('flash_message','password does not match');
            return redirect()->back();
        }
        User::where('email', $data['email'])->update([
            'password'=> bcrypt($data['password'])
        ]);
        // OneTimeVerificationCodes::where('user_id', User::where('email', $data['email'])->first()->id)->delete();
        return view('account-confirmed', ['message'=> 'Password successfully changed']);

    }
    public function register(Request $request){
        $rules = [
            'username' => 'required',
            'email'=>'required',
            'password'=>'required|min:6'
        ];

        $data = request()->all();
        $validator = Validator::make($data, $rules);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
        User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'role' => 3,
            'password' => $data['password']
        ]);
        (new MailingController())->signup($data['email']);
        (new MailingController())->verifyAccount($data['email']);
        return $this->login($request);
    }


    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->all();
        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'status' => '401',
                'response'=>'incorrect credentials'
                ]);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'status'=>'200',
            'response'=>'login successful',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
