import React from 'react'
import HomeContainer from './HomeContainer'
import {Link} from 'react-router-dom'


function ContactUs() {
  return (
    <HomeContainer>
    {/* banner */}
    <div className='h-screen text-center'>
    <div className='md:h-[154px] mt-3 flex flex-col justify-center items-center '>
<h1 className='text-3xl md:text-4xl font-bold tracking-tighter mt-3 mb-3'>Contact Us</h1>
</div>
{/* content */}
<div className="sm:w-full sm:px-8 md:w-8/12 mx-auto mb-4 flex flex-col justify-left items-left">
    <p>If you'd like to contact the <strong>Le-Tranquille</strong> Customer Care team, we offer several contact options:</p>
    <h1 className='text-[34px] my-2 font-bold tracking-tighter sm:text-2xl'>Chat</h1>
<p>
    Chat with us between 8am and 5pm Central Time. <strong>Monday</strong> through <strong>Friday</strong>
</p>

<h1 className='text-[34px] my-2 font-bold text-red-800 tracking-tighter sm:text-2xl'>Email</h1>
<p>If you'd like to send us an email, please <Link to='/contact-form' className='font-bold text-red-700'>Click here</Link></p>




</div>
    </div>
</HomeContainer>
  )
}

export default ContactUs
