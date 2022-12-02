import React from "react";
import { data } from "../../constants";
import UserProfile from "../profile/UserProfile";
import Filteroverlay from "./Filteroverlay";
import { SocketContext } from "../../context/SocketContext";
import woman from "../../assets/images/awoman.jpg";
import aman from "../../assets/images/aman.png";
import lady from "../../assets/images/lady.jpg";
import ls from 'localstorage-slim'
import LoadingPage from "../loaders/LoadingPage";
import { useSelector } from "react-redux";


const USERDB = 'dao' 
const subscribe = "subscriptionDb"

function Mymatches({action}) {
    const [filter, setFilter] = React.useState(false);
    const [isloading, setIsLoading] = React.useState(false);

    const profile = useSelector((state)=>state.user.profile)
    const subscription = useSelector((state)=>state.user.subscription)
    const user = useSelector((state)=>state.user.subscription)
    const token = useSelector((state)=>state.user.token)

 

    const [explores, setExplores] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])
 

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
        setIsLoading(true)

        axios.get("/api/matches",{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+ token
            }
        }).then((response)=>{
            console.log(response.data.matches)
            setExplores(response.data.matches["data"]);
            setLinks(response.data.matches["links"]);
            setFrompage(response.data.matches["from"]);
            setTopage(response.data.matches["to"]);
            setTotal(response.data.matches["total"]);


            setIsLoading(false)
        }).catch((error)=>{

            console.log(error.response.data)
            // alert(error)


                // ls.remove(USERDB)
                // ls.remove(DB)

                // navigate('/login', {replace:true})

                // alert(error.response.data.message)

            setIsLoading(false)
        })
    }

    const paginate = (url) => {


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
        loadData();
 
    },[])
    if(isloading){
        return (
           <LoadingPage />
        )
    }
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
                    <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                   
                        {explores.map((userprof, index) => (
                            <UserProfile
                                profile={userprof}
                                liked={user.likes}
                                key={index}
                                reload={reload}
                            />
                        ))}
                    </div>
                ):<div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                            You do not have any match
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={profile.iam == "male"? woman:aman}
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
        </div>
    );
}

export default Mymatches;
