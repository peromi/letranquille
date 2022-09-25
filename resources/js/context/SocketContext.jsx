import React, {createContext, useState, useEffect, useRef} from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import {useGeolocated} from "react-geolocated"
import { db } from './Db'
import { toast } from 'react-toastify'
import ls from 'localstorage-slim'




const SocketContext = createContext()
// const socket = io("https://le-tranquille.herokuapp.com/")
const socket = io("http://localhost:9000")
const DB = "user-m9j234u94"
const subscribe = "subscriptionDb"
const USERDB = 'dao'

const ContextProvider = ({children}) =>{
    const [recipient, setRecipient] = useState('')
    const [status, setStatus] = useState('')
    const [subscription, setSubscription] = useState('');
    const [id, setId] = useState('')
    const [stream, setStream] = useState(null)
    const [me, setMe] = useState('')
    const [call, setCall] = useState({})
    const [callAccepted, setCallAccepted] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const [start, setStart] = useState(false)
    const [incoming, setIncoming] = useState(false)
    const [userdata, setUserdata] = useState('')
    const [chatmessage, setChatmessage] = useState([])
    const {coords, isGeolocationAvailable, isGeolocationEnabled} = useGeolocated({
        positionOptions:{
            enableHighAccuracy:false
        },
        userDecisionTimeout:5000
    })


    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()
    let peer = new Peer()



    const loadChatMessages = async()=> {
        let chats = await db.chats.toArray()
        setChatmessage(chats)
    }


    useEffect(()=>{

        loadChatMessages()

        // if(window.indexedDB){
        //     alert("Supported browsers")
        // }

        if(me !== null){
            let db = ls.get(DB, {decrypt:true})
            let db2 = ls.get(USERDB, {decrypt:true})

            setUserdata(db)
            console.log(db2)






        }



        // navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((currentStream)=>{
        //     setStream(currentStream)
        //     myVideo.current.srcObject = currentStream;
        // })






        socket.on('me', (id) => setMe(id))
        socket.on('calluser', ({from, signal})=>{
            setCall({isReceivedCall:true, from, signal})
        })

        socket.on('callaccepted',(data)=>{
            console.log("call",data)
        })

        socket.on('peer-call', (data)=>{
            toast.success(data)
           setRecipient(data)


        })






        socket.on('message-chat',(data)=>{
            let chat = {
                sender:data.from, receiver:data.to, message:data.message,image:data.image, status:'received', time:data.time
            }

            db.chats.add(chat).then(async()=>{
                let chats = await db.chats.toArray()
                toast.success("New message: "+data.message)
                setChatmessage(chats)
              })
        })

        socket.on("profile", (data)=>{
            toast.success(data.name+" "+data.message)
        })

        socket.on("liked", (data)=>{
            toast.success(data.name+" "+data.message)
        })

        socket.on('message-error',(data)=>{
            console.log(data)
        })

        socket.on("failed", (data)=>{
            setStatus(data)
        })





    },[])



    const  answerpeer = ()=>{
        peer.on('signal', (data)=>{
            alert(data)
        })
    }

    const sendpeer = (data)=>{
        socket.emit('peer-call', data)
        peer.emit("connect", (data)=>{
            alert(data)
        })

    }

    const savechat = (data)=>{

    }




    const profileview = (data)=>{
        socket.emit('profile', data)
    }

    const likeprofile = (data)=>{
        socket.emit('liked', data)
    }

    const addUser = ({id, name}) =>{

        socket.emit('addUser', {id, name})
    }
    const answerCall = () =>{
        setCallAccepted(true)
        navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((currentStream)=>{
            setStream(currentStream)
            myVideo.current.srcObject = currentStream;
        })
        const peer = new Peer({initiator:false, trickle:false, stream})

        peer.on('signal', (data)=>{
            socket.emit('answercall', {signal:data, to:call.from})
        })

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })

        socket.on('callaccepted',(data)=>{
           console.log("Answer",data)
           peer.signal(data)
        })
        peer.signal(call.signal)

        connectionRef.current = peer;
    }

    const callUser = (id) =>{
        navigator.mediaDevices.getUserMedia({audio:true, video:true}).then((currentStream)=>{
            setStream(currentStream)
            myVideo.current.srcObject = currentStream;
        })
        const peer = new Peer({initiator:true, trickle:false, stream})

        peer.on('signal', (data)=>{
            socket.emit('calluser', { userToCall:id, from:me, signal:data})
        })

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })

        socket.on('callaccepted',(signal)=>{
            setCallAccepted(true)

            peer.signal(signal)
        })

        connectionRef.current = peer;
    }

    const leaveCall = () =>{
        setCallEnded(true)
        connectionRef.current.destroy();
        window.location.reload()
    }

    // Message Chat
    const sendMessage = (data)=>{

        socket.emit('message-chat', data)
        loadChatMessages()
    }



    return (
        <SocketContext.Provider value={{id,setId, subscription, setSubscription, sendpeer, answerpeer,profileview,likeprofile, status, setStatus,coords, isGeolocationAvailable, isGeolocationEnabled, sendMessage,chatmessage, addUser, me,call,callAccepted,myVideo,userVideo,leaveCall,answerCall,callUser,name,setName,callEnded,stream,start, setStart, incoming, setIncoming}}>
            {children}
        </SocketContext.Provider>
    )
}

export {SocketContext, ContextProvider}


