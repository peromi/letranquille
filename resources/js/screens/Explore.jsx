import React from "react";
import ActivityProfile from "../components/activities/ActivityProfile";
import { data } from "../constants";
import MainContainer from "../containers/MainContainer";
import Navigation from "../navigation/Navigation";
import ls from "localstorage-slim";
import axios from "axios";
import UserProfile from "../components/profile/UserProfile";
import { forEach } from "lodash";
import country from "../assets/json/country.json";
import woman from "../assets/images/awoman.jpg";
import man from "../assets/images/aman.png";
import lady from "../assets/images/lady.jpg";
import { Link } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import Userplaceholder from "../components/loaders/Userplaceholder";
import LoadingPage from "../components/loaders/LoadingPage";

const DB = "user-m9j234u94";
const USERDB = "dao";

function Explore() {
    const {  subscription, setSubscription} = React.useContext(SocketContext)

    const [loading, setLoading] = React.useState(true)
    const [explores, setExplores] = React.useState([]);
    const [userlikes, setUserlikes] = React.useState([]);
    const [user, setUser] = React.useState(null);
    const [active, setActive] = React.useState({});

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

    // Search data
    const [iam, setIam] = React.useState("");
    const [seeking, setSeeking] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [ageMin, setAgeMin] = React.useState(0);
    const [ageMax, setAgeMax] = React.useState(0);
    const [code, setCode] = React.useState(0);

    const age = [];

    for (var i = 18; i < 100; i++) {
        age.push(i);
    }

    const loadData = () => {
        const token = ls.get(DB, { decrypt: true });

        setLoading(true)
        axios
            .get("/api/explore", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setExplores(response.data.explores["data"]);
                setLinks(response.data.explores["links"]);
                setFrompage(response.data.explores["from"]);
                setTopage(response.data.explores["to"]);
                setTotal(response.data.explores["total"]);

                console.log(response.data.user);

                setLoading(false)
                // setUser(response.data.user);
            });
    };

    const searchUser = () => {
        const token = ls.get(DB, { decrypt: true });

        setLoading(true)
        axios.post('/api/explore-search',{
            from:code,
            code:from,
            age_min:ageMin,
            age_max:ageMax,
            lookingfor:seeking
        }, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((res)=>{
            console.log(res.data)
            setExplores(res.data.explores["data"]);
                setLinks(res.data.explores["links"]);
                setFrompage(res.data.explores["from"]);
                setTopage(res.data.explores["to"]);
                setTotal(res.data.explores["total"]);

                setLoading(false)
        })
    }

    const paginate = (url) => {
        const token = ls.get(DB, { decrypt: true });

        setLoading(true)
        axios
            .get(`${url}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setExplores(response.data.explores["data"]);
                setLinks(response.data.explores["links"]);
                setFrompage(response.data.explores["from"]);
                setTopage(response.data.explores["to"]);
                setTotal(response.data.explores["total"]);
                setLoading(false)
            });
    };
    const reload = () => {
        loadData();
    };
    React.useEffect(() => {
        for (var i = 18; i < 100; i++) {
            age.push(i);
        }

        let db = ls.get(USERDB, { decrypt: true })

        if (db !== null) {

             setUser(db.user.user)


             setIam(db.user.user.iam);
             setSeeking(db.user.user.lookingfor);
             setFrom(db.user.user.country);
             setAgeMin(db.user.user.age_min);
             setAgeMax(db.user.user.age_max);


        }else{


        }
        loadData();

    }, []);

    if(loading ){
        return (
            <LoadingPage />
        )
    }
    return (
        <MainContainer select="explore">
            <div className="flex md:flex-row flex-col w-full bg-red-600 text-white justify-around p-2 items-center gap-4">
                <div className="flex-1 w-full">
                    <p>I'm a </p>
                    <select
                        className="ring-1 p-2 ring-slate-200 bg-white text-black w-full"
                        value={iam}
                        onChange={(e) => setIam(e.target.value)}
                    >
                        <option
                            selected={iam === "male" ? true : false}
                        >
                            male
                        </option>

                        <option
                            selected={iam === "female" ? true : false}
                        >
                            female
                        </option>
                    </select>
                </div>
                <div className="flex-1 w-full">
                    <p>Seeking a </p>
                    <select
                        className="ring-1 p-2   bg-white text-black w-full"
                        value={seeking}
                        onChange={(e) => setSeeking(e.target.value)}
                    >
                        <option
                            selected={
                                seeking === "any" ? true : false
                            }
                        >
                            any
                        </option>
                        <option
                            selected={
                                seeking === "male" ? true : false
                            }
                        >
                            male
                        </option>

                        <option
                            selected={
                                seeking === "female" ? true : false
                            }
                        >
                            female
                        </option>
                    </select>
                </div>
                <div className="flex-1 w-full">
                    <p>From  </p>

                    <select
                        className="ring-1 p-2   bg-white text-black w-full"
                        value={from}
                        onChange={(e) => {
                            setFrom(e.target.value)
                            console.log(e.target.options[e.target.selectedIndex].text)
                            setCode(e.target.options[e.target.selectedIndex].text)
                        }}


                    >
                        {/* <option  selected={
                                    from.trim().localeCompare("any") == 0 ? true:false
                                }>any</option> */}
                        {country.map((c, index)=>{
                            if(from.trim().localeCompare(c.name) === 0){
                                return  <option
                                key={index}

                                value={c.code}


                                selected={
                                   true
                                }
                            >
                                {c.name}
                            </option>
                            }else{
                                return <option
                                key={index}

                                value={c.code}
                            >
                                {c.name}
                            </option>
                            }
                        })}
                    </select>

                </div>
                <div className="flex-1 w-full">
                    <p>Age</p>
                    <div className="flex md:flex-row flex-col gap-4">
                        <select
                            className="ring-1 p-2  bg-white md:w-1/2 w-full text-black"
                            value={ageMin}
                            onChange={(e) => setAgeMin(e.target.value)}
                        >
                            {age.map((a, index) => (
                                <option
                                    key={index}
                                    selected={
                                        ageMin === a ? true : false
                                    }
                                >
                                    {a}
                                </option>
                            ))}
                        </select>
                        <select
                            className="ring-1 p-2  bg-white text-black md:w-1/2 w-full"
                            value={ageMax}
                            onChange={(e) => setAgeMax(e.target.value)}
                        >
                            {age.map((a, index) => (
                                <option
                                    key={index}
                                    selected={
                                        ageMax === a ? true : false
                                    }
                                >
                                    {a}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <button onClick={searchUser} className="bg-yellow-400 justify-center items-center p-2 w-full rounded-full font-bold hover:bg-white">
                        Search
                    </button>
                </div>
            </div>

            
            <div className="md:w-full mx-auto  h-screen p-12 mb-5">
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
                ) : (
                    <div className="flex flex-col justify-center w-full items-center block">
                        <h1 className="font-bold text-2xl mt-2">
                            You do not have any match
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={active.iam == "male"? woman:man}
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
                    </div>
                )}
            </div>
        </MainContainer>
    );
}

export default Explore;
