
import React, {useState} from "react";
import { toast } from "react-toastify";
import BlockedList from "../components/activities/BlockedList";
import Favorite from "../components/activities/Favorite";
import Likes from "../components/activities/Likes";
import ProfileView from "../components/activities/ProfileView";

import MainContainer from "../containers/MainContainer";
import Navigation from "../navigation/Navigation";


const DATABASE_KEY = "user-m9j234u94";
function Activities() {


    const [tab, setTab] = useState(0)



  return (
     <MainContainer select="activity">

         <div className="md:w-10/12 mx-auto" style={{  marginTop:124,  background:'white', marginBottom:34, paddingBottom:24   }}>
    {/* TAB */}
        <div className='border-b-[1px] divide-red-800'>
            <ul className="flex md:justify-start md:gap-x-12 md:pl-8 justify-around items-center h-[65px]">
                <li className={tab==0?'text-red-800 font-bold flex items-center gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 flex font-bold gap-x-3 h-max'} onClick={()=>setTab(0)}>
                    {tab == 0 ?<i className="fi fi-sr-heart"></i>:<i className="fi fi-rr-heart"></i>}
                    <p className="md:text-xl text-sm">Liked Me</p>
                </li>
                <li className={tab==1?'text-red-800 font-bold flex gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 flex font-bold gap-x-3 h-max'} onClick={()=>setTab(1)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 1 ?<i className="fi fi-sr-star"></i>:<i className="fi fi-rr-star"></i>}
                    <p className="md:text-xl text-sm">Favorite</p>
                </li>
                <li className={tab==2?'text-red-800 font-bold flex gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 flex font-bold gap-x-3 h-max'} onClick={()=>setTab(2)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 2?<i className="fi fi-sr-eye"></i>:<i className="fi fi-rr-eye"></i>}
                    <p className="md:text-xl text-sm">Profile View</p>
                </li>
                <li className={tab==3?'text-red-800 font-bold flex gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 flex font-bold gap-x-3 h-max'} onClick={()=>setTab(3)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 3?<i className="fi fi-sr-ban"></i>:<i className="fi fi-rr-ban"></i>}
                    <p className="md:text-xl text-sm">Blocked List</p>
                </li>
            </ul>
        </div>
 {/* Tab Conntainers */}
        <div className='tab_container' style={{ marginLeft:34, marginTop:35, marginRight:34 }}>


           {tab == 0 &&  <>
            <p style={{ marginBottom:24, fontSize:23, fontWeight:'bold', textAlign:'center' }}>These are the people that liked your Profile recently.</p>
            <Likes />
           </>}
           {tab == 1 && <>
            <p style={{ marginBottom:24, fontSize:23, fontWeight:'bold', textAlign:'center' }}>These are your favorite Profiles you added.</p>
            <Favorite />
           </>
           }
           {tab == 2 && <>
            <p style={{ marginBottom:24, fontSize:23, fontWeight:'bold', textAlign:'center' }}>These are the people that viewed your Profile recently.</p>
            <ProfileView />
           </>}
           {tab == 3 && <>
            <p style={{ marginBottom:24, fontSize:23, fontWeight:'bold', textAlign:'center' }}>These are the people you blocked.</p>
            <BlockedList />
           </>}

        </div>

        </div>
     </MainContainer>
  )
}

export default Activities;
