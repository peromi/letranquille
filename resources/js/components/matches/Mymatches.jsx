import React from 'react'
import { data } from '../../constants'
import UserProfile from '../profile/UserProfile'
import Filteroverlay from './Filteroverlay'





function Mymatches({profiles, user, reload}) {
    const [filter, setFilter] = React.useState(false)


  return (
    <div style={{ position:'relative' }}>
    <div style={{background:'transparent', border:0, display:'flex',alignItems:'center', justifyContent:'space-between',  }}>
        {/* <img src={data.group} /> */}
       <div style={{ display:'flex', gap:23, justifyContent:'center', alignItems:'center',color:'#C62251'}}>
       <i class="fi fi-rr-users-alt" style={{ fontSize:24 }}></i>
        <h2 className="font-bold">Matches</h2>
        </div>
        <div>
        {/* <button onClick={() =>{
            setFilter(!filter)
        }} style={{background:'transparent', border:0, cursor:'pointer', display:'flex', justifyContent:'center', gap:21, alignItems:'center', fontSize:20, color:'#C62251', fontWeight:'bold' }}>
            <i class="fi fi-rr-settings-sliders" ></i>
            <p>Filter</p>
            </button> */}
        </div>
    </div>
    <p style={{ fontSize:18, marginTop:12, fontWeight:'bold' }}>These are the People who have similar personalities</p>

    {/* Matched Profiles */}
    <div className='grid grid-cols-5 gap-4 pt-2'>
        {/* Profile */}
        {profiles.map((profile, index)=> <UserProfile profile={profile} liked={user} key={index} reload={reload} />)}

    </div>

    {/* Overlay Filter */}

                {/* {filter && <Filteroverlay handleclose={()=>{
                    setFilter(!filter);
                }} />} */}

   </div>
  )
}

export default Mymatches
