import React, { useEffect, useState, useReducer, useContext } from 'react'
import { data } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import ls from 'localstorage-slim'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SocketContext } from '../context/SocketContext'


const DATABASE_KEY = 'user-m9j234u94'
const DBNAV = 'nav'
const USERDB = 'dao'
const Navigation = ({ select }) => {

    const {addUser, subscription} = React.useContext(SocketContext)

    const navigate = useNavigate()
  const [profile, setProfile] = React.useState({})
  const [showmenu, setShowmenu] = React.useState(false)
  const [profileloc, setProfileloc] = React.useState('')


  const loadProfile = React.useCallback(() => {
    let db = ls.get(USERDB, { decrypt: true })

    if (db !== null) {
        console.log("DATA",db.user.user)
         addUser(db.user.user)
         console.log(db.user.user.address.split(','))

         setProfileloc(db.user.user.address.split(','))
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
    <div>
    <div className="hidden md:flex drop-shadow-xl justify-between h-[65px] bg-white items-center fixed top-0 left-0 right-0 px-3">
     <div className="flex w-[300px]">
         <img src={data.longlogo} className="w-[120px]" />
         { subscription == null &&  <Link to="/manage-subscription" className='flex w-[180px] rounded-full text-white ml-6 font-bold p-1 justify-center items-center bg-red-600'>
          <img src={data.crown} className="w-[20px]" />
          <p>Upgrade to Premium</p>
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
          <li>
            <Link
              to="/activities"
              className={select == 'activity'?"text-red-600 flex gap-x-2 hover:text-red-600":"flex gap-x-2 hover:text-red-600"}
            >
              {/* <img src={data.message} /> */}
              {select == 'activity' ? (
                <i class="fi fi-sr-following" style={styles.icon}></i>
              ) : (
                <i class="fi fi-rr-following" style={styles.icon}></i>
              )}
              <p>Activities</p>{' '}
            </Link>
          </li>
        </ul>

      <div className="flex justify-end items-center w-[300px]  gap-x-5 font-bold relative">
        <div className="flex relative">
          <img src={`/storage/avatar/${profile.first_cover}`} />
          <div className="capitalize">
            <p>{profile.name}</p>
            <span className="text-[12px]">
              {profileloc[0]} <a href="#" className='text-red-600'>Change</a>
            </span>
          </div>
          <button onClick={()=>{
              if(showmenu == true){
                  setShowmenu(false)
              }else{
                  setShowmenu(true)
              }
          }}>
            {showmenu ? <i class="fi fi-br-angle-small-up"></i>:<i class="fi fi-br-angle-small-down"></i>}
          </button>
          {/* submenu */}
          {showmenu && (<div className="absolute z-30 top-[57px] w-[250px] animate__animated animate__slideInDown flex flex-col gap-y-3 bg-white drop-shadow-2xl p-4 right-0">
           { subscription == null &&  <Link className=' mb-1 flex bg-red-600 p-2 rounded-full justify-center items-center text-white' to="/manage-subscription">
                <img src={data.crown} className="w-[24px] mr-1" />
                Upgrade to Premium
                </Link>
            }
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/profile"> <i class="fi fi-rr-user"></i> View My Profile</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/preference-settings"><i class="fi fi-rr-heart"></i> Update Match Preferences</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/manage-subscription"><i class="fi  fi-rr-credit-card"></i> Manage Subscription</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/gift-to-friend"><i class="fi fi-rr-gift"></i> Gift To Friend</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/settings"><i class="fi fi-rr-settings"></i> Settings</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="/help-and-support"><i class="fi  fi-rr-interrogation"></i> Help and Support</Link>
            <Link className='flex gap-x-[12px] hover:text-red-600' to="#"><i class="fi fi-rr-text"></i> Language</Link>
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
    <div className='md:hidden z-30 flex drop-shadow-xl justify-between h-[65px] bg-white items-center fixed top-0 left-0 right-0 px-3'>
    <i class="fi fi-rr-menu-burger text-2xl"></i>
       <img src={data.longlogo} className="w-[120px]" />
       <i class="fi fi-rr-bell text-2xl"></i>
    </div>
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
