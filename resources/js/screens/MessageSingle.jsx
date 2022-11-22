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
 


const USERDB = "dao";
const DB = "user-m9j234u94";
const subscribe = "subscriptionDb";

const MessageSingle = () => {
    const { subscription, socket } = React.useContext(SocketContext);
    const navigate = useNavigate();
    const params = useParams();

    const [user, setUser] = React.useState(null);

    const [message, setMessage] = React.useState("");
    const [recipient, setRecipient] = React.useState({});
    const [file, setFile] = React.useState(null)
    const [type, setType] = React.useState("text")

    const [messages, setMessages] = React.useState([]);

    const [isUpload, setIsUpload] = React.useState(false)
    console.log("sub", user);

    const loadData = () => {
        const token = ls.get(DB, { decrypt: true });
        axios
            .get(`/api/get-messages/${params.id}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log("fetch message");
                 
                setMessages(response.data.messages);
                setRecipient(response.data.recipient);
            })
            .catch((error) => {
                // console.log(error)
                // alert(error.response.data.message)

                if (error.response.status == 401) {
                    ls.remove(USERDB);
                    ls.remove(DB);

                    navigate("/login", { replace: true });

                    alert(error.response.data.message);
                }
            });
    };

    const handleSendMessage = () => {
        const token = ls.get(DB, { decrypt: true });

        let formData = new FormData();

        formData.append("data", file);
        formData.append("type", type);
        formData.append("message", message);
        formData.append("recipient",  params.id);

        axios
            .post(
                `/api/send-message`,formData,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                

                // alert(response.data.message);
                setMessage(null);
                loadData();
            });
    };

    let imgupload = document.getElementById('image')
    let docupload = document.getElementById('doc')
    let musicupload = document.getElementById('music')
    let videoupload = document.getElementById('video')

    let localVideo = document.getElementById("webcam");
    let remoteVideo = document.getElementById("remotecam");

    const [localStream, setLocalStream] = React.useState(null)
    const [answer, setAnswer] = React.useState(null)
    const [iceCandidate, setIceCandidate] = React.useState(null)
   
     

    let server = {
        iceServers: [
            {
                urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
            }
        ],
        iceCandidatePoolSize:10,
    };

    let pc;
    let remoteStream = null;
 


    React.useEffect(() => {

        let id = setInterval(()=>{
            loadData();
        },[5000])
        
       

        return()=>{
            clearInterval(id)
        }
    }, []);

     

    React.useEffect(() => {
        socket.on("offer", (data)=>{
            console.log(data)
        })

        socket.on("answer", (data)=>{
            setAnswer(data)
        })

        socket.on("ice", (data)=>{
            setIceCandidate(data)
        })
    },[])

   
    return (
        <MainContainer select="message">
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className="p-3 text-white font-bold border-b-4 border-white">
                    Message
                </button>
            </div>
            <div className="w-full  flex flex-row h-[480px] ">
                {/* profile details */}
                <div className="overflow-y-auto w-[30%] flex flex-col justify-start items-center">
                    {/*

                        <p>{recipient.country}, {recipient.state}</p>
                        <p>{recipient.age}</p> */}

                    <div className="p-3 bg-white shadow-lg rounded-md border-2 border-red-500 self-center m-4">
                        <div
                            className="w-[225px] h-[325px] bg-red-500 rounded-md  "
                            style={{
                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>

                    <h1 className="font-bold text-xl">{recipient.name}</h1>
                    <div className="flex flex-row justify-center items-center mr-1">
                        <h1 className="font-bold text-2xl">{recipient.age}</h1>
                        <p>years</p>
                    </div>
                    <p>
                        {recipient.city}, {recipient.state} {recipient.country}
                    </p>
                </div>
                {/* message */}
                <div className="w-[70%] bg-white h-full relative">
                    {messages.length > 0 ?<div className=" overflow-y-auto h-full bg-[#f4f4f4] relative p-3">
                        {messages.map((m, index) => {
                            if (m.sender === recipient.id) {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center mb-[12px]"
                                    >
                                        <div
                                            className="w-[34px] h-[34px] rounded-full"
                                            style={{
                                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        ></div>
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <span className="text-sm text-slate-500 ml-2">
                                                {recipient.name}:
                                            </span>
                                            <p>{m.message}</p>

                                            {m.data_type === "audio" && <audio src={`/storage/message/${m.data}`} />}
                                            {m.data_type === "video" && <video   >
                                            <source src={`/storage/message/${m.data}`} type="video/mp4"></source>
                                                </video>}
                                        </div>
                                        <p>{moment(m.created_at).fromNow()}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="flex justify-end mb-[12px]">
                                        <div
                                            key={index}
                                            className="flex flex-row gap-x-2 items-center"
                                        >
                                            <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                                <p>{m.message}</p>
                                            </div>
                                            <p>{moment(m.created_at).fromNow()}</p>
                                        </div>
                                    </div>
                                );
                            }

                            if (m.recipient !== recipient.id) {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center"
                                    >
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <p>{m.message}</p>
                                        </div>
                                        <p>{moment(m.created_at).fromNow()}</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center"
                                    >
                                        <div
                                            className="w-[34px] h-[34px] rounded-full"
                                            style={{
                                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        ></div>
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <span className="text-sm text-slate-500 ml-2">
                                                {recipient.name}:
                                            </span>
                                            <p>{m.message}</p>
                                        </div>
                                        <p>{moment(m.created_at).fromNow()}</p>
                                    </div>
                                );
                            }
                        })}

                        {/* <div className="bg-white/45 backdrop-blur-sm flex flex-col justify-center items-center" style={{  position:'absolute', top:0, left:0, right:0, bottom:0}}>
                            <h1 className="font-bold text-xl">You can't view messages from {recipient.name}</h1>
                            <p>Upgrade and have an unlimited chats</p>

                            <Link to="/manage-subscription" className="mt-12 p-3 bg-red-600 text-white px-24 rounded-full font-bold">Upgrade to Premium Membership</Link>
                        </div> */}
                    </div>:<div className="flex flex-col justify-center items-center h-full">
                        <i className="fi fi-sr-comments text-5xl"></i>
                         <h1 className="font-bold text-2xl">Send message to {recipient.name}</h1>
                         <p>To start conversion</p>
                        
                        </div>}

                    <div className="w-full -bottom-20 left-0 right-0   pr-36 bg-white px-12 p-5 flex flex-row items-center absolute">
                    <button>
                        <i class="fi fi-rr-microphone text-2xl"></i>
                    </button>
                  
                       
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={`Send message to ${recipient.name}`}
                            className="flex-1 border-0 outline-0 p-3 m-3"
                        ></textarea>
                           <button>
                     <i class="fi fi-rr-video-camera"></i>
                    </button>
                         <button className="mr-4" onClick={()=> setIsUpload(true)}>
                        <i class="fi fi-rr-clip text-2xl"></i>
                    </button>
                        <button
                            className="m-3"
                            onClick={() => {
                                if (message.trim().length > 0) {
                                    handleSendMessage();
                                    setMessage("")
                                }
                            }}
                        >
                            <i className="fi fi-rr-paper-plane text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* overlay upload */}
            {isUpload && <div className="fixed bg-white/70 backdrop-blur-2xl flex flex-col  top-0 right-0 bottom-0 left-0">
            <div className="flex justify-end p-3">
                <button onClick={()=>{
                    setIsUpload(false)
                }}><i className="fi fi-rr-cross"></i></button>
            </div>
                 
                <div className="flex flex-col items-center justify-center h-full">
                   
                    <input type="file" id="image" className="hidden" accept="image/*" onChange={(e)=>{
                        if(e.target.files && e.target.files[0]){
                            setFile(e.target.files[0])
                            setType("image")

                            setIsUpload(false)
                        }
                    }} />
                    <input type="file" id="doc" className="hidden" accept=".doc, .pdf, .xlsx, .xls" onChange={(e)=>{
                        if(e.target.files && e.target.files[0]){
                            setFile(e.target.files[0])
                            setType("document")
                            setIsUpload(false)
                        }
                    }} />
                    <input type="file" id="music" className="hidden" accept="audio/*"  onChange={(e)=>{
                        if(e.target.files && e.target.files[0]){
                            setFile(e.target.files[0])
                            setType("audio")
                            setIsUpload(false)
                        }
                    }} />
                    <input type="file" id="video" className="hidden"  accept="video/*" onChange={(e)=>{
                        if(e.target.files && e.target.files[0]){
                            setFile(e.target.files[0])
                            setType("video")
                            setIsUpload(false)
                        }
                    }} />

{/* <div className="flex flex-row h-[300px]">
<video id="webcam" autoPlay playsInline></video>
<video id="remotecam" autoPlay playsInline></video>
</div> */}
<h1 className="font-bold text-3xl">What do you want to share</h1>
<h1 className="font-bold text-3xl">with {recipient.name}?</h1>
                    <div className="flex justify-center items-center mt-2">
                       <div className="md:w-[45%] flex flex-row justify-center items-center gap-x-4 ">
                       <button  className="bg-white ring-1 ring-slate-900/5 rounded-md p-4" onClick={()=>{
                            imgupload.click()
                        }}>
                            <i className="fi fi-rr-photo"></i>
                            <p>Image</p>
                        </button>
                        <button className="bg-white ring-1 ring-slate-900/5 rounded-md p-4" onClick={()=>{
                            docupload.click()
                        }}>
                            <i class="fi fi-rr-file"></i>
                            <p>Document</p>
                        </button>
                        <button className="bg-white ring-1 ring-slate-900/5 rounded-md p-4" onClick={()=>{
                            musicupload.click()
                        }}>
                            

                            <i class="fi fi-rr-music"></i>
                            <p>Music</p>
                        </button>
                        <button className="bg-white ring-1 ring-slate-900/5 rounded-md p-4" onClick={()=>{
                            videoupload.click()
                        }}>

<i class="fi fi-rr-video-camera-alt"></i>
                            <p>Video</p> 
                            
                        </button>

                        {/* <button className="bg-white ring-1 ring-slate-900/5 rounded-md p-4" onClick={async ()=>{
                          pc = new RTCPeerConnection(server)
                            // localStream = await navigator.mediaDevices.getDisplayMedia({video:true, audio:true}).then((currentStream)=>{
                            //             // setStream(currentStream)
                            //             localVideo.srcObject = currentStream;
                            //         })
                     
                           let remotestream = new MediaStream()

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

                            navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((currentStream)=>{
                                    // setStream(currentStream)
                                    localVideo.srcObject = currentStream;
                                   

                                    setLocalStream(currentStream)
                                    

                                    currentStream.getTracks().forEach((track)=>{
                                        pc.addTrack(track, currentStream)
                                    })


                                    pc.ontrack = event =>{
                                        event.streams[0].getTracks().forEach((track)=>{
                                            remotestream.addTrack(track);
                                        });
                                    }
    

                                 
                                })

                     
    
                                

                               

                                remoteVideo.srcObject = remoteStream;

                                pc.onicecandidate = event => {
                                    if(event.candidate){
                                        ls.set("ICE", event.candidate.toJSON())
                                        console.log(event.candidate.toJSON())
                                        // send ice to rescipient
                                    }
                                }


                                // create offer
                                const offerDescription = await pc.createOffer();
                                await pc.setLocalDescription(offerDescription)


                                const offer = {
                                    sdp:offerDescription.sdp,
                                    type:offerDescription.type
                                }

                                console.log(offer)

                                ls.set("OFFER", offer)
                                socket.emit("offer", offer)

                              
                                if(!pc.currentRemoteDescription && answer !== null){
                                    const answerDescription = new RTCSessionDescription(answer.answer)
                                    pc.setRemoteDescription(answerDescription)
                                }


                        }}>Call Person</button>
                        <button onClick={()=>{
                           localStream.getTracks().forEach((track)=>{
                            track.stop();
                            localVideo.srcObject = null;
                           })
                        }}>Stop Stream</button> */}
                       </div>
                    </div>
                </div>
            </div>}
        </MainContainer>
    );
};

export default MessageSingle;
