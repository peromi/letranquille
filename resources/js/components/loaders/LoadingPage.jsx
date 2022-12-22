import React from 'react'
import { data } from '../../constants'
import Spinner from "react-spinkit"

const LoadingPage = () => {
  return (
    
 
  

   <div className=' fixed top-0 left-0 right-0 bottom-0' style={{
    backgroundImage:  `url('${data.lovetransparent}')`
           ,
       
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat"}}>
   <div className="bg-red-800/70 fixed top-0 left-0 bottom-0 right-0  flex flex-col justify-center items-center text-white" >


<img src={data.logo} className="md:w-[80px]  animate__animated animate__pulse animate__infinite	infinite animate__fast"  />
<h1 className='font-black tracking-tighter text-4xl animate__animated animate__pulse animate__infinite	infinite animate__fast'>Le - Tranquille</h1>
    
<div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
    <p className="mb-8 ">Please wait.....</p>

    {/* <Spinner name='circle' color='white' style={{fontSize:45}} /> */}
        </div>
</div>
  )
}

export default LoadingPage