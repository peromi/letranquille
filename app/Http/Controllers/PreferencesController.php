<?php

namespace App\Http\Controllers;

use App\Models\Preferences;
use Illuminate\Http\Request;

class PreferencesController extends Controller
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
        // $this->validate($request, [
        //     'user_id' => 'required'
        // ]);



        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function show(Preferences $preferences)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function edit(Preferences $preferences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
            $preference = Preferences::where("user_id",$id)->first();

            
            
            $preference->education = $request->input('education');
       


            $preference->have_children = $request->input('have_children') ;
            $preference->age_min = $request->input('age_min') ;
            $preference->age_max = $request->input('age_max') ;
            $preference->live_in = $request->input('live_in') ;
            $preference->relocate = $request->input('relocate') ;
            $preference->hair_color = $request->input('hair_color') ;
            $preference->eye_color = $request->input('eye_color') ;
            $preference->weight = $request->input('weight') ;
            $preference->height = $request->input('height') ;
            $preference->smoke = $request->input('smoke') ;
            $preference->drink = $request->input('drink') ;
            $preference->ethnicity = $request->input('ethnicity') ;
            $preference->body_style = $request->input('body_style') ;
            $preference->body_art = $request->input('body_art') ;
            $preference->appearance = $request->input('appearance') ;
            $preference->marital_status = $request->input('marital_status') ;
            $preference->number_of_children = $request->input('number_of_children') ;
            $preference->oldest_child = $request->input('oldest_child') ;
            $preference->youngest_child = $request->input('youngest_child') ;
            $preference->want_more_children = $request->input('want_more_children') ;
            $preference->have_pets = $request->input('have_pets') ;
            $preference->occupation = $request->input('occupation') ;
            $preference->employment_status = $request->input('employment_status') ;
            $preference->annual_income = $request->input('annual_income') ;
            $preference->living_situation = $request->input('living_situation') ;
            $preference->nationality = $request->input('nationality') ;
            $preference->languages_spoken = $request->input('languages_spoken') ;
            $preference->english_ability = $request->input('english_ability') ;
            $preference->french_ability = $request->input('french_ability') ;
            $preference->religious_values = $request->input('religious_values') ;
            $preference->polygamy = $request->input('polygamy') ;
            $preference->star_sign = $request->input('star_sign') ;

            $preference->religion = $request->input('religion') ;



            if($preference->save()){
                return json_encode(['preference' => $preference]);
            }
            
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function destroy(Preferences $preferences)
    {
        //
    }
}
