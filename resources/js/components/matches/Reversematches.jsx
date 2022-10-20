import React from "react";
import { data } from "../../constants";
import UserProfile from "../profile/UserProfile";
import Filteroverlay from './Filteroverlay'
import { SocketContext } from '../../context/SocketContext';
import { Link, useNavigate } from "react-router-dom";
import awoman from "../../assets/images/awoman.jpg";
import man from "../../assets/images/man.webp";
import woman from "../../assets/images/woman.webp";
import lady from "../../assets/images/lady.jpg";
import aman from "../../assets/images/aman.png";
import ls from 'localstorage-slim'



const USERDB = 'dao'
const DB = "user-m9j234u94"
const subscribe = "subscriptionDb"

function Reversematches({action}) {
    const navigate = useNavigate();
    const [subscription, setSubscription] =  React.useState(null)

    const [filter, setFilter] = React.useState(false);

    const [explores, setExplores] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])


    const [user, setUser] = React.useState('')
    const [links, setLinks] = React.useState([]);
    const [currentpage, setCurrentpage] = React.useState("");
    const [lastpage, setLastpage] = React.useState("");
    const [firstpageurl, setFirstpageurl] = React.useState("");
    const [lastpageurl, setLastpageurl] = React.useState("");
    const [frompage, setFrompage] = React.useState("");
    const [topage, setTopage] = React.useState("");
    const [nextpageurl, setNextpageurl] = React.useState("");
    const [prevpageurl, setPrevpageurl] = React.useState("");
    const [total, setTotal] = React.useState("");

    const loadData = ()=>{
        const token = ls.get(DB,{decrypt:true})
        axios.get("/api/reverse-matches",{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data.matches)
            setExplores(response.data.matches["data"]);
            setLinks(response.data.matches["links"]);
            setFrompage(response.data.matches["from"]);
            setTopage(response.data.matches["to"]);
            setTotal(response.data.matches["total"]);


            setUserlikes(response.data.user.likes)
            // setSubscription(response.data.subscription)
            // ls.set(subscribe, response.data.subscription, {encrypt: true})
        }).catch((error)=>{

            // console.log(error)
            alert(error)


                // ls.remove(USERDB)
                // ls.remove(DB)

                // navigate('/login', {replace:true})

                // alert(error.response.data.message)


        })
    }

    const paginate = (url) => {
        const token = ls.get(DB, { decrypt: true });

        axios
            .get(`${url}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setExplores(response.data.matches["data"]);
                setLinks(response.data.matches["links"]);
                setFrompage(response.data.matches["from"]);
                setTopage(response.data.matches["to"]);
                setTotal(response.data.matches["total"]);
            });
    };
    const reload = () => {
        loadData();
    };

    React.useEffect(()=>{


        let dbs = ls.get(USERDB, { decrypt: true })

        if (dbs !== null) {

             setUser(dbs.user.user)


            console.log("MATCHES",dbs.user.user.iam)

        }else{


        }
        loadData()
    },[])
    return (
        <div style={{ position: "relative" }}>
             <div
                style={{
                    background: "transparent",
                    border: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* <img src={data.group} /> */}
                {/* <div
                    style={{
                        display: "flex",
                        gap: 23,
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#C62251",
                    }}
                >
                    <i class="fi fi-rr-users-alt" style={{ fontSize: 24 }}></i>
                    <h2 className="font-bold">Matches</h2>
                </div> */}
                <div>
                    {/* <button onClick={() =>{
            setFilter(!filter)
        }} style={{background:'transparent', border:0, cursor:'pointer', display:'flex', justifyContent:'center', gap:21, alignItems:'center', fontSize:20, color:'#C62251', fontWeight:'bold' }}>
            <i class="fi fi-rr-settings-sliders" ></i>
            <p>Filter</p>
            </button> */}
                </div>
            </div>
            {/* <p style={{ fontSize: 18, marginTop: 12, fontWeight: "bold" }}>
                These are the People who have similar personalities
            </p> */}

            {/* Matched Profiles */}
            <div className="md:w-full mx-auto  h-screen p-12 mb-12">
                {explores.length > 0 && <div className="flex flex-row justify-between items-center mb-4">
                    <div>
                        {links.map((link) => {
                            if(link.label === "&laquo; Previous"){
                               return (<button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.url == null
                                        ? " text-slate-300 font-bold mx-2"
                                        : "font-bold mx-2"
                                    }
                                >
                                    Previous
                                </button>)
                            }else if(link.label === "Next &raquo;"){
                                return(<button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.url == null
                                        ? "text-xl text-slate-300 font-bold mx-2"
                                        : "font-bold mx-2"
                                    }
                                >
                                    Next
                                </button>)
                            }else{ return (
                                <button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.active
                                            ? "text-xl text-red-600 font-bold mx-2"
                                            : "font-bold mx-2"
                                    }
                                >
                                    {link.label}
                                </button>
                            );}

                        })}
                    </div>
                    <div className="flex flex-row justify-end items-center font-bold">
                        <p>from:{" "}{frompage}</p>
                        <p className="mx-2">-</p>
                        <p>{topage}</p>
                        <p className="ml-4 text-red-600">Total: {total}</p>
                    </div>
                </div>}

                {/* <Match /> */}

                {explores.length > 0 ? (
                    <div className="grid grid-cols-5 gap-4 pt-2">
                        {explores.map((profile, index) => (
                            <UserProfile
                                profile={profile}
                                liked={userlikes}
                                key={index}
                                reload={reload}
                            />
                        ))}
                    </div>
                ):<div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                            You do not have any reverse match
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={user.iam == "male"? woman:aman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
                        <p>
                            Click on the <strong>Heart</strong> to like someone
                        </p>

                        <p>
                            Make the first move! Like someone who fits your
                            match criteria. It's FREE!
                        </p>


                    </div>}

            {/* Overlay Filter */}

            {/* {filter && <Filteroverlay handleclose={()=>{
                    setFilter(!filter);
                }} />} */}
        </div>

    {(subscription !== null && subscription.plan_type !== "gold") ||
                (subscription !== null &&
                    subscription.plan_type !== "platinum" && (
                        <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900/75 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-[40%]  flex flex-col justify-center border-1 divide-red-600 bg-white drop-shadow-xl items-center">
                        <div className="w-full flex justify-end   pr-1">
                            <button
                                onClick={action}
                                className="rotate-45 font-bold text-2xl   text-red-600 float-right"
                            >
                                +
                            </button>
                        </div>
                        <div className="w-full h-full px-3 flex flex-col items-center">
                            <h1 className="text-2xl font-bold text-center mb-6">
                                Upgrade Your Account
                            </h1>
                            <p className="text-lg">
                                <span className="capitalize font-bold">{user.name}</span> you don't have
                                access to <span className="font-bold">Mutual Matches</span>
                            </p>

                            <p>
                                Simply upgrade to boost your chances with "Cupid
                                Matching" for serious daters!
                            </p>

                            <h1 className="font-bold text-lg mt-8">
                                Mutual Matches
                            </h1>
                            <p>You both match each other's criteria</p>

                            <button className="px-12 p-2 bg-red-800 text-white mt-4 mb-3">Upgrade to Platinum</button>
                        </div>
                    </div>
                </div>
                    ))}

            {subscription === null && (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900/75 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-[40%]  flex flex-col justify-center border-1 divide-red-600 bg-white drop-shadow-xl items-center">
                        <div className="w-full flex justify-end   pr-1">
                            <button
                                onClick={action}
                                className="rotate-45 font-bold text-2xl   text-red-600 float-right"
                            >
                                +
                            </button>
                        </div>
                        <div className="w-full h-full px-3 flex flex-col items-center">
                            <h1 className="text-2xl font-bold text-center mb-6">
                                Upgrade Your Account
                            </h1>
                            <p className="text-lg">
                                <span className="capitalize font-bold">{user.name}</span> you don't have
                                access to <span className="font-bold">Reverse Mutual Matches</span>
                            </p>

                            <p>
                                Simply upgrade to boost your chances with "Cupid
                                Matching" for serious daters!
                            </p>

                            <h1 className="font-bold text-lg mt-8">
                                Reverse Mutual Matches
                            </h1>
                            <p>You match their criteria</p>

                            <div className="flex flex-row gap-3 mt-4 justify-center items-center">
                            <div className="flex flex-col justify-center items-center font-bold">
                                <img src={user.iam == "male"? awoman:aman} width="90"  className="rounded-full" />
                                <p>Them</p>
                                </div>
                            <div className="flex flex-col justify-center items-center">
                                    <i className="fi-sr-arrow-left text-2xl"></i>
                                    <i className="fi-sr-arrow-right text-2xl"></i>
                                </div>
                                <div  className="flex flex-col justify-center items-center font-bold">
                                <img src={user.iam == "male"? aman:awoman} width="90" className="rounded-full" />
                                <p>You</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <i className="fi-sr-arrow-right text-2xl"></i>
                                    <i className="fi-sr-arrow-left text-2xl"></i>
                                </div>
                                <div className="flex flex-col justify-center items-center font-bold">
                                <img src={user.iam == "male"? awoman:aman} width="90"  className="rounded-full" />
                                <p>Them</p>
                                </div>
                            </div>

                            <Link to="/manage-subscription" className="px-12 p-2 bg-red-800 text-white mt-4 mb-3">Upgrade to Platinum</Link>
                        </div>
                    </div>
                </div>
            )}

   </div>
    );
}

export default Reversematches;
