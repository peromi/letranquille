import React from 'react'
import HomeContainer from './HomeContainer'
import {Link} from 'react-router-dom'


function ContactUs() {
  return (
    <HomeContainer>
    {/* banner */}
    <div className='h-screen text-center'>
    <div className='h-[154px] flex flex-col justify-center items-center '>
<h1 className='text-6xl font-bold'>Contact Us</h1>
</div>
{/* content */}
<div className="w-8/12 mx-auto mb-4">
    <p>If you'd like to contact the <strong>Le-Tranquille</strong> Customer Care team, we offer several contact options:</p>
    <h1 className='text-[34px] my-2 font-bold'>Chat</h1>
<p>
    Chat with us between 8am and 5pm Central Time. <strong>Monday</strong> through <strong>Friday</strong>
</p>

<h1 className='text-[34px] my-2 font-bold text-red-800'>Email</h1>
<p>If you'd like to send us an email, please <Link to='/contact-form'>Click here</Link></p>




</div>
    </div>
</HomeContainer>
  )
}

export default ContactUs
