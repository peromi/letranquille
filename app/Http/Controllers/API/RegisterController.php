<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Membership;
use App\Models\Preferences;
use App\Models\Profile;
use App\Models\Promo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
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

     public function forgot(Request $request){
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        $checkIfEmailAlreadyExists = User::where('email', '=', $request->input('email'));

        if ($checkIfEmailAlreadyExists !== null) {
            $token = $checkIfEmailAlreadyExists->createToken('token')->plainTextToken;
            $index = DB::table('password_resets')->insert(['email' => $checkIfEmailAlreadyExists->email, 'token'=>$token]);

            if($index != null){
                return json_encode(['message' => "Reset password link sent successfully."]);
            }
        }
     }


     public function promo(Request $request){
        $this->validate($request, [
            'coupon' => 'required',
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'name' => 'required',
            'iam' => 'required',
            'looking' => 'required',
            'age' => 'required',
            'password' => ['required', 'string', 'min:8'],
        ]);
        $checkCode = Promo::where('coupon', $request->input('coupon'))->first();

        if($checkCode != null){


            $user = new User();
        $user->email = $request->email;
        $user->status = "online";
        $user->password = Hash::make($request->password);

        if($user->save()){

            $membership = new Membership();
            $membership->user_id = $user->id;
            $membership->address = "nil";
            $membership->country = "nil";
            $membership->state = 'nil';
            $membership->city = 'nil';
            $membership->zip = 'nil';
            $membership->plan_type = "silver";
            $membership->duration = $request->input('duration');
            $membership->expiry = Carbon::now()->addDays($checkCode->days);
            $membership->credit = 0;

             $membership->save();
             

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
           
              return json_encode(['user'=>$newuser, 'token' => $token,"subscription"=>$membership, "profile"=>$profile, "preference" => $preferences]);

 
             
       
    }else{
        return json_encode(['message'=>"Wrong coupon code"]);
    }

}

     }
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

            $membership = new Membership();
            $membership->user_id = $user->id;
            $membership->address = "nil";
            $membership->country = "nil";
            $membership->state = 'nil';
            $membership->city = 'nil';
            $membership->zip = 'nil';
            $membership->plan_type = "silver";
            $membership->duration = 7;
            $membership->expiry = Carbon::now()->addDays(7);
            $membership->credit = 0;

             $membership->save();
             

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
           
            return json_encode(['user'=>$newuser, 'token' => $token, "subscription" =>$membership, "profile"=>$profile, "preference" => $preferences]);

 

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
