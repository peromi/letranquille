<?php

namespace App\Http\Controllers;

use App\Models\Avatar;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AvatarController extends Controller
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
        // $this->validate($request,[
        //     'avatar1' => 'required'
        // ])

        if(!auth()->user()->id){
           return response(['message' => "Token expired, Login to continue."], 401);
        }else{

            $avatar = new Avatar();
            $avatar->user_id = auth()->user()->id;
            //AVATAR PROFILE

            if($request->hasFile('avatar1')){
                $fileWithExt = $request->file('avatar1')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('avatar1')->storeAs('public/avatar/', $fileToSave);

                // AVATAR 2
                $fileWithExt2 = $request->file('avatar2')->getClientOriginalName();
                $filename2 = pathinfo($fileWithExt2, PATHINFO_FILENAME);
                $ext2 = pathinfo($fileWithExt2, PATHINFO_EXTENSION);
                $fileToSave2 = md5($filename2.time()).'.'.$ext2;
                $request->file('avatar2')->storeAs('public/avatar/', $fileToSave2);



                $avatar->first_cover = $fileToSave;
                $avatar->second_cover = $fileToSave2;
                $avatar->bio = $request->input('bio');

                // $avatar->save();

            }

            // Gallery
            $gallery = new Gallery();
            if($request->hasFile('gallery1'))
            {
                $fileWithExt = $request->file('gallery1')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery1')->storeAs('public/gallery/', $fileToSave);

                $gallery->user_id = auth()->user()->id;
                $gallery->cover = $fileToSave;
                // $gallery->save();
            }

            // Gallery 2
            $gallery2 = new Gallery();
            if($request->hasFile('gallery2'))
            {
                $fileWithExt = $request->file('gallery2')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery2')->storeAs('public/gallery/', $fileToSave);

                $gallery2->user_id = auth()->user()->id;
                $gallery2->cover =$fileToSave;
                $gallery2->save();
            }

            // Gallery 3
            $gallery3 = new Gallery();
            if($request->hasFile('gallery3'))
            {
                $fileWithExt = $request->file('gallery3')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery3')->storeAs('public/gallery/', $fileToSave);

                $gallery3->user_id = auth()->user()->id;
                $gallery3->cover = $fileToSave;
                $gallery3->save();
            }

            // Gallery 4
            $gallery4 = new Gallery();
            if($request->hasFile('gallery4'))
            {
                $fileWithExt = $request->file('gallery4')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery4')->storeAs('public/gallery/', $fileToSave);

                $gallery4->user_id = auth()->user()->id;
                $gallery4->cover =  $fileToSave;
                $gallery4->save();
            }
            // Gallery 5
            $gallery5 = new Gallery();
            if($request->hasFile('gallery5'))
            {
                $fileWithExt = $request->file('gallery5')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery5')->storeAs('public/gallery/', $fileToSave);

                $gallery5->user_id = auth()->user()->id;
                $gallery5->cover = $fileToSave;
                $gallery5->save();
            }
            // Gallery 6
            $gallery6 = new Gallery();
            if($request->hasFile('gallery6'))
            {
                $fileWithExt = $request->file('gallery6')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery6')->storeAs('public/gallery/', $fileToSave);

                $gallery6->user_id = auth()->user()->id;
                $gallery6->cover =  $fileToSave;
                $gallery6->save();
            }


            if($avatar->save() && $gallery->save()){
                return response(['message'=>'Profile Picture added.'], 201);
            }else{
                return response(['message'=>'Something went wrong.'],401);
            }
        }







    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function show(Avatar $avatar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function edit(Avatar $avatar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Avatar $avatar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Avatar  $avatar
     * @return \Illuminate\Http\Response
     */
    public function destroy(Avatar $avatar)
    {
        //
    }
}
