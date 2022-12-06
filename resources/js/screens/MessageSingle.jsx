import React from "react";
import MainContainer from "../containers/MainContainer";
import { data as dp } from "../constants";
import UserMessage from "../components/messages/UserMessage";
import MessageBoard from "../components/messages/MessageBoard";
import MessageChatBox from "../components/messages/MessageChatBox";
import VideoCall from "../components/videocall/VideoCall";
import axios from "axios";
import ls from "localstorage-slim";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VideoReceivecall from "../components/videocall/VideoReceivecall";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../components/loaders/LoadingPage";

const USERDB = "dao";
const DB = "user-m9j234u94";
 

const MessageSingle = () => {
    const { socket } =
        React.useContext(SocketContext);
    const navigate = useNavigate();
    const params = useParams();

    const profile = useSelector((state)=>state.user.profile)
    const subscription = useSelector((state)=>state.user.subscription)
    const token = useSelector((state)=>state.user.token)

    const [user, setUser] = React.useState(null);

    const [isloading, setIsLoading] = React.useState(false)
    const [message, setMessage] = React.useState("");
    const [recipient, setRecipient] = React.useState("");
    const [resprofile, setResprofile] = React.useState('')
    const [file, setFile] = React.useState(null);
    const [type, setType] = React.useState("text");

    const [messages, setMessages] = React.useState([]);

    const [isUpload, setIsUpload] = React.useState(false);

    const loadData = () => {
        
        axios
            .get(`/api/get-messages/${params.id}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.recipient)

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

    const handleSendMessage = () => {
      

        let formData = new FormData();

        formData.append("data", file);
        formData.append("type", type);
        formData.append("message", message);
        formData.append("recipient", params.id);

        axios
            .post(`/api/send-message`, formData, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " +  token,
                },
            })
            .then((response) => {
                // alert(response.data.message);
                setMessage(null);
                loadData();
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

    let server = {
        iceServers: [
            {
                urls: [
                    "stun:stun1.l.google.com:19302",
                    "stun:stun2.l.google.com:19302",
                ],
            },
        ],
        iceCandidatePoolSize: 10,
    };

    let pc;

    React.useEffect(() => {
        let id = setInterval(() => {
            loadData();
        }, [5000]);

        return () => {
            clearInterval(id);
        };
    }, []);

    React.useEffect(() => {
        let db = ls.get(USERDB, { decrypt: true });
        if (db !== null) {
            console.log("current", db.user);
            setUser(db.user.user);
        }

        socket.emit("insertuser", { id: db.user.id });
        socket.on("offer", (data) => {
            if (incomingcall === null) {
                console.log(data);
                setIncomingcall(data.sender);
                // pc.setRemoteDescription(new RTCSessionDescription(data.data))
                setOfferdata(data.data);
                
            }
        });

        socket.on("answer", (data) => {
            // setAnswer(data)
            console.log(data);

            setAnswerdata(data.data);
            setCalling(false)
             
        });

        socket.on("ice", (data) => {
            console.log(data);
            setIceCandidate(data);

            // pc.addIceCandidate(new RTCIceCandidate(data))
        });
    }, []);

    let localStream = null;
    let remoteStream = null;
    // start cam
    // const startWebcame = async () => {
    //     localStream = await navigator.mediaDevices.getUserMedia({
    //         audio: true,
    //         video: true,
    //     });

    //     localVideo.srcObject = localStream;

    //     remoteStream = new MediaStream();

    //     localStream.getTracks().forEach((track) => {
    //         pc.addTrack(track, localStream);
    //     });

    //     pc.ontrack = (event) => {
    //         console.log(event.streams[0].id);
    //         event.streams[0].getTracks().forEach((track) => {
    //             remoteStream.addTrack(track);
    //         });
    //     };

    //     if (localStream !== null) {
    //         localVideo.srcObject = localStream;
    //         remoteVideo.srcObject = remoteStream;
    //     }
    // };

    if(isloading){
        return <LoadingPage />
    }
    return (
         
        <MainContainer select="message">
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className="p-3 text-white font-bold border-b-4 border-white">
                    Message 
                </button>
            </div>
            <div className="w-full  flex md:flex-row flex-col h-[480px] pb-12">
                {/* profile details */}
                <div className="md:overflow-y-auto md:w-[30%] w-full flex md:flex-col flex-row justify-start items-center">
                    {/*

                        <p>{recipient.country}, {recipient.state}</p>
                        <p>{recipient.age}</p> */}

                    <div className="p-3 bg-white shadow-lg rounded-md border-2 border-red-500 self-center m-4">
                        <div
                            className="md:w-[75px] md:h-[75px] bg-red-500 md:rounded-md w-[90px] h-[90px] rounded-full"
                            style={{
                                backgroundImage: `url('/storage/avatar/${resprofile.first_photo}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
<small> {recipient.email}</small>
                    <h1 className="font-bold text-xl">{resprofile.name}</h1>
                    <div className="flex md:flex-row flex-col justify-center items-center mr-1">
                        <h1 className="font-bold text-2xl">{resprofile.age}</h1>
                        <p>years</p>
                    </div>
                    <p className="md:flex hidden">
                        {resprofile.live_in}
                    </p>

                    <p>Subscription {recipient.subscription == null ? "no sub":"theres is sub"}</p>
                </div>
                {/* message */}
                <div className="md:w-[70%] w-full bg-white h-full relative">
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
                                            <div className="mr-12 font-bold p-3 bg-white rounded-md justify-between flex flex-col gap-x-4 relative">
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

                                                {m.data_type === "audio" && (
                                                    <audio controls
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                         <video width={240} autoPlay controls>
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
                                                <div className="mr-12 font-bold p-3 bg-white rounded-md justify-between flex flex-col gap-x-4">
                                                   <div className="flex flex-row items-center gap-x-2">
                                                   <p>{m.message}</p>

                                                   <p className="text-sm text-slate-500">
                                                    {moment(
                                                        m.created_at
                                                    ).fromNow()}
                                                </p>
                                                   </div>
                                                    {m.data_type === "audio" && (
                                                    <audio controls
                                                        src={`/storage/messages/${m.data}`}
                                                   ></audio>
                                                )}
                                                {m.data_type === "video" && (
                                                    <video width={240} autoPlay controls>
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
                                            <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
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
                                            <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
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
                        <div className="flex flex-col justify-center items-center h-full">
                            <i className="fi fi-sr-comments text-5xl"></i>
                            <h1 className="font-bold text-2xl">
                                Send message to {resprofile.name}
                            </h1>
                            <p>To start conversion</p>
                        </div>
                    )}

                   
                </div>
            </div>

            {/* message input */}
            <div className="w-full bottom-0 left-0 right-0  bg-white px-12 p-5 flex flex-row items-center fixed">
                        <button
                            onClick={async () => {
                                if(subscription !== null && subscription.type === 'platinum'){
                                pc = new RTCPeerConnection(server)
                              await navigator.mediaDevices.getUserMedia({
                                    audio: true,
                                    video: true,
                                }).then(async (stream)=>{
                                    

                                    remoteStream = new MediaStream();
                        
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
                                   
                                    setCalling(true)
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
                        
                          
                        
                               
                            }else{
                                alert("Upgrade your membership to platinum")
                            }
                        }
                        }
                        >
                            <i class="fi fi-rr-microphone text-2xl"></i>
                        </button>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={`Send message to ${resprofile.name}`}
                            className="flex-1 border-0 outline-0 p-3 m-3"
                        ></textarea>
                        <button>
                            <i class="fi fi-rr-video-camera"></i>
                        </button>
                        <button
                            className="mr-4"
                            onClick={() => setIsUpload(true)}
                        >
                            <i class="fi fi-rr-clip text-2xl"></i>
                        </button>
                        <button
                            className="m-3"
                            onClick={() => {
                                if (message.trim().length > 0) {
                                    handleSendMessage();
                                    setMessage("");
                                }
                            }}
                        >
                            <i className="fi fi-rr-paper-plane text-2xl"></i>
                        </button>
                    </div>

            {/* overlay upload */}
            {isUpload && (
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
                                    onClick={() => {
                                     

                                            videoupload.click();
                                       
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
            )}
            {incomingcall !== null && (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-white/75 backdrop-blur-lg flex flex-col justify-center items-center">
                    <div
                        className="w-[85px] h-[85px] rounded-full"
                        style={{
                            backgroundImage: `url(/storage/avatar/${incomingcall.first_photo})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    ></div>
 <video id="webcam" autoPlay playsInline className="absolute -z-50 w-1"></video>
  <video id="remotecam" autoPlay playsInline className="absolute -z-50 w-1"></video>
                    <h1 className="tracking-tighter">{incomingcall.name}</h1>
                    <p>Incoming call...</p>

                    <div className="flex flex-row justify-center gap-x-2 mt-3">
                        <button
                            onClick={async () => {
                                pc = new RTCPeerConnection(server)

                                let remote = new MediaStream()

                                pc.setRemoteDescription(
                                    new RTCSessionDescription(offerdata)
                                );

                                // await navigator.mediaDevices.getUserMedia({
                                //     video:true,
                                //     audio:true
                                // }).then((stream)=>{
                                //     localVideo.srcObject = stream

                                //     stream.getTracks().forEach((track)=>{
                                //         pc.addTrack(track, stream)
                                //     })

                                // })

                                
                              


                                await pc.createAnswer().then((answer) => {
                                    console.log(answer);
                                    pc.setLocalDescription(answer);

                                    socket.emit("answer", {
                                        id: incomingcall.user_id,
                                        data: answer,
                                    });
  pc.ontrack = (event) => {
                                    console.log(event.streams[0].id);
                                    event.streams[0].getTracks().forEach((track) => {
                                        remote.addTrack(track);
                                    });
                                };
                        
                                
                                    // localVideo.srcObject = stream;
                                    remoteVideo.srcObject = remote 
                                    //  pc.addIceCandidate(new RTCIceCandidate(iceCandidate))

                                    // pc.ontrack = (event) => {
                                    //     console.log(event.streams[0].id);
                                    //     event.streams[0].getTracks().forEach((track) => {
                                    //         remoteStream.addTrack(track);
                                    //     });
                                    // };
                            
                                    
                                    //     remoteVideo.srcObject = remoteStream

                                    pc.onicecandidate = (event) => {
                                        if (event.candidate) {
                                            socket.emit("ice", {
                                                id: incomingcall.user_id,
                                                data: event.candidate.toJSON(),
                                            });
                                        }
                                    };
                                    pc.addIceCandidate(iceCandidate);

                                    // setAnswering(true);

                                    //  setIncomingcall(null)
                                });


                              
                            }}
                            className="bg-green-500 p-2 px-8 rounded-full"
                        >
                            Accept
                        </button>
                        <button className="bg-red-500 p-2 px-8 rounded-full">
                            Decline
                        </button>
                    </div>
                </div>
            )}
            {/* Calling */}
            {calling && (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-white/75 backdrop-blur-lg flex flex-col justify-center items-center">
                    <div
                        className="w-[85px] h-[85px] rounded-full"
                        style={{
                            backgroundImage: `url(/storage/avatar/${resprofile.first_photo})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    ></div>
  <video id="webcam" autoPlay playsInline className="absolute -z-50 w-1"></video>
  <video id="remotecam" autoPlay playsInline className="absolute -z-50 w-1"></video>
                    <h1 className="tracking-tighter">{resprofile.name}</h1>
                    <p>Calling...</p>

                    <div className="flex flex-row justify-center gap-x-2 mt-3">
                        <button className="bg-red-500 p-2 px-8 rounded-full">
                            End Call
                        </button>
                    </div>
                </div>
            )}

            {answerdata !== null && (
                <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-white/75 backdrop-blur-lg flex flex-col justify-center items-center">
                    <div className="flex flex-row h-[300px]">
                        <video id="webcam" autoPlay playsInline></video>
                        <video id="remotecam" autoPlay playsInline></video>
                    </div>

                    <div className="flex flex-row justify-center gap-x-2 mt-3">
                         
                        <button className="bg-red-500 p-2 px-8 rounded-full">
                            End
                        </button>
                    </div>
                </div>
            )}
            {answering && (
                <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-white/75 backdrop-blur-lg flex flex-col justify-center items-center">
                    <div className="flex flex-row h-[300px]">
                        <video id="webcam" autoPlay playsInline></video>
                        <video id="remotecam" autoPlay playsInline></video>
                    </div>

                    <div className="flex flex-row justify-center gap-x-2 mt-3">
                        <button
                            onClick={async () => {}}
                            className="bg-green-500 p-2 px-8 rounded-full"
                        >
                            ...
                        </button>
                        <button className="bg-red-500 p-2 px-8 rounded-full">
                            End Call
                        </button>
                    </div>
                </div>
            )}
        </MainContainer>
    );
};

export default MessageSingle;
