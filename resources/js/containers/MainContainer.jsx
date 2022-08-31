import React from 'react'
import Navigation from '../navigation/Navigation';
import { toast, ToastContainer } from 'react-toastify';
import { UserContextProvider } from '../context/Usercontext';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


import Dashboard from '../dashboard/Dashboard';
import Matches from '../screens/Matches'
import { SocketContext } from '../context/SocketContext';

import 'animate.css'


const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";

function MainContainer(props) {
    const {open, setOpen, handleClose} = React.useContext(SocketContext)

//     const [user, setUser] = React.useState('')
//     const [profile, setProfile] = React.useState('')
//     const [avatar, setAvatar] = React.useState('')


//     const loadData = ()=>{
//         const token = JSON.parse(localStorage.getItem(DATABASE_KEY));
//         if (token == null) {
//             return;
//         }

//         axios.get("/api/matches",{
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + token,
//             },
//         }).then((response)=>{
//                 // console.log(response.data.user.profile)
//                 setUser(response.data.user)
//                 setProfile(response.data.user.profile)
//                 setAvatar(response.data.user.avatar)
//                 localStorage.setItem(USERDB, JSON.stringify(response.data.user));
//         }).catch(error=>{
//             toast.error(error.response)
//         })
//     }

//     React.useEffect(()=>{

//         let id = setTimeout(()=>{
//             loadData();
//         },2000)

// return ()=>{
//     clearTimeout(id)
// }

//     },[user])

  return (
    <div >

        <Navigation select={props.select} />
         {props.children}
         <ToastContainer   />


    </div>
  )
}

export default MainContainer
