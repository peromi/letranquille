import React from 'react'
import HomeContainer from './HomeContainer'

function StoryScreen() {
  return (
    <HomeContainer>
        <div className='h-[354px] flex flex-col justify-center items-center '>
        <h1 className='text-6xl font-bold'>About Us</h1>
     </div>
        <div className="h-screen w-screen flex flex-col">
            <h1 className='text-3xl font-bold text-center'>Testimonies</h1>
            <p>Here are the testimonial of our users</p>
        </div>
    </HomeContainer>
  )
}

export default StoryScreen
