<?php

namespace App\Http\Controllers;

use App\Models\Liked;
use App\Models\User;
use App\Notifications\MessageNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class LikedController extends Controller
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
        $check = Liked::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if($check == null){
            $likes = new Liked();
            $likes->user_id = auth()->user()->id;
            $likes->profile_id = $request->input('profile');

            $user = User::find($request->input('profile'));
        $data = [
            'name'  => $user->profile->name,
            'message' => $user->profile->name." liked your profile.",
        ];

        Notification::send($user, new MessageNotification($data));

            if($likes->save()){
                return response(['message'=> "Profile Liked."], 201);
            }
        }

     }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Liked  $liked
     * @return \Illuminate\Http\Response
     */
    public function show(Liked $liked)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Liked  $liked
     * @return \Illuminate\Http\Response
     */
    public function edit(Liked $liked)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Liked  $liked
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Liked $liked)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Liked  $liked
     * @return \Illuminate\Http\Response
     */
    public function destroy(Liked $liked)
    {
        //

        if($liked->delete()){
            return response(['message'=>"Unliked profile"],201);
        }

    }
}
