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

        $newUser = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','=', auth()->user()->id)->first(['users.*', 'profiles.*', 'avatars.*', 'galleries.*']);

        return json_encode(['user'=>$newUser]);
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
    public function update(Request $request, $id){

        $this->validate($request,[
            'gender' => ['required'],
        
        ]);
        
        
        
        $profile = Profile::where("user_id", $id)->first();
        

        $profile->iam = $request->input("gender");
        $profile->lookingfor = $request->input("lookingfor");
        $profile->name = $request->input("name");
        $profile->birthday = $request->input("birthday");
        $profile->age = $request->input("age");
        $profile->bodytype = $request->input("bodytype");
        $profile->height = $request->input("height");
        $profile->life_style_smoke = $request->input("life_style_smoke");
        $profile->life_style_drink = $request->input("life_style_drink");
        $profile->education = $request->input("education");
        $profile->have_children = $request->input("have_children");
        $profile->love_quote = $request->input("love_quote");
        $profile->member_quote = $request->input("member_quote");
        $profile->seeking_quote = $request->input("seeking_quote");
        $profile->gender = $request->input("gender");
        $profile->dating_for = $request->input("dating_for");
        $profile->live_in = $request->input("live_in");
        $profile->relocate = $request->input("relocate");
        $profile->hair_color = $request->input("hair_color");
        $profile->eye_color = $request->input("eye_color");
        $profile->weight = $request->input("weight");
        $profile->ethnicity = $request->input("ethnicity");
        $profile->body_art = $request->input("body_art");
        $profile->appearance = $request->input("appearance");
        $profile->marital_status = $request->input("marital_status");
        $profile->number_of_children = $request->input("number_of_children");
        $profile->oldest_child = $request->input("oldest_child");
        $profile->youngest_child = $request->input("youngest_child");
        $profile->want_more_children = $request->input("want_more_children");
        $profile->have_pets = $request->input("have_pets");
        $profile->occupation = $request->input("occupation");
        $profile->employment_status = $request->input("employment_status");
        $profile->annual_income = $request->input("annual_income");
        $profile->living_situation = $request->input("living_situation");
        $profile->nationality = $request->input("nationality");
        $profile->languages_spoken = $request->input("languages_spoken");
        $profile->english_ability = $request->input("english_ability");
        $profile->french_ability = $request->input("french_ability");
        $profile->religious_values = $request->input("religious_values");
        $profile->polygamy = $request->input("polygamy");
        $profile->star_sign = $request->input("star_sign");
        $profile->favorite_movie = $request->input("favorite_movie");
        $profile->favorite_music = $request->input("favorite_music");
        $profile->dress_style = $request->input("dress_style");
        $profile->humor = $request->input("humor");
        $profile->religion = $request->input("religion");
        $profile->hobbies_interest = $request->input("hobbies_interest");
        $profile->personality = $request->input("personality");





        
       

        if($profile->save()){

            
            return json_encode(['profile' => $profile]);
            
           
        }
    }
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
        $profile->age =  Carbon::now()->diffInYears(Carbon::parse($request->birthday));
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

        return json_encode(['user' => $newUser]);
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
