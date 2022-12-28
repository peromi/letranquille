import React from 'react'
import ActivityProfile from './ActivityProfile'
import ls from 'localstorage-slim'
import { Link } from "react-router-dom";
import axios from "axios";
import MainContainer from "../../containers/MainContainer";
import woman from "../../assets/images/awoman.jpg";
import lady from "../../assets/images/lady.jpg";
import { useSelector } from 'react-redux';
import UserProfile from '../profile/UserProfile';
import OtherUserProfile from '../profile/OtherUserProfile';


const USERDB = 'dao'
function ProfileView() {
    const uuser = useSelector((state)=>state.user.user)
    const token = useSelector((state)=>state.user.token)
    const [favorite, setFavorite] = React.useState([])
    const [iviewprofile, setIviewprofile] = React.useState([])
    const [viewmyprofile, setViewmyprofile] = React.useState([])
    const [tab, setTab] = React.useState(0)

    const loadData = () =>{
       
        axios.get('/api/i-view-profile',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data)
            setIviewprofile(response.data.views)
        })
    }
    const loadViewMyProfileData = () =>{
       
        axios.get('/api/view-my-profile',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data)
            setViewmyprofile(response.data.views)
        })
    }

    React.useEffect(()=>{
        loadViewMyProfileData()
        loadData()
    },[])
  return (
    <MainContainer>
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>Viewed My Profile</button>
                <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>Profiles I Viewed</button>

            </div>
            <div className="h-screen w-full p-5">
               {tab === 0 && <div className='px-12'>

                {viewmyprofile.length > 0 ? (
                    <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {viewmyprofile.map((data,i) => (
                            <OtherUserProfile key={i} profile={data} liked={uuser.likes} reload={()=>{}} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                        No one has viewed your profile yet
                        </h1>
                        <p className="md:w-[50%]">
                        Don't worry, we have so many members, there are bound to be many people interested in you. The best way to increase your chance of receiving interest is to initiate communication.can't send
                            a message yet, "view" their profile instead!
                        </p>
                        <img
                            src={woman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-star text-red-600 text-2xl"></i>
                        <p>
                        Simply click a member's star to favorite them
                        </p>


                    </div>
                )}
                </div>}

{/* Tab my likes */}
{tab === 1 && <div className='px-12  '>

{iviewprofile.length > 0 ? (
   <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {iviewprofile.map((data,i) => (
             <OtherUserProfile key={i} profile={data} liked={uuser.likes} reload={()=>{}} />
        ))}
    </div>
) : (
    <div className="flex flex-col justify-center w-full items-center">
        <h1 className="font-bold text-2xl mt-2">
        You haven't viewed any profile yet
        </h1>
        <p className="md:w-[30%]">
        Your viewed list is a great way to keep track of members you are particularly interested in.
        </p>
        <img
            src={woman}
            width="200"
            className="rounded-full my-6"
        />

        <i class="fi fi-sr-star text-red-600 text-2xl"></i>
        <p>
        To add a member to your favorites list, click on the <strong>'Add Favorites'</strong> icon on their profile.
        </p>

        <p>
        Browse your matches and start creating your Favorites list today.
        </p>

        <Link
            to="/matches"
            className="bg-red-600 text-white p-3 px-12 mt-4 hover:bg-red-800"
        >
            View Matches Now
        </Link>
    </div>
)}
</div>}

            </div>
        </MainContainer>
  )
}

export default ProfileView
