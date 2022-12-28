import React from 'react'
import ActivityProfile from './ActivityProfile'
import ls from 'localstorage-slim'
import { Link } from "react-router-dom";
import axios from "axios";
import MainContainer from "../../containers/MainContainer";
import woman from "../../assets/images/awoman.jpg";
import lady from "../../assets/images/lady.jpg";
import { useSelector } from "react-redux";
import OtherUserProfile from '../profile/OtherUserProfile';

const USERDB = 'dao'

function Favorite() {

    const userpreferences = useSelector((state)=>state.user.preference)
    const userprofile = useSelector((state)=>state.user.profile)
    const uuser = useSelector((state)=>state.user.user)
    const subscription = useSelector((state)=>state.user.subscription)
    const token = useSelector((state)=>state.user.token)


    const [favorite, setFavorite] = React.useState([])
    const [myfavorite, setMyFavorite] = React.useState([])
    const [theirfavorite, setTheirFavorite] = React.useState([])
    const [tab, setTab] = React.useState(0)

    const loadData = () =>{
      
        axios.get('/api/favorite',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data)
            setFavorite(response.data.favorite)
        })
    }
    const loadMyFavorite = () =>{
        
        axios.get('/api/my-favorite',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data)
            setMyFavorite(response.data.views)
        })
    }

    const loadTheirFavorite = () =>{
       
        axios.get('/api/their-favorite',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data)
            setTheirFavorite(response.data.views)
        })
    }

    React.useEffect(()=>{
        loadData()
        loadMyFavorite()
        loadTheirFavorite()
    },[])
  return (
    <MainContainer>
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>I'm Their Favorite</button>
                <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>My Favorites</button>
                <button className={tab===2 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(2)}>Mutual Favorite</button>
            </div>
            <div className="h-screen w-full px-12">
               {tab === 0 && <div>

                {theirfavorite.length > 0 ? (
                    <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {theirfavorite.map((data) => (
                         <OtherUserProfile profile={data} liked={uuser.likes} reload={()=>{}} />
                    ))}
                </div>
                ) : (
                    <div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                        You have no mutual favorite yet
                        </h1>
                        <p className="md:w-[50%]">
                        Your Favorites list is a great way to keep track of members you are particularly interested in.
                        </p>
                        <img
                            src={woman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-apps-add text-red-600 text-2xl"></i>
                        <p>
                        Simply click a member's star to favorite them
                        </p>


                    </div>
                )}
                </div>}

{/* Tab my likes */}
{tab === 1 && <div>

{myfavorite.length > 0 ? (
     <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
     {myfavorite.map((data) => (
          <OtherUserProfile profile={data} liked={uuser.likes} reload={()=>{}} />
     ))}
 </div>
) : (
    <div className="flex flex-col justify-center w-full items-center">
        <h1 className="font-bold text-2xl mt-2">
        You haven't added any favorites yet
        </h1>
        <p className="md:w-[30%]">
        Your Favorites list is a great way to keep track of members you are particularly interested in.
        </p>
        <img
            src={woman}
            width="200"
            className="rounded-full my-6"
        />

        <i class="fi fi-sr-apps-add text-red-600 text-2xl"></i>
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
{/* Tab for mutual likes */}
{tab === 2 && <div>

{favorite.length > 0 ? (
    <div
        style={{
            columnCount: 4,
            justifyContent: "center",
            gap: 15,
            alignItems: "center",
            flexWrap: "wrap",
        }}
    >
        {favorite.map((data) => (
            <ActivityProfile key={data.id} profile={data} />
        ))}
    </div>
) : (
    <div className="flex flex-col justify-center w-full items-center">
        <h1 className="font-bold text-2xl mt-2">
        You have no mutual like yet
        </h1>
        <p className="md:w-[30%]">
        Don't worry, we have so many members, there are bound to be many people interested in you. The best way to increase your chance of receiving interest is to initiate communication.
        </p>
        <img
            src={woman}
            width="200"
            className="rounded-full my-6"
        />

        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
        <p>
        Simply click a member's star to favorite them
        </p>


    </div>
)}
</div>}
            </div>
        </MainContainer>

  )
}

export default Favorite
