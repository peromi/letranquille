import React from 'react'
import { Link } from 'react-router-dom'
import im404 from "../assets/images/404.png"

const ErrorPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
       <img src={im404} className="w-[140px] hover:w-[160px] duration-700 ease-in-out" />
        <h1 className='font-black tracking-tighter text-4xl'>404</h1>
        <p className='tracking-tighter font-bold'>Page Not Found</p>
        <p className='m-4 tracking-tight'>Maybe the page you are looking for has been removed</p>
        <button onClick={()=>{
            history.back()
        }} className='cursor-pointer p-3 px-8 bg-red-600 text-white rounded-full hover:bg-red-800 hover:px-12 ease-in-out duration-700'>Goto Home</button>
    </div>
  )
}

export default ErrorPage