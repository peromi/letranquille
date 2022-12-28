import { Divider } from "@material-ui/core";
import React from "react";
import "../../../css/userprofile.scss";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../constants";
// import "animate.css";
import { SocketContext } from "../../context/SocketContext";
import ls from "localstorage-slim";
import axios from "axios";
import { toast } from "react-toastify";
import country from '../../assets/json/country.json'
import states from '../../assets/json/states.json'
import cities from '../../assets/json/cities.json'
import { useSelector } from "react-redux";


const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";

function UserProfile({ profile, liked, reload }) {
    const userpreferences = useSelector((state)=>state.user.preference)
    const userprofile = useSelector((state)=>state.user.profile)
    const uuser = useSelector((state)=>state.user.user)
    const subscription = useSelector((state)=>state.user.subscription)
    const token = useSelector((state)=>state.user.token) 
    const { likeprofile } = React.useContext(SocketContext);
    const navigate = useNavigate();

    const {preferences} = profile
    let check_liked = uuser.likes.find((user) => user.profile_id === profile.user_id);

    const [nation, setNation] = React.useState('');

    const loadProfile = () => {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {

            likeprofile({
                to: profile.id,
                message: "liked your profile",
                name: db.profile.name,
            });
        } else {
        }
    };

    const handleLiked = () => {
       
        axios.post("/api/likes",
                {
                    profile: profile.id,
                },
                {
                    headers: {
                        'Accept': "application/json",
                        'Authorization': "Bearer " + token,
                    },
                }
            )
            .then((response) => {

                toast.success(response.data.message);
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            });
    };

    const handleUnlike = () => {
       
        axios.delete("/api/likes-delete/" + check_liked.id, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                toast.success(response.data.message);
            })
            .catch((error) => {
                alert(error);
            });
    };

    React.useEffect(()=>{

        let i = setTimeout(()=>{
            let index = cities.findIndex((c)=>c['name'] === profile.city);

        if(index !== undefined){

            if(cities[index] !== undefined){
                if(cities[index].name === profile.city && cities[index].country_code === profile.country || cities[index].name === profile.city && cities[index].country_name === profile.country){
                    setNation(cities[index].country_code)
                }else{

                    setNation("OO")

                }

            }else{
                setNation("any")

            }
        }
        },1000)


        return ()=>{
            clearTimeout(i)
        }
    },[])
    return (
        <div
            className="tracking-tighter ring-1 ring-slate-900/5 hover:ring-1 hover:ring-red-600 hover:bg-red-500 hover:text-white duration-700 ease-in-out hover:drop-shadow-2xl rounded-xl bg-white animate__animated animate__slideInUp"

        >
            <div className="flex flex-col p-2">
                <div className="bg-white relative overflow-hidden rounded-xl">

                    <div className="w-full h-[200px]" style={{backgroundImage:`url('/storage/avatar/${profile.first_photo}')`, backgroundSize:'cover', backgroundPosition:'top'}}>

                    </div>

                    <div className="absolute bottom-0 right-0 left-0 " style={{ background:'linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1)' }}>

                        <h2 className="capitalize flex justify-between p-1 text-white">
                            {profile.name},{" "}
                            <span>
                                {Math.abs(
                                    new Date().getFullYear() -
                                        new Date(profile.birthday).getFullYear()
                                )}
                            </span>
                        </h2>
                        <div className="text-white flex items-center gap-x-3 ">
                            <i class="fi fi-sr-marker ml-2"></i>
                            <h4 className="text-[12px]">
                                {profile.live_in}
                            </h4>
                            {/* <p className="text-sm">5 miles away</p> */}
                        </div>
                        {/* <p className="bg-red-600 text-sm p-1 font-bold text-white text-center w-full">85% Match</p> */}
                    </div>
                </div>
                <div
    className="flex justify-between items-center"
                >
                    <p className=" text-[15px] capitalize">
                        Seeking: {profile.lookingfor} {preferences.age_min} -{" "}
                        {preferences.age_max}  
                    </p>
                    <i
                        class={profile.status === "online"?"fa-solid fa-circle text-green-500":"fa-solid fa-circle"}
                        style={{ fontSize: 8,  }}
                    ></i>
                </div>
                {/* BIO */}
                <p  className="mb-1">
                    {profile.bio}
                </p>

<div style={{ height:1, width:'100%', background:"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)" }}></div>

                <div
                    className="flex justify-between mt-2 "
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 23,
                        }}
                    >
                        {check_liked !== undefined ? (
                            <button
                                style={{
                                    border: 0,
                                    background: "transparent",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    handleUnlike()
                                    reload()
                                }}
                            >
                                <i
                                    class="fi fi-sr-heart text-md text-red-600"
                            
                                ></i>
                            </button>
                        ) : (
                            <button
                                style={{
                                    border: 0,
                                    background: "transparent",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    loadProfile();
                                    handleLiked();
                                    reload()
                                }}
                            >
                                <i
                                    class="fi fi-rr-heart text-md"
                          
                                ></i>
                            </button>
                        )}
                        <Link to={`/messages-single/${profile.user_id}`}>
                            <i
                                class="fi fi-rr-paper-plane text-md"
                           
                            ></i>
                        </Link>
                    </div>
                    <div className="flex items-center px-3 ml-8 rounded-full ring-1 ring-slate-900/5 gap-x-2 bg-zinc-100 hover:bg-red-600 hover:text-white p-2">
                        
                        <Link to={`/user-profile/${profile.user_id}`} className=""><small>Profile</small></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

const styles = {
    icon: {
        fontSize: 21,
    },
    buttonActive: { backgroundColor: "#FFF0F3" },
    button: {
        color: "#C62251",
        background: "#f4f4f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 34,
    },
};
