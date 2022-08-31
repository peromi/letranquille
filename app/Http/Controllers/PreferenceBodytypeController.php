<?php

namespace App\Http\Controllers;

use App\Models\PreferenceBodytype;
use Illuminate\Http\Request;

class PreferenceBodytypeController extends Controller
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
        $bodytype = new PreferenceBodytype();
        $bodytype->user_id = auth()->user()->id;
        $bodytype->type = $request->type;


        if($bodytype->save()){
            return response(['message'=>"Body preference set."],201);
        }else{
            return response(['message'=>"Something went wrong."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PreferenceBodytype  $preferenceBodytype
     * @return \Illuminate\Http\Response
     */
    public function show(PreferenceBodytype $preferenceBodytype)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PreferenceBodytype  $preferenceBodytype
     * @return \Illuminate\Http\Response
     */
    public function edit(PreferenceBodytype $preferenceBodytype)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PreferenceBodytype  $preferenceBodytype
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PreferenceBodytype $preferenceBodytype)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PreferenceBodytype  $preferenceBodytype
     * @return \Illuminate\Http\Response
     */
    public function destroy(PreferenceBodytype $preferenceBodytype)
    {
        //
    }
}
