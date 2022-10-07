<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use Illuminate\Http\Request;

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
}