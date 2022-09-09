import React from 'react'
import ActivityProfile from '../components/activities/ActivityProfile';
import {  data } from "../constants";
import MainContainer from '../containers/MainContainer';
import Navigation from '../navigation/Navigation';
import ls from 'localstorage-slim'
import axios from 'axios';
import UserProfile from '../components/profile/UserProfile';

const DB = "user-m9j234u94"
const USERDB = "dao"
function Explore() {
    const [explores, setExplores] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])

    const loadData = ()=>{
        const token = ls.get(DB, {decrypt:true})

        axios.get('/api/explore',{

                headers:{
                    'Accept':'application/json',
                    'Authorization':'Bearer '+token
                }

        }).then((response)=>{
            console.log(response.data)
            setExplores(response.data.explores)
            setUserlikes(response.data.user.likes)
        })
    }
const  reload = () => {
    loadData()
}
React.useEffect(()=>{
    loadData()
},[])
  return (
   <MainContainer select="explore">

        <div className='md:w-10/12 mx-auto' style={{padding:35, marginTop:124,   background:'white',   }}>
            <div style={{ display:'flex', gap:12, marginBottom:23  }}>
                <img src={data.group} />
                <h2 style={{ color:'#C62251' }} className="font-bold">Explore ({explores.length})</h2>

            </div>
            {/* <Match /> */}

            <div className='grid grid-cols-5 gap-4'>
        {explores.map((data)=> <UserProfile key={data.id} profile={data} liked={userlikes} reload={reload} />)}

    </div>
        </div>
   </MainContainer>
  )
}

export default Explore
