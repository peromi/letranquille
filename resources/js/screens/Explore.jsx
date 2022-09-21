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
<div className='flex md:flex-row flex-col w-full bg-red-400 justify-around p-2 items-center gap-4'>
    <div className='flex-1 w-full'>
        <p>I'm a</p>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent w-full'>
            <option>male</option>
            <option>female</option>
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Seeking a</p>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent w-full'>
            <option>male</option>
            <option>any</option>
            <option>male</option>
            <option>female</option>
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>From</p>
       <select className='ring-1 p-2 ring-slate-200 bg-transparent w-full'>
            <option>male</option>
            <option>nigeria</option>
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Age</p>
        <div className='flex md:flex-row flex-col gap-4'>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent md:w-1/2 w-full'>
            <option>male</option>
            <option>18</option>
        </select>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent md:w-1/2 w-full'>
            <option>male</option>
            <option>50</option>
        </select>
        </div>
    </div>
    <div className='flex-1 w-full'>

        <button className='bg-yellow-400 justify-center items-center p-2 w-full rounded-full font-bold hover:bg-white'>Send</button>
    </div>
</div>
        <div className='md:w-full mx-auto  h-screen'  >
            <div className='flex gap-3 bg-zinc-100 p-3'>
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
