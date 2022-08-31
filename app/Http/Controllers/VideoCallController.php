<?php

namespace App\Http\Controllers;

use App\Models\VideoCall;
use Illuminate\Http\Request;

class VideoCallController extends Controller
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
        $video = new VideoCall();
        $video->sender_id = auth()->user()->id;
        $video->receiver_id = $request->input('receiver');
        $video->call_sdp = $request->input('call_sdp');

        if($video->save())
        {
            return response(['data'=>$video, 'message'=>"Calling"]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VideoCall  $videoCall
     * @return \Illuminate\Http\Response
     */
    public function signal(){
        $data = VideoCall::where('receiver_id', auth()->user()->id)->first();

        return response(['data'=>$data], 201);
    }

    public function show(VideoCall $videoCall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VideoCall  $videoCall
     * @return \Illuminate\Http\Response
     */
    public function edit(VideoCall $videoCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VideoCall  $videoCall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $video = VideoCall::find($id);
        $video->call_sdp = $request->input('call_sdp');
        $video-> receive_sdp = $request->input('receive_sdp');
        $video->ice_call = $request->input('ice_call');
        $video->ice_receive = $request->input('ice_receive');

        if($video->save())
        {
            return response(['message'=>"Calling"]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VideoCall  $videoCall
     * @return \Illuminate\Http\Response
     */
    public function destroy(VideoCall $videoCall)
    {
        //
    }
}
