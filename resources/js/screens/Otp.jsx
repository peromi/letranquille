import React from 'react'
import { Link } from 'react-router-dom'
import AuthContainer from '../containers/AuthContainer'
import {Button} from '@material-ui/core'

function Otp() {
    const submitOtp = (e)=>{
        e.preventDefault();
        alert("Otp on the way")
    }
  return (
    <AuthContainer>
        <button class="floating__backbutton"><i class="fa-solid fa-angle-left"></i></button>
                <h1 class="text-align-center mt-1 text-small-24 text-secondary">Enter OTP</h1>

                <form action="#" onSubmit={submitOtp}>
                    <p class="text-align-center mb-4">An 'One Time Password' has been sent to your email.</p>
                    <div class="otp__container">

                        <input type="text" maxlength="1" placeholder="1" />


                        <input type="text" maxlength="1" placeholder="2" />


                        <input type="text" maxlength="1" placeholder="3" />


                        <input type="text" maxlength="1"  placeholder="4" />


                        <input type="text" maxlength="1"  placeholder="5" />


                        <input type="text" maxlength="1"  placeholder="6" />

                    </div>

                    {/* {{-- Timer --}} */}
                    <div class="timer__board">
                        <div class="timer">
                            <h1 id="minute">00</h1>
                            <h1>:</h1>
                            <h1 id="seconds">00</h1>
                        </div>
                        <p> time remaining to </p>
                        <Link to="onboaring">ResendOTP</Link>
                    </div>


                    <Button variant="contained" style={{ marginTop:21, height:48, width:450,  fontWeight:'bold' }}  color="primary">Verify OTP</Button>

                </form>
    </AuthContainer>
  )
}

export default Otp
