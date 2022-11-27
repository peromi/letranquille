import React from 'react'
import { data } from "../../constants";

import HomeContainer from './HomeContainer';

function AboutScreen() {
  return (
    <HomeContainer>
     <div className='md:w-8/12 mx-auto w-full px-2'>
    
        <h1 className='md:text-6xl  font-bold text-3xl tracking-tighter mt-20 mb-8'>About Us</h1>
     
     {/* content */}
     <div className="mx-auto mb-4">
        <h1 className='md:text-[34px] mb-2 text-xl font-bold tracking-tighter py-3'>What is LeTranquille?</h1>
        <p>
Le-Tranquille is a Canadian dating site that is committed to providing a quality opportunity and memorable dating experience to singles in search of dating and marriage. Our site is not only used by people living in Canada, it is also used by singles all over the world. Our aim is to continually deliver a friendly online dating service combined with sophisticated search, messaging and interactive facilities that will make your experience for true love fun and enjoyable.</p>

<h1 className='md:text-[34px] my-2 text-xl font-bold tracking-tighter  py-3'>Why use Le-Tranquille?</h1>
<p>Unlike some other sites, LeTranquille offers friendly, personalized service combined with the latest audio or video chat technology. We also understand the motivations and aspirations of people from diverse backgrounds seeking to find their perfect match and feel that our own experiences can be of valuable assistance. We understand that sometimes.... the perfect one for you is located at the other end of the earth! No matter where that special person is, or why you want to meet them, we can help you to find your perfect match.</p>


<h1 className='md:text-[34px] mb-2 text-xl font-bold tracking-tighter  py-3'>Benefits for Le-Tranquille members:</h1>
<p>Search through thousands profiles of attractive, friendly men and women from all backgrounds looking to meet someone just like you. Your own personal inbox allows you to easily and anonymously find your perfect match. Add a profile instantly and attach a photo.</p>

<h1 className='md:text-[34px] my-2 text-xl font-bold tracking-tighter  py-3'>Contact Le tranquille.com</h1>
<p>Please do not hesitate to contact Le-Tranquille with any questions you may have regarding this site.</p>
<h1 className='text-[24px] text-red-700 font-bold'>support@le-tranquille.com</h1>

<h1 className='md:text-[34px] mt-3 font-bold text-xl font-bold tracking-tighter  py-3'>Who Owns LeTranquille?</h1>
<p>Le tranquille is a trusted online dating site for singles, operated by Govea Group Media Ltd.
Govea Group Media was founded in 2001 and is based in Toronto Ontario, Canada.</p>

     </div>
     </div>
    </HomeContainer>
  )
}

export default AboutScreen
