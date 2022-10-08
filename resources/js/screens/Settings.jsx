import React from 'react'
import Switch from 'react-js-switch'
import MainContainer from '../containers/MainContainer'

function Settings() {
const [tab, setTab] = React.useState(0)
  return (
    <MainContainer>
    <div className="bg-red-600 w-full px-12  flex gap-x-6">
    <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>Email Address</button>
    <button className={tab===1 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(1)}>Password</button>
    <button className={tab===2 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(2)}>Profile Settings</button>
    <button className={tab===3 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(3)}>Billing</button>
    <button className={tab===4 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(4)}>Notifications</button>
</div>
<div className="h-screen w-full px-20 pb-4">
{tab===0 && <div className=" pt-4">

            <h1 className="font-bold text-2xl">Email Address</h1>
            <p>Please update your email if it has changed so you do not miss any communications or match alert</p>

<h1 className="font-bold text-red-600">Change Email Address</h1>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2 md:w-[50%] bg-white mt-6">
<input type="email" placeholder="Email Address" className="flex-1 bg-transparent" />
<button className='bg-red-600 text-white hover:bg-red-800 px-6 p-2'>Save</button>
</div>
        </div>}

        {tab===1 && <div className=" pt-4">

<h1 className="font-bold text-2xl">Password</h1>
<p>To help keep your account secure we recommend that you routinely change your password.</p>
<p className='font-bold'>Important: For extra security ensure that your new password is NOT the same as your email password</p>

<h1 className="font-bold text-red-600 text-2xl">Enter your current password</h1>
<p className="mt-6">Current password</p>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2 md:w-[50%] bg-white ">
<input type="password" placeholder="Current password" className="flex-1 bg-transparent" />

</div>
<button className="mt-2">Forgot password?</button>
<p className="mt-3">New password</p>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2 md:w-[50%] bg-white ">
<input type="password" placeholder="New password" className="flex-1 bg-transparent" />

</div>
<p className="mt-1">Confirm New password</p>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2 md:w-[50%] bg-white  ">
<input type="password" placeholder="Confirm New Password" className="flex-1 bg-transparent" />

</div>
<button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold mt-5">Upgrade Now</button>
</div>}
        {tab===2 && <div className=" pt-4">
            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Profile Settings</h1>
                    <p>Update your profile display options and localization.</p>

                    <div>

                        <h1 className="font-bold text-red-600 text-2xl mt-2">Online Status</h1>

                        <div className="flex flex-row gap-x-3 font-bold">
                        <input type="radio" id="online1" name="online" checked />
                        <label for="online1">Show me as online</label>
                        </div>
                        <div className="flex flex-row gap-x-3 font-bold">
                        <input type="radio" id="online2" name="online" />
                        <label for="online2">Show me as busy</label>
                        </div>
                    </div>
                    <div>

                        <h1 className="font-bold text-red-600 text-2xl mt-3">Display Profile</h1>

                        <div className="flex flex-row gap-x-3 font-bold">
                        <input type="radio" id="d" name="d" checked />
                        <label for="d">Display my profile to users</label>
                        </div>
                        <div className="flex flex-row gap-x-3 font-bold">
                        <input type="radio" id="d2" name="d" disabled />
                        <label for="d2">Hide my profile to users</label>
                        </div>
                    </div>

                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold mt-4">Save</button>
                </div>
            </div>

        </div>}
    {tab===3 && <div className=" pt-4">
            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Billing - Auto Renew</h1>
                    <p>You are currently a FREE Standard member. Click <strong>"Upgrade Now"</strong> below to learn more about the benefits of becoming a paid member.</p>

                    <p>Note: Auto renewal is only switched on after you have made a successful payment to upgrade membership.</p>
                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold mt-5">Upgrade Now</button>
                </div>
            </div>

        </div>}
        {tab===4 && <div className=" pt-4">
        <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Notification</h1>
                    <p>Update your email and realtime notifications</p>
                </div>
                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold">Change Email Address</button>
            </div>

            {/* content */}
            <div className='flex flex-col md:flex-row gap-x-12 mt-10'>
                <div className='w-[30%]'>
                    <h1 className='font-bold text-xl'>Email Notifications</h1>
                    <ul className='flex gap-y-3 font-bold flex-col'>

                        <li className='flex justify-between items-center text-lg'>
                            <p>New Message</p>
                            <Switch  />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Liked Me</p>
                            <Switch  />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>New Matches</p>
                            <Switch  />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Your Profile Interaction</p>
                            <Switch  />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Le-tranquille offers and promotions</p>
                            <Switch  />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Goveamedia offers and promotions</p>
                            <Switch  />
                        </li>

                    </ul>
                 </div>
                <div  className='w-[30%]'>
                <h1 className='font-bold text-xl'>Realtime Notifications</h1>
                <ul className='flex gap-y-3 font-bold flex-col'>

                         <li className='flex justify-between items-center text-lg'>
                             <p>New Message</p>
                             <Switch  />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Liked Me</p>
                             <Switch  />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Someone viewed my profile</p>
                             <Switch  />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Someone added me as a favorite</p>
                             <Switch  />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Potential Matches</p>
                             <Switch  />
                         </li>


                     </ul>
                </div>
            </div>

        </div>}
 </div>
</MainContainer>
  )
}

export default Settings
