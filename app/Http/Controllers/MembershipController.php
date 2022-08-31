<?php

namespace App\Http\Controllers;

use App\Models\Membership;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class MembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $membership = Membership::where("user_id", auth()->user()->id)->first();

        return json_encode(['membership' => $membership]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        $this->validate($request,[
            'address' => 'required',
            'country'=> 'required',
            'state' => 'required',
            'city' => 'required',
            'zip' => 'required',
        ]);

        $check = Membership::where('user_id', auth()->user()->id)->first();
        if($check == null){
            $membership = new Membership();
            $membership->user_id = auth()->user()->id;
            $membership->address = $request->input('address');
            $membership->country = $request->input('country');
            $membership->state = $request->input('state');
            $membership->city = $request->input('city');
            $membership->zip = $request->input('zip');
            $membership->plan_type = $request->input('plan_type');
            $membership->duration = $request->input('duration');
            $membership->expiry = Carbon::now()->addDays($request->input('duration'));
            $membership->credit = 0;

            if($membership->save()){
                return json_encode(['message'=>"Subcription successful."]);
            }else{
                return json_encode(['message'=>'Something went wrong']);
            }
        }else{


            if($request->input('address') != null){
               $check->address = $request->input('address');
            }

            if($request->input('country') != null){
               $check->country = $request->input('country');
            }

            if($request->input('state') != null){
                $check->state = $request->input('state');
            }

            if($request->input('city') != null){
                $check->city = $request->input('city');
            }

           if($request->input('zip') != null){
            $check->zip = $request->input('zip');
           }

            $check->plan_type = $request->input('plan_type');
            $check->duration = $request->input('duration');
            $check->expiry = Carbon::now()->addDays($request->input('duration'));


        if($check->save()){
            return json_encode(['message'=>"Subcription successful."]);
        }else{
            return json_encode(['message'=>'Something went wrong']);
        }
        }



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Membership  $membership
     * @return \Illuminate\Http\Response
     */
    public function show(Membership $membership)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Membership  $membership
     * @return \Illuminate\Http\Response
     */
    public function edit(Membership $membership)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Membership  $membership
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Membership $membership)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Membership  $membership
     * @return \Illuminate\Http\Response
     */
    public function destroy(Membership $membership)
    {
        //
    }
}
