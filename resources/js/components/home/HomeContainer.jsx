import React from 'react'
import {data} from '../../constants'
import {Link, useNavigate} from 'react-router-dom'

function HomeContainer({children}) {
  return (
    <div className=' '>
    <div className="flex justify-between px-4 md:pl-[160px] md:pr-[160px] pb-2 pt-2 items-center bg-white ">
        <div  className='w-[183px]'>
            <img src={data.longlogo} className="w-[120px]" />

        </div>

                        <ul className='hidden md:flex md:gap-x-[35px] md:font-bold  md:block'>
                            <li className='hover:text-red-600'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-red-600'>
                                <Link to="/story">Stories</Link>
                            </li>
                            <li className='hover:text-red-600'>
                                <Link to="/membership">Membership</Link>
                            </li>
                            <li className='hover:text-red-600'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='hover:text-red-600'>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>

                    <div className='md:gap-x-[24px] md:flex md:w-[183px] md:font-bold md:justify-end hidden md:block' >
                        <Link to="/register" className='hover:text-red-600'>Sign Up</Link>
                        <Link to="/login" className='hover:text-red-600'>Login</Link>
                    </div>
                    <div className='md:hidden hover:text-red-600 mr-2'>
                        <i className="fi fi-rr-menu-burger text-[34px] font-bold"></i>
                    </div>
     </div>
        {children}
        <div className='pl-6 h-[58px] bg-red-600 flex justify-between items-center text-white'>
        <p>Copyright &copy; 2022. All rights reserved</p>

        <div className='flex justify-center items-center gap-x-[34px]'>
        <ul className='hidden md:flex md:gap-[12px] md:font-bold'>
            <Link to="/community-guideline">Community Guideline</Link>
            <Link to="/dating-safety">Dating Safety</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/terms-of-use">Terms of use</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
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
  )
}

export default HomeContainer
