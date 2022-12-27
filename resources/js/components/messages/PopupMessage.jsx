import React from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

const PopupMessage = ({user, profile, subscription, handler, liveInCountry, liveInState, liveInCity}) => {
    const token = useSelector((state)=>state.user.token)
    const userprofile = useSelector((state)=>state.user.profile)
 
    
    const [chatheight, setChatheight] = React.useState(450)
    const [file, setFile] = React.useState("")
    const [type, setType] = React.useState("text")
    const [isUpload, setIsUpload] = React.useState(false)   

    const [isloading, setIsLoading] = React.useState(false)
    const [message, setMessage] = React.useState("");
    const [recipient, setRecipient] = React.useState("");
    const [resprofile, setResprofile] = React.useState('') 

    const [messages, setMessages] = React.useState([]); 

    const loadData = () => {
        
        axios
            .get(`/api/get-messages/${profile.user_id}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.messages)

                setMessages(response.data.messages);
                setRecipient(response.data.recipient);
                setResprofile(response.data.recipient.profile)
                 
            })
            .catch((error) => {
                console.log(error)
              
                // alert(error.response.data.message)

                // if (error.response.status == 401) {
                //     ls.remove(USERDB);
                //     ls.remove(DB);

                //     navigate("/login", { replace: true });

                //     alert(error.response.data.message);
                // }
            });
    };

    React.useEffect(() => {
        let id = setInterval(() => {
            loadData();
        }, [5000]);

        return () => {
            clearInterval(id);
        };
    }, []);


    const handleSendMessage = () => {
      

        let formData = new FormData();

        formData.append("data", file);
        formData.append("type", type);
        formData.append("message", message);
        formData.append("recipient", profile.user_id);

        axios.post(`/api/send-message`, formData, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " +  token,
                },
            })
            .then((response) => {
                // alert(response.data.message);
                
                setMessage("");
                loadData();
            }).catch((error) => {
                console.log(error.response.data);
           
            });
    };
    
    let imgupload = document.getElementById("image");
    let docupload = document.getElementById("doc");
    let musicupload = document.getElementById("music");
    let videoupload = document.getElementById("video");

    let localVideo = document.getElementById("webcam");
    let remoteVideo = document.getElementById("remotecam");

    const [answer, setAnswer] = React.useState(null);
    const [iceCandidate, setIceCandidate] = React.useState(null);
    const [incomingcall, setIncomingcall] = React.useState(null);
    const [calling, setCalling] = React.useState(false);
    const [offerdata, setOfferdata] = React.useState(null);
    const [answerdata, setAnswerdata] = React.useState(null);
    const [answering, setAnswering] = React.useState(false);
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
                <div className="w-full bg-white h-[350px] relative">
                    {messages.length > 0 ? (
                        <div className=" overflow-y-scroll h-full bg-[#f4f4f4] relative p-3 pb-64">
                            {messages.map((m, index) => {
                                if (m.sender === resprofile.user_id) {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row  items-start mb-[12px] relative"
                                        >
                                            <div
                                                className="w-[34px] h-[34px] rounded-full m-2"
                                                style={{
                                                    backgroundImage: `url('/storage/avatar/${resprofile.first_photo}')`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                }}
                                            ></div>
                                            <div className="mr-2 font-bold p-3 bg-white rounded-md justify-between flex flex-col gap-x-4 relative">
                                                <span className="text-sm text-slate-500 ml-2">
                                                    {resprofile.name}:
                                                </span>
                                                <div className="flex flex-row  items-center gap-x-2">
                                                   <p>{m.message}</p>

                                                   <p className="text-sm text-slate-600">
                                                    {moment(
                                                        m.created_at
                                                    ).fromNow()}
                                                </p>
                                                   </div>

                                                {m.data_type === "image" && (
                                                    <img 
                                                        src={`/storage/messages/${m.data}`} width="40%"
                                                   ></img>
                                                )}
                                                {m.data_type === "audio" && (
                                                    <audio controls
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                         <video width={120} autoPlay controls>
                                                        <source
                                                            src={`/storage/messages/${m.data}`}
                                                            type="video/mp4"
                                                        ></source>
                                                    </video>
                                                )}
                                                 
                                                 {subscription === null && <div className="absolute p-2 flex flex-col items-center top-0 left-0 right-0 bottom-0 bg-slate-200/75 backdrop-blur-sm">
                                     
                                                       <small>You can't read this message</small>
                                                <Link to="/manage-subscription" className="bg-green-500 p-1  rounded-full m-2 text-sm">Upgrade Now</Link> 
                                   
                                            </div>}
                                            </div>
                                           
                                           
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="flex justify-end mb-[12px]">
                                            <div
                                                key={index}
                                                className="flex flex-row  items-center"
                                            >
                                                <div className="mr-2 font-bold p-3 bg-white rounded-md justify-between flex flex-col gap-x-4">
                                                   <div className="flex flex-row items-center gap-x-2">
                                                   <p>{m.message}</p>

                                                   <p className="text-sm text-slate-500">
                                                    {moment(
                                                        m.created_at
                                                    ).fromNow()}
                                                </p>
                                                   </div>

                                                   {m.data_type === "image" && (
                                                    <img 
                                                        src={`/storage/messages/${m.data}`} width="40%"
                                                   ></img>
                                                )}
                                                    {m.data_type === "audio" && (
                                                    <audio controls
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                    <video width={120} autoPlay controls>
                                                        <source
                                                            src={`/storage/messages/${m.data}`}
                                                            type="video/mp4"
                                                        ></source>
                                                    </video>
                                                )}
                                                 {recipient.subscription == null &&<div className="flex flex-col p-2">
                                                       <small>{resprofile.name} can't read this message</small>
                                                       <small>{resprofile.iam === "male" ? "He is ":"She is "}on free subscription</small>
                                                      {subscription === null && <Link to="/manage-subscription" className="bg-green-500 p-2 px-12">Upgrade Now</Link>}
                                                    </div>}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    );
                                }

                                if (m.recipient !== resprofile.user_id) {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row gap-x-2 items-center"
                                        >
                                            <div className="mr-2 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                                <p>{m.message}</p>
                                                {m.data_type === "audio" && (
                                                    <audio
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                    <video width={140} controls>
                                                        <source
                                                            src={`/storage/messages/${m.data}`}
                                                            type="video/mp4"
                                                        ></source>
                                                    </video>
                                                )}
                                                {recipient.subscription == null &&<div>
                                                       <p>{resprofile.name} can't read this message</p>
                                                      {subscription == null && <Link to="/manage-subscription">Upgrade Now</Link>}
                                                    </div>}
                                            </div>
                                            <p>
                                                {moment(m.created_at).fromNow()}
                                            </p>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row gap-x-2 items-start"
                                        >
                                            <div
                                                className="w-[34px] h-[34px] rounded-full m-2"
                                                style={{
                                                    backgroundImage: `url('/storage/avatar/${resprofile.first_photo}')`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                }}
                                            ></div>
                                            <div className="mr-2 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                                <span className="text-sm text-slate-500 ml-2">
                                                    {resprofile.name}:
                                                </span>
                                                <p>{m.message}</p>
                                                {m.data_type === "audio" && (
                                                    <audio
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                   <video width={140} controls>
                                                        <source
                                                            src={`/storage/messages/${m.data}`}
                                                            type="video/mp4"
                                                        ></source>
                                                    </video>
                                                )}
                                                 {recipient.subscription == null &&<div>
                                                       <p>{resprofile.name} can't read this message</p>
                                                      {subscription == null && <Link to="/manage-subscription">Upgrade Now</Link>}
                                                    </div>}
                                            </div>
                                            <p>
                                                {moment(m.created_at).fromNow()}
                                            </p>
                                        </div>
                                    );
                                }
                            })}

                            {/* <div className="bg-white/45 backdrop-blur-sm flex flex-col justify-center items-center" style={{  position:'absolute', top:0, left:0, right:0, bottom:0}}>
                            <h1 className="font-bold text-xl">You can't view messages from {recipient.name}</h1>
                            <p>Upgrade and have an unlimited chats</p>

                            <Link to="/manage-subscription" className="mt-12 p-3 bg-red-600 text-white px-24 rounded-full font-bold">Upgrade to Premium Membership</Link>
                        </div> */}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <i className="fi fi-sr-comments text-5xl"></i>
                            <h1 className="font-bold text-2xl">
                                Send message to {resprofile.name}
                            </h1>
                            <p>To start conversion</p>
                        </div>
                    )}

                   
                </div>

                {/* message sender */}
                <div className="flex flex-row items-center">
                    <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} id="" rows={1}  placeholder="Send a message"  className="flex-1 ml-2 tracking-tighter bg-zinc-100 ouline-0 round-full p-3"></textarea>
                    <button onClick={()=>{
                        setIsUpload(true)
                    }}>file</button>
                    <button onClick={handleSendMessage} className="bg-red-900 tracking-tighter p-3 mr-2 rounded-full text-white">Send</button>
                </div>
            </div>


           { isUpload && <div className="fixed bg-white/70 backdrop-blur-2xl flex flex-col  top-0 right-0 bottom-0 left-0">
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
                                 <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {
                                        musicupload.click();
                                    }}
                                >
                                    <i class="fi fi-rr-music"></i>
                                    <p>Music</p>
                                </button> 
                 <button
                                    className="bg-white ring-1 ring-slate-900/5 rounded-md p-4"
                                    onClick={() => {videoupload.click();
                                       
                                    }}
                                >
                                    <i class="fi fi-rr-video-camera-alt"></i>
                                    <p>Video</p>
                                </button> 

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
                </div>}
    </>
  )
}

export default PopupMessage