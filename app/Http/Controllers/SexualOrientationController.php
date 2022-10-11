<?php

namespace App\Http\Controllers;

use App\Models\SexualOrientation;
use Illuminate\Http\Request;

class SexualOrientationController extends Controller
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
        $this->validate($request,[
            'type' => 'required'
        ]);

        $sexualOrientation = new SexualOrientation();
        $sexualOrientation->user_id = auth()->user()->id;
        $sexualOrientation->sex_type = $request->input('type');
        $sexualOrientation->show = $request->input('show');

        if($sexualOrientation->save()){
            return response(['message' => "Sexual Orientation added"],201);
        }else{
            return response(['message'=>'Something went wrong, try again.']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SexualOrientation  $sexualOrientation
     * @return \Illuminate\Http\Response
     */
    public function show(SexualOrientation $sexualOrientation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SexualOrientation  $sexualOrientation
     * @return \Illuminate\Http\Response
     */
    public function edit(SexualOrientation $sexualOrientation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SexualOrientation  $sexualOrientation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SexualOrientation $sexualOrientation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SexualOrientation  $sexualOrientation
     * @return \Illuminate\Http\Response
     */
    public function destroy(SexualOrientation $sexualOrientation)
    {
        //
    }
}
