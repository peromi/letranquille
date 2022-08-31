<?php

namespace App\Http\Controllers;

use App\Models\ProfileView;
use App\Models\User;
use App\Notifications\MessageNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ProfileViewController extends Controller
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
        $check = ProfileView::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if($check == null){
            $profile = new ProfileView();
            $profile->user_id = auth()->user()->id;
            $profile->profile_id = $request->input('profile');

            $user = User::find($request->input('profile'));
        $data = [
            'name'  => auth()->user()->profile->name,
            'message' => auth()->user()->profile->name." viewed your profile.",
        ];

        Notification::send($user, new MessageNotification($data));

            if($profile->save()){
                return response(['message'=> "Profile Viewed."], 201);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProfileView  $profileView
     * @return \Illuminate\Http\Response
     */
    public function show(ProfileView $profileView)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProfileView  $profileView
     * @return \Illuminate\Http\Response
     */
    public function edit(ProfileView $profileView)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProfileView  $profileView
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProfileView $profileView)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProfileView  $profileView
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProfileView $profileView)
    {
        //
    }
}
