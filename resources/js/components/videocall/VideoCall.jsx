import React from 'react'
import '../../../css/videocall.scss'
import { getFirestore, collection, getDoc, addDoc, doc , setDoc} from 'firebase/firestore/lite';
import app from '../../containers/FirebaseConfig';

import ls from 'localstorage-slim'
import axios from 'axios';
import { SocketContext } from '../../context/SocketContext';




const CALLDB = "video-call";
const DB = "user-m9j234u94"
function VideoCall({handle, receiver}) {
    const {me, myVideo, userVideo, call, leaveCall, answerCall, callUser} = React.useContext(SocketContext)








  React.useEffect(()=>{


    callUser(receiver.id)


  }, [])
  return (
    <div className="video_container">
      <div className="video_cams">
        <video id='caller' ref={myVideo} className="caller" playsInline src="" autoPlay />
        <video id='receiver' ref={userVideo} className="receiver" playsInline src="" autoPlay />
      </div>
      <p></p>
      <div className="video_controllers">
        <button className='mute_call'><i class="fi fi-rr-microphone"></i></button>
        <button className='end_call' onClick={()=>{
            handle()

        }}><i class="fi fi-sr-phone-slash"></i></button>
        <button className='mute_cam'><i class="fi fi-sr-video-camera"></i></button>
      </div>
    </div>
  )
}

export default VideoCall
