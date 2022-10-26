import React from "react";
import AuthContainer from "../containers/AuthContainer";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { toast } from 'react-toastify';
import axios from "axios";
import ls from 'localstorage-slim'


const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";

const USERPASS = "userpass";

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirm, setConfirm] = React.useState('')

    React.useEffect(()=>{
        const step = JSON.parse(localStorage.getItem(REG_STEPS));
        if(step !== null){
            navigate('/onboarding', {replace:true})
        }
    },[])

    const handleRegister =  ()=>{
        if(email.length > 0 && password.length > 0 && confirm.length > 0){
            if(confirm.match(password))
            {
                axios.post('/api/new_register',{
                    email:email,
                    password:password,
                    password_confirmation:confirm
                }).then((response)=>{
                    // if(response.status == 422){
                    //     toast.error(response.data.message);
                    // }else{
                    //     const message = JSON.parse(response.data)
                    //     console.log(message)
                    //     toast.success(`${response.data.message}`)
                    // }
                    ls.set(USERPASS, {'email':email, 'password':password}, {encrypt:true})
                    ls.set(DATABASE_KEY, response.data.token, {encrypt:true});
                    ls.set(REG_STEPS, {'step':1, 'title':'personal'}, {encrypt:true});
                    navigate('/onboarding', {replace:true})
                }).catch(e=>{
                    toast.error(e.response.data.message)
                })
            }else{

                toast.error("Your confirmation did not match.");
            }
        }else{

            toast.warning("Fields can't be empty.")
        }
    }
    return (
        <AuthContainer>
            <Link to="/" className="text-red-600 text-[14px] font-bold hover:text-red-800 mb-3" >Back to Home Page</Link>

            <h1 className="text-3xl text-center font-bold">Welcome</h1>
                        <h1 class="text-xl text-center font-bold">
                            to start a new Journey!
                        </h1>
                        <h1 class="text-xl text-center font-bold text-red-500">
                            Sign Up
                        </h1>

            <form action="#">
                {/* <div class="floating-input">
                <label for="email">Email or Mobile*</label>
                <input type="text" placeholder="Email or Mobile*" />
            </div> */}

                <TextField
                    style={{
                        width: "100%",
                        marginTop: 23,

                    }}
                    inputProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    variant="outlined"
                    label="Email*"
                    InputLabelProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField

                    id="outlined-basic"
                    style={{ width: "100%", marginTop: 12 }}
                    inputProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    InputLabelProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    type="password"
                    label="Password*"
                    variant="outlined"
                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}
                />
                <TextField
                    id="c"
                    style={{ width: "100%", marginTop: 12, marginBottom:24 }}
                    inputProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    InputLabelProps={{
                        style: {

                            fontWeight: "bold",
                        },
                    }}
                    type="password"
                    label="Confirm Password*"
                    variant="outlined"
                    value={confirm}

                    onChange={(e)=>setConfirm(e.target.value)}
                />
                 <Button variant="contained" className="" style={{ marginTop:21, height:48, width:'100%',   fontWeight:'bold' }} color="primary" onClick={()=>{
                    handleRegister();
                }}>Sign Up</Button>
               <div class="flex justify-center items-center font-bold mt-2 mb-5 gap-x-2">
                                <p>Already have an Account?</p>
                                <Link to="/login" className="text-2xl text-red-500">Login</Link>
                            </div>
                <div class="divider">
                    <p>Or</p>
                </div>
                <div class="social">
                    <Link to="#" className="hover:bg-blue-900 flex flex-row font-bold rounded-md bg-blue-800 justify-center text-white items-center gap-x-2 w-full">
                        <i class="fi fi-brands-facebook text-white pt-2"></i>
                        <p className="text-white text-lg">SignUp with Facebook</p>
                    </Link>

                </div>


            </form>
        </AuthContainer>
    );
}

export default Register;
