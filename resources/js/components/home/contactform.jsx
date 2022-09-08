import React from 'react'
import HomeContainer from './HomeContainer'

function ContactForm() {
  return (
    <HomeContainer>
        <div className='h-[900px] w-8/12 mx-auto flex flex-col items-center'>
            <h1 className="font-bold text-2xl mt-4">Submit a request</h1>

            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-3' type="text" placeholder="Your email address" />
            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-1' type="text" placeholder="Username (Optional)" />
            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-1' type="text" placeholder="Phone Number" />
            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-1' type="text" placeholder="First and Last Name (Optional)" />
            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-1' type="text" placeholder="Your zip/postal code" />
            <select className="ring-1 ring-slate-900/4 p-3 w-5/12 mt-1">
                <option>Select a category</option>
                <option>Account Settings</option>
                <option>Cancel/Bill Inquiries</option>
                <option>Communication between members</option>
                <option>Events</option>
                <option>Make a purchase</option>
                <option>Matching & Searching</option>
                <option>Profile & Photos</option>
                <option>Report a member</option>
                <option>Technical Issue</option>
                <option>Mobile</option>
                <option>Suggestions</option>
                <option>Request my data</option>
                <option>Our company</option>
                <option>Other/Misc</option>
                <option>Contact us</option>
            </select>

            <input className='ring-1 ring-slate-900/4 p-3 w-5/12 mt-1' type="text" placeholder="Subject" />

<textarea className="ring-1 ring-slate-900/4 p-3 w-5/12 mt-1" placeholder="Description"></textarea>

<button className="p-2 bg-red-600 px-[120px] mt-4 text-white hover:bg-red-900">Submit</button>

        </div>
    </HomeContainer>
  )
}

export default ContactForm
