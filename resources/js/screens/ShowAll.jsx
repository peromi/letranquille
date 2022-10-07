import React from 'react'
import ActivityProfile from '../components/activities/ActivityProfile';
import {  data } from "../constants";
import MainContainer from '../containers/MainContainer';
import Navigation from '../navigation/Navigation';
import ls from 'localstorage-slim'
import axios from 'axios';
import UserProfile from '../components/profile/UserProfile';
import { forEach } from 'lodash';

import cities from '../assets/json/cities.json'
import  country  from '../assets/json/country.json';
import  states  from '../assets/json/states.json';
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";


const DB = "user-m9j234u94"
const USERDB = "dao"
function ShowAll() {
    const [explores, setExplores] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])

    const [statesearch, setStatesearch] = React.useState([])
    const [citysearch, setCitysearch] = React.useState([])

    const [countrycode, setCountrycode] = React.useState({})
    const [statecode, setStatecode] = React.useState({})
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
    //    let db = ls.get(USERDB, {decrypt:true})
    //    if(db == null){
    //        console.log(db.user)
    //        navigate('/', {replace:true})
    //    }else{
    //        console.log(db.user)
    //        setUser(db.user)
    //    }
    loadData()
},[])
  return (
   <MainContainer select="explore">
<div className='flex md:flex-row flex-col w-full bg-yellow-400 justify-around p-2 items-center gap-4'>

    <div className='flex-1 w-full'>
        <p>Seeking a</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full'>
            <option>male</option>
            <option>any</option>
            <option>male</option>
            <option>female</option>
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Age</p>
        <div className='flex md:flex-row flex-col gap-4'>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent md:w-1/2 w-full'>

            {age.map((a, index)=><option key={index}>{a}</option>)}
        </select>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent md:w-1/2 w-full'>
            {age.map((a, index)=><option key={index}>{a}</option>)}
        </select>
        </div>
    </div>
    <div className='flex-1 w-full'>
        <p>Country</p>
       <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
        let result = states.filter((s)=>s.country_code  == e.target.value)
        setStatesearch(result)
        console.log(result.length)
        setCountrycode(e.target.value)
       }}>

                <option>Any</option>
            {country.map((c,index)=><option key={index} value={c.code}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>State/Province</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
            let result = cities.filter((c)=>c.state_code == e.target.value && c.country_code == countrycode)
            console.log(result.length)
            setCitysearch(result)
        }}>

<option>Any</option>
            {statesearch.map((s, index)=><option key={index} value={s.state_code} >{s.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>City</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full'>
        <option>Any</option>
            {citysearch.map((c,index)=><option key={index}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Within</p>
        <input className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' type="text" placeholder='kms' />
    </div>

    <div className='flex-1 w-full'>

        <button className='bg-black text-white justify-center items-center p-2 w-full rounded-full font-bold hover:bg-white hover:text-black'>Search</button>
    </div>
</div>
        <div className='md:w-full mx-auto  h-screen'  >
            {/* <div className='flex gap-3 bg-zinc-100 p-3'>
                <img src={data.group} />
                <h2 style={{ color:'#C62251' }} className="font-bold">Explore ({explores.length})</h2>

            </div> */}
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

export default ShowAll