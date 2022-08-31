<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !password_verify($request->password, $user->password)){
            return response(["message"=>"Email or Password is incorrect."], 401);
        }else{
          $token = $user->createToken('token')->plainTextToken;

        $newUser = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','=', $user->id)->first(['users.*', 'profiles.*', 'avatars.*', 'locations.*']);

            return json_encode(['user'=>$newUser, 'token' => $token]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
