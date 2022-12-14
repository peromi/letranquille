<?php

namespace App\Http\Controllers;

use App\Models\PreferenceFood;
use Illuminate\Http\Request;

class PreferenceFoodController extends Controller
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
        $food = new PreferenceFood();
        $food->user_id = auth()->user()->id;
        $food->food_type = $request->type;


        if($food->save()){
            return response(['message'=>"Food preference set."],201);
        }else{
            return response(['message'=>"Something went wrong."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreferenceFood  $preferenceFood
     * @return \Illuminate\Http\Response
     */
    public function show(PreferenceFood $preferenceFood)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PreferenceFood  $preferenceFood
     * @return \Illuminate\Http\Response
     */
    public function edit(PreferenceFood $preferenceFood)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreferenceFood  $preferenceFood
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreferenceFood  $preferenceFood
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreferenceFood $preferenceFood)
    {
        //
    }
}
