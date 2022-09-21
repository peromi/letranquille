import React from 'react'
import MainContainer from '../containers/MainContainer'
import '../../css/message.scss'
import { data as dp } from '../constants'
import UserMessage from '../components/messages/UserMessage'
import MessageBoard from '../components/messages/MessageBoard'
import MessageChatBox from '../components/messages/MessageChatBox'
import VideoCall from '../components/videocall/VideoCall'
import axios from 'axios'
import ls from 'localstorage-slim'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import VideoReceivecall from '../components/videocall/VideoReceivecall'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'

const DB = "user-m9j234u94"
const USERDB = "dao"
function Messages() {
    const navigate = useNavigate()
    const {sendpeer,answerpeer, id, me, myVideo, userVideo, call, callAccepted, callEnded, stream, incoming } = React.useContext(SocketContext)

    let params = useParams()
    const [videocall, setVideocall] = React.useState(false)
    const [receiverProfile, setReceiverProfile] = React.useState(null)
    const [signal, setSignal] = React.useState(false)
    const [data, setData] = React.useState('')
    const [userdata, setUserdata] = React.useState('')


    const handleCall = ()=>{
        if(videocall == true){
            setVideocall(false)
        }else{
            setVideocall(true)
        }
    }



    const checkingForIncomingVideoCall = ()=>{
        // const token = ls.get(DB, {decrypt:true})
        // axios.get('/api/signal-call',{
        //     headers:{
        //         'Accept':'application/json',
        //         'Authorization': 'Bearer '+token

        //     }
        // }).then((response)=>{
        //     console.log(response.data)
        //     if(response.data != null){
        //         setSignal(response.data.data)
        //     }

        // })
    }

    const loadMessageParams =()=>{
        const token = ls.get(DB, {decrypt:true})

        axios.get('/api/profile/'+params.id,{
           headers:{
               'Accept':'application/json',
               'Authorization':'Bearer '+ token
           }
        }).then((response)=>{
            console.log("receiver",response.data.user);
            setReceiverProfile(response.data.user)
        }).catch((error)=>{
            // toast.error(error)
            // if(error.response.status == 401){
            //     ls.remove(USERDB)
            //     ls.remove(DB)

            //     navigate('/login', {replace:true})

            //     // alert(error.response.data.message)

            // }
            alert(error)

        })
    }



    React.useEffect(()=>{

        loadMessageParams();
        let db = ls.get(USERDB, {decrypt:true})
        if(db != null){
            console.log(db.user.user)
            setUserdata(db.user.user)
        }




    },[params])
    const [messages, setMessages] = React.useState([])

    const loadLastMessage = () =>{
        const token = ls.get(DB, {decrypt:true})
        axios.get("/api/last-messages", {
            headers: {
                Accept:'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then((response)=>{
            console.log(response.data.lastmessage)
            setMessages(response.data.lastmessage)
        })
    }
    React.useEffect(() =>{

        let id2 = setInterval(loadLastMessage, 1700)

        return ()=>{
clearInterval(id2)
console.log("cleared message")
 }
    },[params])
  return (
    <MainContainer select="message">

    <div className='bg-white'>
         <div className='messaging_panel'>
             {/* User Panel */}
             {/* <div className='user_messaging'>
                <div className='user_profile_navigation'>
                    <div className='user_left'>
                        <img src={`/storage/avatar/${userdata.first_cover}`} alt={`${userdata.name}`} />

                        <button>
                            <i className='fi fi-sr-angle-small-down'></i>
                        </button>
                    </div>
                    <div className='search_message_user'>
                        <input type="text" placeholder='Search...' />
                        <i className='fi fi-rr-search'></i>
                    </div>
                </div>
                <div className='user_message_online'>
                 {messages.map((m,index)=> <UserMessage message={m} key={index} /> )}
                </div>
             </div> */}
             {/* Message Display */}
             <div className='main_message_panel'>
                {receiverProfile != null ? (
                    <>
                    <div className='main_message_navigation'>
                    <div className='main_avatar' style={{ cursor: 'pointer' }} onClick={()=>{
                        navigate(`/profile/${receiverProfile.id}`)
                    }}>
                        <img src={`/storage/avatar/${receiverProfile.first_cover}`} />
                        <div className="avatar_active">
                            <p style={{ textTransform:'capitalize' }}>{receiverProfile.name}</p>
                            <small>
                                {/* Last online : 10.00am */}
                            </small>
                        </div>
                    </div>
                    <div className='main_option_menu'>
                            <div className='hidden_search'>
                                <input type="text" placeholder="Search" />
                                <button onClick={()=>{
                                    sendpeer({to:receiverProfile.id, peer:id})
                                }}> <i className='fi fi-rr-search'></i></button>
                            </div>
                            {/* <button onClick={()=>{
                                if(videocall == true){
                                    setVideocall(false)
                                }else{
                                    setVideocall(true)
                                }
                            }}>...</button> */}
                            <button onClick={()=>{
                                answerpeer()
                            }}><i className='fi fi-sr-menu-dots-vertical'></i></button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                <MessageBoard user={userdata} receiver={receiverProfile} />
                <MessageChatBox receiver={receiverProfile} userdata={userdata} />

                </div>

                    </>
                ):<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', flexDirection:'column', height:400 }}>
                    <img src={dp.logo} style={{ backgroundColor:'', width: '100px', height: '100px'}}  />
                    <p>No Message Selected</p>
                    </div>}
             </div>
         </div>
         {/* Video call */}
        {videocall &&  <VideoCall handle={handleCall} receiver={receiverProfile}   />}
        {call.isReceivedCall == true && <VideoReceivecall  />}
     </div>

</MainContainer>
  )
}

export default Messages
