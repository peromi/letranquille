import React from "react";

import {Link, useNavigate} from 'react-router-dom'
import { data } from "../constants";
import level1 from "../assets/images/level1.png";
import level2 from "../assets/images/level2.png";
import level3 from "../assets/images/level3.png";
import logo from "../assets/images/logo.png";



const REG_STEPS = "stepper";

function Welcome() {
    const navigate = useNavigate();
    let year = new Date().getFullYear();
    React.useEffect(()=>{
        const step = JSON.parse(localStorage.getItem(REG_STEPS));

        if(step !== null){
            navigate('/onboarding', {replace:true})
        }
    },[])
    return (
        <div>
            <div className="relative">
                <div className="flex justify-between bg-red-800 h-[48px] fixed items-center right-0 left-0 px-3" style={{ zIndex:9999999 }}>
                    <div className='w-[120px]'>
                       <img src={data.longlogo} style={{ filter:'brightness(0) invert(1)' }} />
                    </div>

                        <ul className="hidden md:flex gap-6 font-bold text-white">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/story">Stories</Link>
                            </li>
                            <li>
                                <Link to="/membership">Membership</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>

                    <div class="hidden font-bold md:flex gap-4 text-white">
                        <Link to="/register">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </div>
                    <button className="md:hidden hover:text-yellow-600 text-white">
                    <i className="fi fi-rr-menu-burger text-2xl text-white"></i>
                    </button>
                </div>
                <div class="pt-[80px] md:pt-[45px] bg-red-800 px-3 pb-3">
                    <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div class="text-white flex justify-around flex-col ">
                            <div className="flex flex-col">
                            <h1 className="font-bold md:text-6xl text-4xl " style={{ fontFamily:"FredokaOne" }}>
                                Make the First move and find the love of your
                                life
                            </h1>
                            <p className="font-bold text-xl mt-2 md:w-3/4">
                                Start meeting new People wih matching
                                personalities around you with{" "}
                                <span>Le tranquille Dating</span>
                            </p>
                            <Link to="/register" className="hover:bg-white bg-yellow-300 p-3 rounded-md mt-[45px] md:w-1/2 text-center text-black font-bold">
                                Start your Lovely Journey now{"  "}
                                <span class="fi-rr-user-add ml-2"></span>
                            </Link>
                            </div>

                            <div>


                            <p>Follow us on</p>
                    <ul  className="flex gap-4">
                        <li>
                            <a href="#">
                                <i class="fi fi-brands-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fi fi-brands-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fi fi-brands-twitter"></i>
                            </a>
                        </li>
                    </ul>

                            </div>
                        </div>

                            <ul className="md:grid grid-cols-3 gap-3 hidden">
                                {[1,2,3,4,5,6,7,8,9,10,11,12].map((p,index)=><li key={index} className="ring-1 bg-white p-2 rounded-md">
                                    <img src={`./images/avatar/${p}.jpg`} alt="" />
                                    <div class="flex justify-center items-center gap-6 p-3 text-red-800 font-bold">
                                        <span class=" fi-rr-cross-small"></span>
                                        <span class=" fi-rr-heart"></span>

                                        <span class="fi-rr-check"></span>
                                    </div>
                                </li>)}

                            </ul>

                    </div>
                </div>

            </div>
            {/* Matching */}
            <div class="pt-5 pb-5">
                <div class="w-11/12 mx-auto md:grid md:grid-cols-2 flex flex-col-reverse items-center gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">
                            Find your <span>Match</span> Near you
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat ullam velit consequatur explicabo
                            necessitatibus similique voluptate excepturi eius
                            dolorum quibusdam! Accusamus consequuntur eveniet
                            dolorem aliquid mollitia neque eius non nobis.
                        </p>
                        <Link to="/register" className="font-bold bg-black text-center text-white px-[124px] pb-2 pt-2 hover:bg-red-600 mt-3 md:w-1/2 rounded-md">Join Now</Link>
                    </div>

                    <div className="relative flex justify-center items-center p-4">
                        <div className="mx-auto">
                            <img src={level1} alt="" />
                        </div>
                        <div className="absolute z-10">
                            <img src={level2} alt="" />
                        </div>
                        <div className="absolute z-10">
                            <img src={level3} alt="" />
                        </div>
                        <div className="absolute z-10">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
                <div class="mt-[220px] mb-[65px] md:grid md:grid-cols-2 px-4 flex flex-col-reverse">
                    <div>
                        <h1>Image</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-right">
                            <span>Chat</span> with Matches
                        </h1>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat ullam velit consequatur explicabo
                            necessitatibus similique voluptate excepturi eius
                            dolorum quibusdam! Accusamus consequuntur eveniet
                            dolorem aliquid mollitia neque eius non nobis.
                        </p>
                        <Link to="/register" className="font-bold bg-black text-white px-[124px] pb-2 pt-2 hover:bg-red-600 mt-3 md:w-1/2 rounded-md">Join Now</Link>
                    </div>
                </div>
            </div>
            {/* Discovery */}
            <div class="bg-white grid md:grid-cols-2 gap-x-6 grid-cols-1 mt-5 mb-0 justify-center " style={{ overflowX:'hidden'}}>
                <div class="flex flex-col justify-center  ml-[24px]">
                    <h1 className="text-4xl font-bold w-3/4 ">
                        <span className="text-red-600">Discover</span> the best Match According to your
                        Passion and Hobbies
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequatur perspiciatis, corporis explicabo
                        voluptatibus debitis ea voluptas facere nobis fugiat!
                        Neque commodi sapiente quidem saepe temporibus. Ipsum
                        cumque sit dolorem expedita.
                    </p>
                </div>

<div className="relative h-[368px]">
<ul className="flex flex-wrap space-y-3 space-x-3  items-end justify-end absolute right-[-54px] bottom-0">
    {['Gaming','Cooking', 'Fitness', 'Tv shows and Movies', 'Painting & Drawing', 'Hiking', 'Vegan', 'Dancing', 'Climbing', 'K-Pop', 'Road Trips', 'Volunteering',
'Shopping', 'Food', 'Music', 'Photography', 'Comedy', 'Athlete', 'Sushi', 'Yoga', 'Hollywood', 'Marvel Movies', 'Netflix & Chill'].map((item, index)=>  <li key={index} className="ring-1 ring-red-600 rounded-full px-2 text-center pt-2 pb-2">{item}</li>)}

                        </ul>

</div>



            </div>
            {/* Success stories */}
            {/* <div class="">
                <h1>Success Stories</h1>
                <ul class="success__carousel">
                    <li>
                        <div class="img__container">
                            <img src="./images/slides/slide1.jpg" alt="" />
                            <div class="img__title">
                                <h1>Mercy & Wisdom</h1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="img__container">
                            <img src="./images/slides/slide2.jpg" alt="" />
                            <div class="img__title">
                                <h1>Mercy & Wisdom</h1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="img__container">
                            <img src="./images/slides/slide3.jpg" alt="" />
                            <div class="img__title">
                                <h1>Mercy & Wisdom</h1>
                            </div>
                        </div>
                    </li>
                </ul>
                <p class="success__comment__active">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur, suscipit. Iusto aspernatur repudiandae ea amet
                    nulla! Reiciendis error nulla alias laudantium architecto
                    eligendi, fuga veniam mollitia nihil, laborum ex ipsa.
                </p>
                <div class="success__carousel__button">
                    <button>
                        <span class="fi-rr-angle-small-left"></span>
                    </button>
                    <button>
                        <span class="fi-rr-angle-small-right"></span>
                    </button>
                </div>
            </div> */}
{/* Subscription */}
            <div className="md:w-11/12 px-4 md:grid md:grid-cols-2 flex flex-col-reverse gap-x-6 py-1">

          <div className='md:w-[360px] flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-300 px-4 p-2 rounded-full '>Free</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Free<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>0</h1>
                <span>/3days</span>
            </div>
            <p> </p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>45 swipes</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Higher Match Making Rate</li>
            </ul>
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full  font-bold">
                <p>Try it for free</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
                <div class="flex flex-col flex-2">
                    <h1 className="text-4xl font-bold text-red-700">Le-tranquille Dating Membership</h1>
                    <p className="py-3">
                        Find your partner more easily without any limitations
                        with our best Plan
                    </p>
                    <h1 class="text-2xl font-bold  ">
                        Try our Free '7 days' Subscription Plan with 45 Swipes
                        per day, Unlimited calling on your new Registration
                    </h1>
                    <Link to="#" className="font-bold md:w-1/2 mb-3 text-center text-white hover:bg-yellow-300 mt-5 bg-red-600 p-2 rounded-full">Offer valid Till April 29, 2022</Link>
                </div>
            </div>


            <div className='pl-6 h-[58px] bg-red-600 flex justify-between items-center text-white'>
        <p>Copy 2022. All rights reserved</p>

        <div className='flex justify-center items-center gap-x-[34px]'>
        <ul className='hidden md:flex md:gap-[12px] md:font-bold'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/story">Story</Link>
            <Link to="/membership">Membership</Link>
        </ul>
        <ul className='flex gap-x-[12px] pr-6'>
            <li>
                <i className="fi fi-brands-instagram"></i>
            </li>
            <li>
                <i className="fi fi-brands-facebook"></i>
            </li>
            <li>
                <i className="fi fi-brands-twitter"></i>
            </li>
        </ul>
        </div>
     </div>
        </div>
    );
}

export default Welcome;
