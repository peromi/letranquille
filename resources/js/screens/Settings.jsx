import React from 'react'
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
                            <input type="checkbox" />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Liked Me</p>
                            <input type="checkbox" />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>New Matches</p>
                            <input type="checkbox" />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Your Profile Interaction</p>
                            <input type="checkbox" />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Le-tranquille offers and promotions</p>
                            <input type="checkbox" />
                        </li>
                        <li className='flex justify-between items-center text-lg'>
                            <p>Goveamedia offers and promotions</p>
                            <input type="checkbox" />
                        </li>
                        
                    </ul>
                 </div>
                <div>
                <h1 className='font-bold text-xl'>Realtime Notifications</h1>
                <ul className='flex gap-y-3 font-bold flex-col'>
                         
                         <li className='flex justify-between items-center text-lg'>
                             <p>New Message</p>
                             <input type="checkbox" />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Liked Me</p>
                             <input type="checkbox" />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Someone viewed my profile</p>
                             <input type="checkbox" />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Someone added me as a favorite</p>
                             <input type="checkbox" />
                         </li>
                         <li className='flex justify-between items-center text-lg'>
                             <p>Potential Matches</p>
                             <input type="checkbox" />
                         </li>
                         
                         
                     </ul>
                </div>
            </div>

        </div>}
        
        {tab===1 && <div className=" pt-4">
            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Notification</h1>
                    <p>Update your email and realtime notifications</p>
                </div>
                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold">Change Email Address</button>
            </div>

        </div>}
        {tab===2 && <div className=" pt-4">
            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Notification</h1>
                    <p>Update your email and realtime notifications</p>
                </div>
                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold">Change Email Address</button>
            </div>

        </div>}
    {tab===3 && <div className=" pt-4">
            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <h1 className="font-bold text-2xl">Notification</h1>
                    <p>Update your email and realtime notifications</p>
                </div>
                <button className="p-2 px-12 rounded-full bg-red-800 text-white font-bold">Change Email Address</button>
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

        </div>}
 </div>
</MainContainer>
  )
}

export default Settings
