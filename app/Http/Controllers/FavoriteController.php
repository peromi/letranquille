<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\User;
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
        $favorite = Favorite::where('favorites.user_id', auth()->user()->id)->join('profiles','profiles.user_id', '=', 'favorites.profile_id')->get();
        return json_encode(['favorite' => $favorite], 201);
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
                $user = User::where('id', auth()->user()->id)->with('profile')->with('favorite')->with('likes')->with('preferences')->with('blocklist')->get();
                return json_encode(['message'=> "Added to favorites successfully.", 'user'=>$user]);
            }
        }else{
            $user = User::where('id', auth()->user()->id)->with('profile')->with('favorite')->with('likes')->with('preferences')->with('blocklist')->get();
            return json_encode(['message'=> "Already your favorite.", 'user'=>$user]);
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
    public function destroy($id)
    {
        $fav = Favorite::find($id);

        $fav->delete();


        return json_encode(['message' => "Removed Favorite"]);
    }
}
