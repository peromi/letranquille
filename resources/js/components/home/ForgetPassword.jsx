import React from "react";
import { Link } from "react-router-dom";
import {Button, TextField, FormControlLabel, Checkbox} from '@material-ui/core'
import axios from "axios";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom' 
import ls from 'localstorage-slim'; 
import AuthContainer from "../../containers/AuthContainer";


const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";
const MAINDB = "dao";
function ForgetPassword() {
 




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
             <h1 className="text-2xl text-center font-bold tracking-tighter">Forgot Password</h1>
                        <p class="md:text-lg text-centertracking-tighter text-sm text-center">
                          Reclaim your account
                        </p>
                       

                        <div>
                            {/* <div class="floating-input">
                                <label for="email">Email or Mobile*</label>
                                <input
                                    type="text"
                                    placeholder="Email or Mobile*"
                                />
                            </div> */}

                            <TextField style={{ width:'100%', marginTop:23, marginBottom:12 }} inputProps={{ style:{
                                 fontWeight:"bold"
                            } }} variant="outlined" label="Enter Your Email Address" InputLabelProps={{
                                style:{
                                     fontWeight:'bold'
                                }
                             }} value={email} onChange={(e)=>setEmail(e.target.value)}  />
                             

  
<Button variant="contained" className="w-full h-[48px] font-bold mb-4" color="primary" onClick={()=>{
                            //    handleLogin()
                            }}>Send</Button>
  
                 






                        </div>
         </AuthContainer>
    );
}

export default ForgetPassword;