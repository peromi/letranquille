<?php

namespace App\Http\Controllers;

use App\Models\BodyType;
use App\Models\Height;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $newUser = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','=', auth()->user()->id)->first(['users.*', 'profiles.*', 'avatars.*']);

        return response(['user'=>$newUser]);
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
        $this->validate($request, [
            'iam' => 'required',
            'lookingfor' => 'required',
            'name' => 'required|string',
            'birthday' => 'required',
            'bodytype' => 'required',
        ]);

        $profile = new Profile();
        $profile->user_id = auth()->user()->id;
        $profile->iam = $request->input('iam');
        $profile->lookingfor = $request->input('lookingfor');
        $profile->name = $request->name;
        $profile->birthday = $request->birthday;
        $profile->bodytype = $request->input('bodytype');
        $profile->show_bodytype = $request->input('body_show');
        $profile->height = $request->input('height');
        $profile->show_height = $request->input('height_show');




        if(  $profile->save() ){
            return response(['message'=>'profile information added'], 201);
        }else{
            return response(['message'=>'Something went wrong.'], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $newUser = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','=', $id)->first(['users.*', 'profiles.*', 'avatars.*']);

        return response(['user' => $newUser]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
