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
    const {currentuser, subscription, setSubscription} = React.useContext(SocketContext)
    const navigate = useNavigate()

    const [tab, setTab] = React.useState(0)
    const [user, setUser] = React.useState('')


    const [profiles, setProfiles] = React.useState([])
    const [mutual, setMutual] = React.useState([])
    const [reverse, setReverse] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])




    React.useEffect(()=>{



        // loadData();
        // loadMutualData();
        // loadReverseData();
    },[ ])


    // Pagination for MYMATCHES


  return (
     <MainContainer select="matches">
<div className="bg-red-600 w-full px-12  flex gap-x-6">
                <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>My Matches </button>
                <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>Mutual Matches  </button>
                <button className={tab===2 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(2)}>Reverse Matches  </button>
            </div>
<div className='w-full h-fit'  >


        <div className='tab_container' style={{ marginLeft:34, paddingTop:45, marginRight:34 }}>
           {tab == 0 &&  <Mymatches   action={()=>{
            setTab(0)
           }}  />}
           {tab == 1 && <Mutualmatches  action={()=>{
            setTab(0)
           }}  />}
           {tab == 2 && <Reversematches   action={()=>{
            setTab(0)
           }} />}

        </div>


        </div>
     </MainContainer>
  )
}

export default Matches
