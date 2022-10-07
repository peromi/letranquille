import React from 'react'
import Navigation from '../navigation/Navigation'
import "../../css/mainpage.scss";
import { apiKey, data } from "../constants";
import Match from '../components/Match';
import UserProfile from '../components/profile/UserProfile';
import Mymatches from '../components/matches/Mymatches'
import Mutualmatches from '../components/matches/Mutualmatches'
import Reversematches from '../components/matches/Reversematches'
import axios from 'axios';
import { toast } from 'react-toastify';
import MainContainer from '../containers/MainContainer';
import ls from 'localstorage-slim'
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const USERDB = 'dao'
const DB = "user-m9j234u94"
const subscribe = "subscriptionDb"
function Matches() {
    const { setSubscription} = React.useContext(SocketContext)
    const navigate = useNavigate()

    const [tab, setTab] = React.useState(0)
    const [user, setUser] = React.useState(null)

    const [profiles, setProfiles] = React.useState([])
    const [mutual, setMutual] = React.useState([])
    const [reverse, setReverse] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])

    const loadData = ()=>{
        const token = ls.get(DB,{decrypt:true})
        axios.get("/api/matches",{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data.matches)

            console.log(response.data)

            setProfiles(response.data.matches)
            setUserlikes(response.data.user.likes)
            setSubscription(response.data.subscription)
            ls.set(subscribe, response.data.subscription, {encrypt: true})
        }).catch((error)=>{

            // console.log(error)
            // alert(error.response.data.message)

            if(error.response.status == 401){
                ls.remove(USERDB)
                ls.remove(DB)

                navigate('/login', {replace:true})

                alert(error.response.data.message)

            }

        })
    }
    const loadMutualData = ()=>{
        const token = ls.get(DB,{decrypt:true})
        axios.get("/api/mutual-matches",{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data.matches)

            console.log(response.data)

            setMutual(response.data.matches)
            setUserlikes(response.data.user.likes)

        }).catch((error)=>{

            // console.log(error)
            // alert(error.response.data.message)

            if(error.response.status == 401){
                ls.remove(USERDB)
                ls.remove(DB)

                navigate('/login', {replace:true})

                alert(error.response.data.message)

            }

        })
    }
    const loadReverseData = ()=>{
        const token = ls.get(DB,{decrypt:true})
        axios.get("/api/reverse-matches",{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data.matches)

            console.log(response.data)

            setReverse(response.data.matches)
            setUserlikes(response.data.user.likes)

        }).catch((error)=>{

            console.log(error)
            alert(error.response.status)

            if(error.response.status == 401){
                ls.remove(USERDB)
                ls.remove(DB)

                navigate('/login', {replace:true})

                alert(error.response.data.message)

            }

        })
    }
    const reload = () =>{
        loadData();
        loadMutualData();
        loadReverseData();
    }
    React.useEffect(()=>{
        let db = ls.get(USERDB, {decrypt:true})
        if(db == null){
            console.log(db.user)
            navigate('/', {replace:true})
        }else{
            console.log(db.user)
            setUser(db.user)
        }
        loadData();
        loadMutualData();
        loadReverseData();
    },[])

  return (
     <MainContainer select="matches">
<div className="bg-red-600 w-full px-12  flex gap-x-6">
                <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>My Matches <small>({profiles.length})</small></button>
                <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>Mutual Matches <small>({mutual.length})</small></button>
                <button className={tab===2 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(2)}>Reverse Matches <small>({reverse.length})</small></button>
            </div>
<div className='w-full h-screen bg-white'  >


        <div className='tab_container' style={{ marginLeft:34, paddingTop:45, marginRight:34 }}>
           {tab == 0 &&  <Mymatches profiles={profiles} user={userlikes} reload={reload}
            />}
           {tab == 1 && <Mutualmatches profiles={mutual} user={userlikes} reload={reload} currentuser={user} action={()=>{
            setTab(0)
           }} />}
           {tab == 2 && <Reversematches profiles={reverse} user={userlikes} reload={reload} currentuser={user} action={()=>{
            setTab(0)
           }} />}

        </div>


        </div>
     </MainContainer>
  )
}

export default Matches
