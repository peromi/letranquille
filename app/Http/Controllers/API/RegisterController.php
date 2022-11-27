<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Preferences;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'name' => 'required',
            'iam' => 'required',
            'looking' => 'required',
            'age' => 'required',
            'password' => ['required', 'string', 'min:8'],
        ]);


        $user = new User();
        $user->email = $request->email;
        $user->status = "online";
        $user->password = Hash::make($request->password);

        if($user->save()){

            $profile = new Profile();
            $profile->name = $request->name;
            $profile->iam = $request->iam;
            $profile->lookingfor = $request->looking;
            $profile->age = $request->age;
            $profile->user_id = $user->id;

            $profile->save();


            $preference = new Preferences();
            $preference->user_id   = $user->id;

            $preference->save();

            // if(!$user || !password_verify($request->password, $user->password)){
            //     return response()->json(['message' => 'Bad credentials'], 401);
            // }

            $newuser = User::where('id', $user->id)->with('gallery')->first();

            $token = $newuser->createToken('token')->plainTextToken;

           
  
          
            $preferences = Preferences::where("user_id",$newuser->id)->first();
            $profile = Profile::where("user_id",$newuser->id)->first();
           
              return json_encode(['user'=>$newuser, 'token' => $token, "profile"=>$profile, "preference" => $preferences]);

 

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
