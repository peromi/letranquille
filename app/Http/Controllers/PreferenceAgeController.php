<?php

namespace App\Http\Controllers;

use App\Models\PreferenceAge;
use Illuminate\Http\Request;

class PreferenceAgeController extends Controller
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
        $age = new PreferenceAge();
        $age->user_id = auth()->user()->id;
        $age->min = $request->min;
        $age->max = $request->max;

        if($age->save()){
            return response(['message'=>"Age preference set."],201);
        }else{
            return response(['message'=>"Something went wrong."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreferenceAge  $preferenceAge
     * @return \Illuminate\Http\Response
     */
    public function show(PreferenceAge $preferenceAge)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PreferenceAge  $preferenceAge
     * @return \Illuminate\Http\Response
     */
    public function edit(PreferenceAge $preferenceAge)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreferenceAge  $preferenceAge
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PreferenceAge $preferenceAge)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreferenceAge  $preferenceAge
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreferenceAge $preferenceAge)
    {
        //
    }
}
