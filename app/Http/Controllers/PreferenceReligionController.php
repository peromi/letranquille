<?php

namespace App\Http\Controllers;

use App\Models\PreferenceReligion;
use Illuminate\Http\Request;

class PreferenceReligionController extends Controller
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
        $religion = new PreferenceReligion();
        $religion->user_id = auth()->user()->id;
        $religion->type = $request->type;


        if($religion->save()){
            return response(['message'=>"Religion preference set."],201);
        }else{
            return response(['message'=>"Something went wrong."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreferenceReligion  $preferenceReligion
     * @return \Illuminate\Http\Response
     */
    public function show(PreferenceReligion $preferenceReligion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PreferenceReligion  $preferenceReligion
     * @return \Illuminate\Http\Response
     */
    public function edit(PreferenceReligion $preferenceReligion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreferenceReligion  $preferenceReligion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PreferenceReligion $preferenceReligion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreferenceReligion  $preferenceReligion
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreferenceReligion $preferenceReligion)
    {
        //
    }
}
