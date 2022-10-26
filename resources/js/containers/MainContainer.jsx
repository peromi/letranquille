import React from 'react'
import Navigation from '../navigation/Navigation';
import { ToastContainer } from 'react-toastify';


import { SocketContext } from '../context/SocketContext';



import 'animate.css'
import { Link } from 'react-router-dom';



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

        <div className="h-auto">
            {props.children}
        </div>

         <ToastContainer   />


         {/* <div className='pl-6 h-[58px] bg-red-600 flex justify-between items-center text-white'>
        <p>Copy 2022. All rights reserved</p>

        <div className='flex justify-center items-center gap-x-[34px]'>

        <ul className='hidden md:flex md:gap-[12px] md:font-bold'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/story">Story</Link>
            <Link to="/membership">Membership</Link>
        </ul>
        <ul className='flex gap-x-[12px] pr-6'>
            <li>
                <i className="fi fi-brands-instagram"></i>
            </li>
            <li>
                <i className="fi fi-brands-facebook"></i>
            </li>
            <li>
                <i className="fi fi-brands-twitter"></i>
            </li>
        </ul>
        </div>
     </div>

     <div className="bg-white flex justify-center items-center p-5">
     <div id="google_translate_element" className="p-2 ring-1 ring-slate-900/5 px-12 flex flex-col"></div>
     </div> */}
    </div>
  )
}

export default MainContainer
