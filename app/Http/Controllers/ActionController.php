<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Imports\UsersImport;
use App\Models\Coupon;
use App\Models\Preferences;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ActionController extends Controller
{
    //
    public function addCoupon(Request $request){
        // $table->string('coupon');
        // $table->double('discount');
        $coupon = new Coupon();
        $coupon->coupon = $request->input('coupon');
        $coupon->discount = $request->input('discount');

        if($coupon->save())
        {
            return json_encode(['message'=> "Successfully added coupon"]);
        }
    }

    public function getCoupon(Request $request){

        $coupon = Coupon::where("coupon", "=", $request->input('coupon'))->first();

        if($coupon !== null){
            return json_encode(['coupon'=>$coupon]);
        }else{
            return json_encode(['message'=> "Invalid coupon"]);
        }


    }
    public function fileImport(Request $request)
    {
        Excel::import(new UsersImport, $request->file('file')->store('temp'));
        return back();
    }

    public function upload(){

    }


    public function getAllUsers(){
        $user = User::where('id', auth()->user()->id)->with('gallery')->with('likes')->first();

        // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
        $preferences = Preferences::where("user_id", auth()->user()->id)->first();
       
        $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preferences->seekingfor)->where('profiles.age',">=", $preferences->age_min)->where('profiles.age',"<=", $preferences->age_max)->with('gallery')->with('likes')->inRandomOrder()->paginate(250);
       

        
       
        return json_encode(['allusers' => $allusers, 'user' => $user, "preference"=>$preferences]);
    }
}
