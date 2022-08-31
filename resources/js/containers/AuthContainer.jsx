import React from 'react'
import "../../css/login.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import back from '../assets/images/back.png'
import { UserContextProvider } from '../context/Usercontext';



function AuthContainer(props) {
  return (
    <UserContextProvider>
        <div className='bg-primary bg-image' style={{ position:'relative', overflow:'hidden', width:'100%',  }}>
        {/* <img src={back} style={{ position:'fixed', zIndex:'1', top:0, bottom:0, right:0, left:0 }} /> */}
      <div className=" d-flex justify-content-left align-items-center vw-100 vh-100" style={{ zIndex:23 }}>
                <div className="float-left ml-3" style={{ zoom:'90%' }}>
                    <div className="bg-white radius-24 login-form login-inner-form">
                        {props.children}
                    </div>
                </div>
            </div>
            <ToastContainer   />
    </div>
    </UserContextProvider>
  )
}

export default AuthContainer
