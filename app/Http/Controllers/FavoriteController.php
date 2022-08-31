<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $favorite = Favorite::where('favorites.user_id', auth()->user()->id)->join('profiles','profiles.user_id', '=', 'favorites.profile_id')->join('locations', 'locations.user_id', '=', 'favorites.profile_id')->join('avatars', 'avatars.user_id', '=', 'favorites.profile_id')->join('preference_ages', 'preference_ages.user_id', '=', 'favorites.profile_id')->get();
        return response(['favorite' => $favorite], 201);
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
        $check = Favorite::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if($check == null){
            $favorite = new Favorite();
            $favorite->user_id = auth()->user()->id;
            $favorite->profile_id = $request->input('profile');
            if($favorite->save()){
                return response(['message'=> "Added to favorites successfully."], 201);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Http\Response
     */
    public function show(Favorite $favorite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Http\Response
     */
    public function edit(Favorite $favorite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Favorite $favorite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Favorite $favorite)
    {
        //
    }
}
