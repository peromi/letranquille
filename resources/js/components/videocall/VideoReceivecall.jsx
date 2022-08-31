import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../../context/SocketContext';



function VideoReceivecall() {
    const navigate = useNavigate()

    const { myVideo, userVideo, call, callAccepted, callEnded, stream, answerCall } = React.useContext(SocketContext)







  return (
    <div className="video_container">
      <div className="video_cams">
        <video id='caller' ref={myVideo} className="caller" py src="" autoPlay />
        <video id='receiver' ref={userVideo} className="receiver" src="" autoPlay />
      </div>
      <p>name</p>
      <div className="video_controllers">
        <button className='mute_call'><i class="fi fi-rr-microphone"></i></button>
        {callAccepted == true ? <button className='end_call' style={{ backgroundColor:'red' }} onClick={()=>{
            navigate('/messages',{replace:true})

        }}><i class="fi fi-sr-phone-slash"></i></button>:<button className='end_call' style={{ backgroundColor:'green' }} onClick={()=>{
            answerCall()

        }}><i class="fi fi-sr-phone-slash"></i></button>}
        <button className='mute_cam'><i class="fi fi-sr-video-camera"></i></button>
      </div>
    </div>
  )
}

export default VideoReceivecall
