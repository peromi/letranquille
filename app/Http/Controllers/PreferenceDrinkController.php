<?php

namespace App\Http\Controllers;

use App\Models\PreferenceDrink;
use Illuminate\Http\Request;

class PreferenceDrinkController extends Controller
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
        $drink = new PreferenceDrink();
        $drink->user_id = auth()->user()->id;
        $drink->type = $request->type;


        if($drink->save()){
            return response(['message'=>"Drink preference set."],201);
        }else{
            return response(['message'=>"Something went wrong."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreferenceDrink  $preferenceDrink
     * @return \Illuminate\Http\Response
     */
    public function show(PreferenceDrink $preferenceDrink)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PreferenceDrink  $preferenceDrink
     * @return \Illuminate\Http\Response
     */
    public function edit(PreferenceDrink $preferenceDrink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreferenceDrink  $preferenceDrink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PreferenceDrink $preferenceDrink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreferenceDrink  $preferenceDrink
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreferenceDrink $preferenceDrink)
    {
        //
    }
}
