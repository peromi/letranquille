
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

         <div style={{  marginTop:124, marginLeft:34, marginRight:34, background:'white', marginBottom:34, paddingBottom:24   }}>
    {/* TAB */}
        <div className='tab_match'>
            <ul>
                <li className={tab==0?'active-tab':''} onClick={()=>setTab(0)}>
                    {tab == 0 ?<i className="fi fi-sr-heart"></i>:<i className="fi fi-rr-heart"></i>}
                    <p>Liked Me</p>
                </li>
                <li className={tab==1?'active-tab':''} onClick={()=>setTab(1)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 1 ?<i className="fi fi-sr-star"></i>:<i className="fi fi-rr-star"></i>}
                    <p>Favorite</p>
                </li>
                <li className={tab==2?'active-tab':''} onClick={()=>setTab(2)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 2?<i className="fi fi-sr-eye"></i>:<i className="fi fi-rr-eye"></i>}
                    <p>Profile View</p>
                </li>
                <li className={tab==3?'active-tab':''} onClick={()=>setTab(3)}>
                {/* <img src={data.goldcrown} /> */}
                {tab == 3?<i className="fi fi-sr-ban"></i>:<i className="fi fi-rr-ban"></i>}
                    <p>Blocked List</p>
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
