<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
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


                    if($gallery->save()){
                        return response(['message'=>'Profile Picture added.'], 201);
                    }else{
                        return response(['message'=>'Something went wrong.'],401);
                    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gallery  $gallery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        if($gallery->delete()){
            return response(['message' => "Image deleted successfully"]);
        }
    }
}
