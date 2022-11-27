import React from "react";
import AuthContainer from "../containers/AuthContainer";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import axios from "axios";
import ls from "localstorage-slim"; 
 

const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";

const USERPASS = "userpass";
const USERDB = "dao";
const CouponRegistration =() => {
    const navigate = useNavigate();
    const [coupon, setCoupon] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(""); 
    const [iam, setIam] = React.useState("")
    const [looking, setLooking] = React.useState("")
    const [name, setName] = React.useState("")
    const [age, setAge] = React.useState(18)

    let ageArray = [];

    for(let i = 18; i < 90; i++) {
        ageArray.push(i)
    }

    React.useEffect(() => {
        
    }, []);

    const handleRegister = () => {
        if (email.length > 0 && password.length > 0 && name.length > 3 && iam.length > 0 && looking.length > 0 ) {
            
                axios
                    .post("/api/promo", {
                      coupon:coupon,
                        email: email,
                        password: password,
                        iam, looking, name, age 
                    })
                    .then((res) => {
                      

                      console.log(res.data);
                        if(res.status == 200){
                           

                          if(res.data.message !== undefined){
                            toast.error(res.data.message)
                          }else{
                            ls.set(
                              USERDB,
                              { user: res.data.user, token: res.data.token, profile: res.data.profile, preference: res.data.preference},
                              { encrypt: true }
                          );
                           
                           
                          navigate("/profile-update", { replace: true });
                          }
                        } 
                    
                       
                    })
                    .catch((e) => {
                     
                        toast.error(e.response.data.message)
                    });
            
        } else {
            toast.warning("Fields can't be empty.");
        }
    };
    return (
        <AuthContainer>
            <nav>
            <Link
                    to="/"
                    className="text-red-600 text-[14px] font-bold hover:text-red-800 mb-3"
                >
                    Back to Home Page
                </Link>
            </nav>
            <div className="w-full">
               

               <div className="flex flex-row mt-2">
               <div> 
                    <p className="font-bold">Enter Promo Coupon Code</p>
                    <input required type="text" placeholder="Coupon Code" value={coupon} onChange={(e)=>setCoupon(e.target.value)} className="bg-zinc-50 ring-1 ring-slate-900/5 p-2 w-full outline-0 " />
                    <p className="font-bold">Your Name</p>
                    <input required type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-zinc-50 ring-1 ring-slate-900/5 p-2 w-full outline-0 " />

                    <div className="flex flex-row mt-[4px] mb-[14px] gap-x-4">



                    <div>
                    <p className="font-bold">I'm a {iam}</p>
                        <div className="flex flex-row  p-2 ring-1 ring-slate-900/5 bg-zinc-50 gap-2">
                        <div className="flex flex-row text-md font-bold text-md">
                                <input type="radio" name="sex" id="sex-male" onChange={(e)=>{
                                    setIam("male")
                                }} />{" "}
                                <label for="sex-male">Male</label>
                            </div>
                            <div className="flex flex-row font-bold text-md">
                                <input type="radio" name="sex" id="sex-female" onChange={(e)=>{
                                    setIam("female")
                                }} />{" "}
                                <label for="sex-female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div >
                    <p className="font-bold">I'm looking for {looking}</p>
                        <div className="flex flex-row  p-2 ring-1 ring-slate-900/5 bg-zinc-50 gap-2">
                        <div className="flex flex-row text-md font-bold text-md">
                                <input type="radio" name="female" id="look-male" onChange={(e)=>{
                                    setLooking("male")
                                 
                                }} />{" "}
                                <label for="look-male">Male</label>
                            </div>
                            <div className="flex flex-row text-md font-bold text-md">
                                <input type="radio" name="female" id="look-female" onChange={(e)=>{
                                    setLooking("female")
                              
                                }} />{" "}
                                <label for="look-female">Female</label>
                            </div>
                        </div>
                    </div>

                   <div>
                   <p className="font-bold">Age</p>
             
                        
             <select value={age} onChange={(e)=>setAge(e.target.value)} className="flex flex-row  p-3 ring-1 ring-slate-900/7 bg-zinc-50 gap-2 font-bold">
                 <option value="">Select Your Age</option>
                 {ageArray.map((age, index) =><option key={index}>{age}</option>)}
             </select>
                   </div>
                    </div>


                    <p className="mt-[14px] font-bold">Email Address</p>
                    <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email@example.com" autoComplete="false" className="ring-1 ring-slate-900/5 p-2 w-full outline-0 bg-zinc-50" />


                    <p  className="mt-[14px] font-bold">Password</p>
                    <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="ring-1 ring-slate-900/5 p-2 w-full outline-0 " />


                    <button onClick={()=>{handleRegister()}}
                            className="hover:bg-blue-900 mt-3 p-3 flex flex-row font-bold rounded-md bg-red-800 justify-center text-white items-center gap-x-2 w-full"
                        >
                             
                            <p className="text-white text-lg">
                                Start Your Dating Journey
                            </p>
                        </button>
                    {/* <TextField
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id="c"
                        style={{
                            width: "100%",
                            marginTop: 12,
                            marginBottom: 24,
                        }}
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
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        className=""
                        style={{
                            marginTop: 21,
                            height: 48,
                            width: "100%",
                            fontWeight: "bold",
                        }}
                        color="primary"
                        onClick={() => {
                            handleRegister();
                        }}
                    >
                        Sign Up
                    </Button> */}
                    <div class="flex justify-center items-center font-bold mt-2   gap-x-2">
                        <p>I'm already a member</p>
                        <Link to="/login" className="text-2xl text-red-500">
                            Login
                        </Link>
                    </div>
                     
                </div>

                <div className="hidden  md:flex flex-col flex-1 ml-12">
                    <h1 className="font-['Inter-extrabold']  text-5xl mb-2" style={{letterSpacing:-3}}>You Are Moments Away From Meeting Singles Like These!</h1>
                   <div className="flex flex-row flex-wrap">
                   {[1,2,3,4,5,6,7,8].map((item, index)=><div style={{backgroundImage:`url(../images/avatar/avatar${item}.jpg)`,backgroundSize:'cover', width:180, height:180}} />)}
                   </div>
                </div>
               </div>
            </div>
        </AuthContainer>
    );
}

export default CouponRegistration;
