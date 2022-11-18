import React from "react";
import { Link } from "react-router-dom";
import AuthContainer from "../containers/AuthContainer";
import {Button, TextField, FormControlLabel, Checkbox} from '@material-ui/core'
import axios from "axios";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import UserReducer from "../reducer/UserReducer";
import ls from 'localstorage-slim';
import { SocketContext } from "../context/SocketContext";


const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";
const MAINDB = "dao";
function Login() {
    const {addUser} = React.useContext(SocketContext)




    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');




    React.useEffect(()=>{
        const step = ls.get(REG_STEPS);
        if(step !== null){
            ls.remove(REG_STEPS)
            // navigate('/onboarding', {replace:true})
        }
    },[])

    const handleLogin = async() =>{
        // e.preventDefault()



        if(email.length > 0  && pass.length > 0){
            let id = toast.loading("Please wait...")
           await axios.post('/api/login',{
                email:email,
                password:pass
            }).then((response)=>{
                    console.log(response.data)
                    toast.update(id, {render: "Logged in", type: "success", isLoading: false, autoClose:true});

                    ls.set(MAINDB, {user:response.data},{encrypt:true})
                    ls.set(DATABASE_KEY, response.data.token,{encrypt:true});


                    // addUser(response.data.user.id, response.user.name)
                    navigate('/show-all',{replace:true})

            }).catch(e=>{
                toast.update(id, {render: "Something went wrong", type: "error", isLoading: false, autoClose:true });

                toast.error(e.response.data.message)

            })
        }else{
            toast.error("Fields can't be empty.")
        }
    }
    return (

         <AuthContainer >
             <Link to="/" className="text-red-600 text-[14px] font-bold hover:text-red-800 mb-3" >Back to Home Page</Link>
             <h1 className="text-3xl text-center font-bold">Login</h1>
                        <h1 class="text-xl text-center font-bold">
                          Gain access to explore
                        </h1>
                       

                        <div>
                            {/* <div class="floating-input">
                                <label for="email">Email or Mobile*</label>
                                <input
                                    type="text"
                                    placeholder="Email or Mobile*"
                                />
                            </div> */}

                            <TextField style={{ width:'100%', marginTop:23,  }} inputProps={{ style:{
                                 fontWeight:"bold"
                            } }} variant="outlined" label="Email*" InputLabelProps={{
                                style:{
                                     fontWeight:'bold'
                                }
                             }} value={email} onChange={(e)=>setEmail(e.target.value)}  />
                             <TextField id="outlined-basic" style={{ width:'100%', marginTop:12 }}    inputProps={{

                                 style:{
                                 fontWeight:"bold"
                            } }}   InputLabelProps={{
                                style:{
                                     fontWeight:'bold'
                                }
                             }} type='password' label="Password*" variant="outlined" value={pass} onChange={(e)=>setPass(e.target.value)} />



<div className="flex flex-row justify-between items-center mb-2">
<div class="remember-me">
                            <FormControlLabel
                    value="end"
                    control={
                        <Checkbox

                            onChange={(e) => {

                            }}
                            color="primary"
                        />
                    }
                    label={
                        <p className="font-bold text-xl" style={{ fontSize: 14, fontFamily: "Dosis" }}>
                           Remembe Me
                        </p>
                    }
                    labelPlacement="end"
                    style={{ marginTop: 0 }}
                />

                            </div>
                            <Link class="float-right text-primary font-bold text-xl" to="#">
                                Forgot your password?
                            </Link>
</div>
<Button variant="contained" className="w-full h-[48px] font-bold mb-4" color="primary" onClick={()=>{
                               handleLogin()
                            }}>Login</Button>
 <div class="flex justify-center items-center font-bold mt-2 gap-x-2">
                                <p>Don't have an Account?</p>
                                <Link to="/register" className="text-2xl text-red-500">Sign Up</Link>
                            </div>
                            <div class="divider mt-3">
                    <p>Or</p>
                </div>
                <div class="social">
                    <Link to="#" className="hover:bg-blue-900 flex flex-row font-bold rounded-md bg-blue-800 justify-center text-white items-center gap-x-2 w-full">
                        <i class="fi fi-brands-facebook text-white pt-2"></i>
                        <p className="text-white text-lg">SignIn with Facebook</p>
                    </Link>

                </div>






                        </div>
         </AuthContainer>
    );
}

export default Login;
