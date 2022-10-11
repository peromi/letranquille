import React, { useEffect, useState, useReducer, useContext } from 'react'
import { data } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import ls from 'localstorage-slim'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SocketContext } from '../context/SocketContext'
import "../../css/navigation.css"


const DATABASE_KEY = 'user-m9j234u94'
const DBNAV = 'nav'
const USERDB = 'dao'
const subscribe = "subscriptionDb"
const Navigation = ({ select }) => {

    const {addUser, subscription, setSubscription} = React.useContext(SocketContext)

    const navigate = useNavigate()
  const [profile, setProfile] = React.useState({})
  const [showmenu, setShowmenu] = React.useState(false)
  const [profileloc, setProfileloc] = React.useState('')
  const [upgraded, setUpgraded] = React.useState(null)

  const [navmenu, setNavmenu] = React.useState(false)
  const [profilemenu, setProfilemenu] = React.useState(false)

  const loadSubscriptions = ()=>{
    let db = ls.get(subscribe, { decrypt: true});
    if(db !== null){
        setUpgraded(db)
        setSubscription(db)
    }
  }


  const loadProfile = React.useCallback(() => {
    let db = ls.get(USERDB, { decrypt: true })

    if (db !== null) {
        console.log("DATA",db.user.user)
         addUser(db.user.user)
         console.log(db.user.user.country)

         setProfileloc(db.user.user.city+','+db.user.user.country)
      setProfile(db.user.user)


    }else{


    }
  }, [profile])
  React.useEffect(() => {
    loadProfile()

    return ()=>{
        setProfile()
setShowmenu()
setProfileloc()
    }

  }, [])

  const [note, setnote] = React.useState([])

  const loadData = () => {
      let token = ls.get(DATABASE_KEY, {decrypt:true})
      axios.get("/api/notification", {
          headers: {
              Accept:'application/json',
              Authorization: 'Bearer ' + token
          }
      }).then((response)=>{
          console.log(response.data)
          setnote(response.data.notice)
      }).catch((error)=>{
          console.log(error)
      })
  }


  React.useEffect(()=>{
    let id = setInterval(loadData,10000)
    let db = ls.get(USERDB, {decrypt:true})
    // if(db == null){

    //    window.location.href = "/"
    // }
    loadSubscriptions()
    return ()=>{
        clearInterval(id)
    }
  }, [note])

  const handleLogout = ()=>{
    const token = ls.get(DATABASE_KEY, {decrypt:true});

      axios.post("/api/logout", {}, {
          headers:{
              'Accept':'application/json',
              'Authorization':'Bearer '+token
          }
      }).then((response)=>{
        ls.remove(DATABASE_KEY)
        ls.remove(USERDB)


          toast.success(response.data.message);
          navigate("/", {replace:true});

      }).catch((err)=>{
        ls.remove(DATABASE_KEY)
        ls.remove(USERDB)

          toast.success(response.data.message);
          navigate("/", {replace:true});


      })
  }

  return (
    <div className="h-full w-full">
    <div className="hidden drop-shadow-4xl z-40  md:flex justify-between h-[65px] bg-white items-center px-[5%]">
     <div className="flex w-[350px]">
         <Link to="/show-all"><img src={data.longlogo} className="w-[120px]" /></Link>
         {upgraded === null && <Link to="/manage-subscription" className='flex gap-x-2 w-[180px] rounded-full text-white ml-6 font-bold p-1 justify-center items-center bg-red-600'>
          <img src={data.crown} className="w-[20px]" />
          <p className='text-sm'>Upgrade Membership</p>
        </Link>}
      </div>

        <ul className="flex gap-x-6 font-bold">
          <li>
            <Link to="/explore" className={select=="explore"?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}>
              {select == 'explore' ? (
                <i class="fi fi-sr-playing-cards" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-playing-cards" style={styles.icon}></i>
              )}
              <p>Explore</p>
            </Link>
          </li>
          <li>
            <Link to="/search" className={select=="search"?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}>
              {select == 'search' ? (
                <i class="fi fi-sr-search" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-search" style={styles.icon}></i>
              )}
              <p>Search</p>
            </Link>
          </li>
          <li>
            <Link to="/matches" className={select=="matches"?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}>
              {select == 'matches' ? (
                <i class="fi fi-sr-hand-holding-heart text-red-600" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-users" style={styles.icon}></i>
              )}
              <p>Matches</p>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={select=='message'?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}
            >
              {select == 'message' ? (
                <i class="fi fi-sr-comments" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-comments" style={styles.icon}></i>
              )}
              <p>Messages</p>{' '}
            </Link>
          </li>
          <li id="activity" className='relative'>
          <div

              className={select=='activity'?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}
            >
              {select == 'activity' ? (
                <i class="fi fi-rr-user-add" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-user-add" style={styles.icon}></i>
              )}
              <p>Activities</p>{' '}
            </div>
                <ul className='absolute flex flex-col gap-3 top-6 z-6 bg-white drop-shadow-xl p-3 w-[150px] left-0 right-0 text-center '>
                    <Link to="/likes" className='hover:text-red-700'>Likes</Link>
                    <Link to="/favorite" className='hover:text-red-700'>Favorite</Link>
                    <Link to="/profile-view" className='hover:text-red-700'>Profile Viewed</Link>
                    <Link to="/blocked" className='hover:text-red-700'>Blocked</Link>
                </ul>
          </li>
        </ul>

      <div className=" flex justify-end items-center w-[350px]  gap-x-5 font-bold relative">
        <div className="flex relative bg-zinc-100  pr-2 p-1 rounded-full">
          <img src={`/storage/avatar/${profile.first_cover}`} className="w-[35px] h-[35px] rounded-full mr-4" />
          <div className="capitalize mr-6 flex-1">
            <p className="-mb-2">{profile.name}</p>
            <span className="text-[12px] -mt-2">
              {profileloc} <a href="#" className='text-red-600'>Change</a>
            </span>
          </div>
          <button onClick={()=>{
              if(showmenu == true){
                  setShowmenu(false)
              }else{
                  setShowmenu(true)
              }
              className="ml-8"
          }}>
            {showmenu ? <i class="fi fi-br-angle-small-up"></i>:<i class="fi fi-br-angle-small-down"></i>}
          </button>
          {/* submenu */}
          {showmenu && (<div className="absolute z-30 top-[57px] w-[250px] animate__animated animate__slideInDown flex flex-col gap-y-3 bg-white drop-shadow-2xl p-4 right-0">
           { upgraded === null &&  <Link className=' mb-1 flex bg-red-600 p-2 rounded-full justify-center items-center text-white' to="/manage-subscription">
                <img src={data.crown} className="w-[24px] mr-1" />
               <p className='text-sm'>Upgrade to Paid Membership</p>
                </Link>
            }
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/profile"> <i class="fi fi-rr-user"></i> View My Profile</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/preference-settings"><i class="fi fi-rr-heart"></i> Update Match Preferences</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/manage-subscription"><i class="fi  fi-rr-credit-card"></i> Manage Subscription</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/gift-to-friend"><i class="fi fi-rr-gift"></i> Gift To Friend</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/settings"><i class="fi fi-rr-settings"></i> Settings</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/help-and-support"><i class="fi  fi-rr-interrogation"></i> Help and Support</Link>

            <Link className='flex gap-x-[12px] hover:text-red-600' to="#" onClick={handleLogout}><i class="fi  fi-rr-sign-out"></i> Sign Out</Link>

          </div>)}
          {/* end submenu */}
        </div>
        <Link className="notify" to="/notification" style={{ position:'relative' }}>
          <i class="fi fi-rr-bell text-2xl"></i>
          {note.length > 0 && <div style={{ position:'absolute', width:8, height:8, borderRadius:4, background:'red', top:5, right:13 }}></div>}
        </Link>
      </div>
    </div>
    {/* mobile */}
    <div className='md:hidden z-30 flex drop-shadow-xl justify-between h-[45px] bg-white items-centerpx-3'>

        <button className='ml-4' onClick={()=>{
           setNavmenu(!navmenu)
        }}>
        <i class={navmenu == true ?"fi fi-rr-cross text-2xl":"fi fi-rr-menu-burger text-2xl"}></i>
        </button>
       <img src={data.longlogo} className="w-[120px]" />
       {/* <i class="fi fi-rr-bell text-2xl"></i> */}
       <img src={`/storage/avatar/${profile.first_cover}`} className="w-[40px] h-[40px] rounded-full mr-4" onClick={()=>{
        setProfilemenu(!profilemenu)
       }} />
    </div>

    {navmenu && <div className='fixed right-0 left-0 top-[45px] bottom-0 bg-white z-50'>
    <ul className=" flex flex-col items-center gap-y-3   text-xl font-bold pt-6">
                        <Link to="/explore">Explore</Link>
                        <Link to="/matches">Matches</Link>
                        <Link to="/messages">Messages</Link>
                        <Link to="/activities">Activities</Link>
                        <Link to="/notification">Notification</Link>
                    </ul>
    </div>}
    {profilemenu && <div className='fixed right-0 left-0 top-[45px] bottom-0 bg-white z-50'>
    <ul className=" flex flex-col items-center gap-y-3   text-xl font-bold pt-6">
    <Link className='flex gap-x-[12px] hover:text-red-600' to="/profile"> View My Profile</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/preference-settings">Update Match Preferences</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/manage-subscription"> Manage Subscription</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/gift-to-friend">Gift To Friend</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/settings"> Settings</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/help-and-support"> Help and Support</Link>

            <Link className='flex gap-x-[12px] hover:text-red-600' to="#" onClick={handleLogout}>  Sign Out</Link>
                    </ul>
    </div>}
    </div>


  )
}

export default Navigation

const styles = {
  icon: {
    fontSize: 21,
  },
  buttonActive: { backgroundColor: '#FFF0F3' },
  button: {
    color: '#C62251',
    background: '#f4f4f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 34,
  },
}
