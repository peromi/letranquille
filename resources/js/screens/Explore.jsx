import React from 'react'
import ActivityProfile from '../components/activities/ActivityProfile';
import {  data } from "../constants";
import MainContainer from '../containers/MainContainer';
import Navigation from '../navigation/Navigation';
import ls from 'localstorage-slim'
import axios from 'axios';
import UserProfile from '../components/profile/UserProfile';
import { forEach } from 'lodash';
import  country  from '../assets/json/country.json';
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";

const DB = "user-m9j234u94"
const USERDB = "dao"
function Explore() {
    const [explores, setExplores] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])
    const [user, setUser] = React.useState(null)



      const age = []

       for(var i = 18; i < 100; i++) {
        age.push(i)
       }

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
    for(var i = 18; i < 100; i++) {
        age.push(i)
       }


    loadData()
},[])
  return (
   <MainContainer select="explore">
<div className='flex md:flex-row flex-col w-full bg-red-600 text-white justify-around p-2 items-center gap-4'>
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

                <option>Any</option>
            {country.map((c,index)=><option key={index}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Age</p>
        <div className='flex md:flex-row flex-col gap-4'>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent md:w-1/2 w-full'>

            {age.map((a, index)=><option key={index}>{a}</option>)}
        </select>
        <select className='ring-1 p-2 ring-slate-200 bg-transparent md:w-1/2 w-full'>
            {age.map((a, index)=><option key={index}>{a}</option>)}
        </select>
        </div>
    </div>
    <div className='flex-1 w-full'>

        <button className='bg-yellow-400 justify-center items-center p-2 w-full rounded-full font-bold hover:bg-white'>Search</button>
    </div>
</div>
        <div className='md:w-full mx-auto  h-screen'  >

            {/* <Match /> */}

            {explores.length > 0 ? <div className="grid grid-cols-5 gap-4 pt-2">

                {explores.map((profile, index) => (
                    <UserProfile
                        profile={profile}
                        liked={userlikes}
                        key={index}
                        reload={reload}
                    />)
                    )}
            </div>:<div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                            You do not have any match
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={woman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
                        <p>
                            Click on the <strong>Heart</strong> to like someone
                        </p>

                        <p>
                            Make the first move! Like someone who fits your
                            match criteria. It's FREE!
                        </p>


                    </div>}
        </div>
   </MainContainer>
  )
}

export default Explore
