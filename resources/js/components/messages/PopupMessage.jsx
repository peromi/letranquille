import React from 'react'

const PopupMessage = ({user, profile, subscription, handler, liveInCountry, liveInState, liveInCity}) => {
    const [chatheight, setChatheight] = React.useState(450)
    const [file, setFile] = React.useState("")
    const [type, setType] = React.useState("")
    const [isUpload, setIsUpload] = React.useState(false)   
  return (
    <>
    <div className="fixed right-[64px] flex flex-col duration-700 ease-in-out bottom-0 w-[350px]   bg-white drop-shadow-2xl" style={{height:chatheight}}>
                <div className="h-[50px] w-full  bg-red-900 text-white flex flex-row gap-x-2">
                    <button onClick={()=>{
                        if(chatheight === 450){

                            setChatheight(50)
                        }else{
                            setChatheight(450)
                        }
                    }}>
                        {chatheight === 450 ? <i className="fi fi-rr-angle-small-down"></i>: <i className="fi fi-rr-angle-small-up"></i>}
                    </button>
                    <div className="w-full flex flex-row items-center">
                        <div className="w-[35px] h-[35px] rounded-full mr-3" style={{backgroundImage:`url(/storage/avatar/${profile.first_photo})`, backgroundSize:'cover'}}></div>
                        <div className="">
                            <p className="capitalize tracking-tighter -mb-2">{profile.name}</p>
                            <p className="overflow-ellipsis text-xs tracking-tighter">{profile.age}  {liveInCity ?? "No answer"}, {liveInState ?? "No answer"}, {liveInCountry ?? "No answer"}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <button className="mx-2"><i className="fi fi-rr-menu-dots"></i></button>
                        <button onClick={handler} className="mr-[8px]">
                            <i className="fi-rr-cross-small"></i>
                        </button>
                    </div>
                </div>
                {/* body */}
                <div className="w-full flex-1 p-2">
                    <p>Message here</p>
                </div>

                {/* message sender */}
                <div className="flex flex-row items-center">
                    <textarea name="message" id="" rows={1}  placeholder="Send a message"  className="flex-1 ml-2 tracking-tighter bg-zinc-100 ouline-0 round-full p-3"></textarea>
                    <button>file</button>
                    <button className="bg-red-900 tracking-tighter p-3 mr-2 rounded-full text-white">Send</button>
                </div>
            </div>


            <div className="fixed bg-white/70 backdrop-blur-2xl flex flex-col  top-0 right-0 bottom-0 left-0">
                    <div className="flex justify-end p-3">
                        <button
                            onClick={() => {
                                setIsUpload(false);
                            }}
                        >
                            <i className="fi fi-rr-cross"></i>
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full">
                        <input
                            type="file"
                            id="image"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setFile(e.target.files[0]);
                                    setType("image");

                                    setIsUpload(false);
                                }
                            }}
                        />
                        <input
                            type="file"
                            id="doc"
                            className="hidden"
                            accept=".doc, .pdf, .xlsx, .xls"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setFile(e.target.files[0]);
                                    setType("document");
                                    setIsUpload(false);
                                }
                            }}
                        />
                        <input
                            type="file"
                            id="music"
                            className="hidden"
                            accept="audio/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setFile(e.target.files[0]);
                                    setType("audio");
                                    setIsUpload(false);
                                }
                            }}
                        />
                        <input
                            type="file"
                            id="video"
                            className="hidden"
                            accept="video/*"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setFile(e.target.files[0]);
                                    setType("video");
                                    setIsUpload(false);
                                }
                            }}
                        />

                        {/* <div className="flex flex-row h-[300px]">
                            <video id="webcam" autoPlay playsInline></video>
                            <video id="remotecam" autoPlay playsInline></video>
                        </div> */}
                        <h1 className="font-bold text-3xl">
                            What do you want to share
                        </h1>
                        <h1 className="font-bold text-3xl">
                            with {resprofile.name}?
                        </h1>
                        <div className="flex justify-center items-center mt-2">
                            <div className="md:w-[45%] flex flex-row justify-center items-center gap-x-4 ">
                                <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {
                                        imgupload.click();
                                    }}
                                >
                                    <i className="fi fi-rr-photo"></i>
                                    <p>Image</p>
                                </button>
                                <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {
                                        docupload.click();
                                    }}
                                >
                                    <i class="fi fi-rr-file"></i>
                                    <p>Document</p>
                                </button>
                                {subscription !== null && subscription.plan_type === 'platinum' && <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {
                                        musicupload.click();
                                    }}
                                >
                                    <i class="fi fi-rr-music"></i>
                                    <p>Music</p>
                                </button>}
                                {subscription !== null && subscription.plan_type === 'platinum' && <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {videoupload.click();
                                       
                                    }}
                                >
                                    <i class="fi fi-rr-video-camera-alt"></i>
                                    <p>Video</p>
                                </button>}

                                {/* <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={async () => {
                                        // localStream = await navigator.mediaDevices.getDisplayMedia({video:true, audio:true}).then((currentStream)=>{
                                        //             // setStream(currentStream)
                                        //             localVideo.srcObject = currentStream;
                                        //         })
                                        // // gettracks
                                        // localStream.getTracks().forEach((track)=>{
                                        //     pc.addTrack(track, localStream)
                                        // })
                                        // pc.ontrack = event =>{
                                        //     event.streams[0].getTracks().forEach((track)=>{
                                        //         remoteStream.addTrack(track);
                                        //     });
                                        // }
                                        // // addvideo
                                        // localVideo.srcObject = localStream;
                                        // remoteVideo.srcObject = remoteStream;
                                        // if(!pc.currentRemoteDescription && answer !== null){
                                        //     const answerDescription = new RTCSessionDescription(answer.answer)
                                        //     pc.setRemoteDescription(answerDescription)
                                        // }
                                        pc = new RTCPeerConnection(server)
                                        remoteStream = new MediaStream();


                                        await navigator.mediaDevices.getUserMedia({
                                            audio: true,
                                            video: true,
                                        }).then(async (stream)=>{
                                            
        
                                           

                                            
                                
                                            stream.getTracks().forEach((track) => {
                                                pc.addTrack(track, stream);
                                            });
                                    
                                            pc.ontrack = (event) => {
                                                console.log(event.streams[0].id);
                                                event.streams[0].getTracks().forEach((track) => {
                                                    remoteStream.addTrack(track);
                                                });
                                            };
                                    
                                            
                                                localVideo.srcObject = stream;
                                                remoteVideo.srcObject = remoteStream;
                                           
                                            // setCalling(true)
                                            // create offer
                                            const offerDescription = await pc.createOffer();
                                            await pc.setLocalDescription(offerDescription);
            
                                            const offer = {
                                                sdp: offerDescription.sdp,
                                                type: offerDescription.type,
                                            };
            
                                            console.log(offer);
            
                                            ls.set("OFFER", offer);
                                             
                                                socket.emit("offer", {
                                                    id: parseInt(params.id),
                                                    sender: user,
                                                    data: offer,
                                                });
                                          
            
                                            
        
        
        
                                        });
        
                                        pc.onicecandidate = (event) => {
                                            if (event.candidate) {
                                                ls.set("ICE", event.candidate.toJSON());
                                                console.log(event.candidate.toJSON());
                                                socket.emit("ice", {
                                                    id: parseInt(params.id),
                                                    data: event.candidate.toJSON(),
                                                });
        
                                                // send ice to rescipient
                                            }
                                        };
        
                                     
        
                                        if (answerdata !== null) {
                                            const answerDescription =
                                                new RTCSessionDescription(data.data);
                                            pc.setRemoteDescription(answerDescription);

                                            pc.addIceCandidate(iceCandidate);
                                        }
                                
                                  
                                
                                       
                                    }}
                               
                                >
                                    Call Person
                                </button>
                                <button
                                    onClick={() => {
                                        localStream
                                            .getTracks()
                                            .forEach((track) => {
                                                track.stop();
                                                localVideo.srcObject = null;
                                            });
                                    }}
                                >
                                    Stop Stream
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default PopupMessage