import React from 'react'
import "../../css/matches.scss"
import { data } from '../constants'

function Match() {
  return (
    <div className='personalities'  >
                    <div className='profile'>
                        <div className='container' style={{ backgroundImage:`url(${data.profile})`,backgroundPosition:'center', backgroundSize:'cover' }}>
                            <img className='membership' src='' />

                            <div className='profile_bottom_info'>
                                <h2>Katherina Joel, <span>21</span></h2>
                                <div className='mile'>
                                <i class="fa-solid fa-location-dot"></i>
                                <p>5 miles away</p>
                                </div>
                                <p className='matchrange'>80% Match</p>
                            </div>
                        </div>
                        <div className='profile_navigation'>
                            <button><i class="fa-solid fa-chevron-left"></i></button>
                            <button><i class="fa-solid fa-xmark"></i></button>
                            <button><i class="fa-solid fa-heart"></i></button>
                            <button><i class="fa-solid fa-check"></i></button>
                            <button><i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className='info'>
                        info
                    </div>

     </div>
  )
}

export default Match
