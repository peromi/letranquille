import React from 'react'  
import MainContainer from '../containers/MainContainer'; 
import ls from 'localstorage-slim'
import axios from 'axios';
import UserProfile from '../components/profile/UserProfile'; 
import { Link, useNavigate } from 'react-router-dom'
import cities from '../assets/json/cities.json'
import  country  from '../assets/json/country.json';
import  states  from '../assets/json/states.json';
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";
import man from "../assets/images/aman.png";


import {SocketContext} from '../context/SocketContext'
import LoadingPage from '../components/loaders/LoadingPage';
 
import { useSelector, useDispatch } from 'react-redux';

const DB = "user-m9j234u94"
const USERDB = "dao"

 
function ShowAll() {
 
 
    const preference = useSelector((state)=>state.user.preference)
    const profile = useSelector((state)=>state.user.profile)
    const token = useSelector((state)=>state.user.token)
     
 

    const navigate = useNavigate()
    const [pageIndex, setPageIndex] = React.useState(0);

   

    const [seeking, setSeeking] = React.useState(profile.lookingfor);
    const [ageMin, setAgeMin] = React.useState("");
    const [ageMax, setAgeMax] = React.useState("");
    const [liveInCountry, setLiveInCountry] = React.useState("any");
    const [liveInState, setLiveInState] = React.useState("any");
    const [liveInCity, setLiveInCity] = React.useState("any");
    const [withIn, setWithIn] = React.useState("");

    const [isLoading, setIsLoading] = React.useState(true)
    const [explores, setExplores] = React.useState([])
    const [preferences,setPreferences] = React.useState("")
    const [searchresult, setSearchresult] = React.useState([])
    const [userlikes, setUserlikes] = React.useState([])

    const [statesearch, setStatesearch] = React.useState([])
    const [citysearch, setCitysearch] = React.useState([])

    const [countrycode, setCountrycode] = React.useState({})
    const [statecode, setStatecode] = React.useState({})

    const [user, setUser] = React.useState({})

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



      const age = []

       for(var i = 18; i < 100; i++) {
        age.push(i)
       }

       const loadData = ()=>{
        setIsLoading(true)
        

        axios.get('/api/get-all-users',{

                headers:{
                    'Accept':'application/json',
                    'Authorization':'Bearer '+token
                }

        }).then((response)=>{
            console.log(response.data)

           

            setExplores(response.data.allusers["data"]);
            setLinks(response.data.allusers["links"]);
            setFrompage(response.data.allusers["from"]);
            setTopage(response.data.allusers["to"]);
            setTotal(response.data.allusers["total"]);

            setPreferences(response.data.preference);

            let pref = response.data.preference
          
            setSeeking(pref.seekingfor)
            setAgeMin(pref.age_min)
            setAgeMax(pref.age_max)
            setLiveInCountry(pref.live_in.split(',')[0])
            setLiveInState(pref.live_in.split(',')[1])
            setLiveInCity(pref.live_in.split(',')[2])
      

            setIsLoading(false)
        }).catch((e)=>{
            navigate("/profile-update",{replace: false})
            setIsLoading(false)
        })
    }


    const searchUser = () => {
      

        setIsLoading(true)
        axios.post('/api/search-users',{
            seeking:seeking,
            country:liveInCountry,
            state:liveInState,
            city:liveInCity,
            age_min:ageMin,
            age_max:ageMax 
        }, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            console.log(response.data)
            setExplores(response.data.allusers["data"]);
            setLinks(response.data.allusers["links"]);
            setFrompage(response.data.allusers["from"]);
            setTopage(response.data.allusers["to"]);
            setTotal(response.data.allusers["total"]);

            setPreferences(response.data.preference);

            let pref = response.data.preference
          
            setSeeking(pref.seekingfor)
            setAgeMin(pref.age_min)
            setAgeMax(pref.age_max)
            setLiveInCountry(pref.live_in.split(',')[0])
            setLiveInState(pref.live_in.split(',')[1])
            setLiveInCity(pref.live_in.split(',')[2])
      

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
                setExplores(response.data.allusers["data"]);
                setLinks(response.data.allusers["links"]);
                setFrompage(response.data.allusers["from"]);
                setTopage(response.data.allusers["to"]);
                setTotal(response.data.allusers["total"]);

          
            });
    };
const  reload = () => {
    loadData()
}
React.useEffect(()=>{
   
       
       if(token === null){
           
          window.location.href = "/"
       }

      
        loadData()
 


    // let result = explores.filter((c)=>c.country)
},[])

if(isLoading){
    return <LoadingPage />
}
  return (
   <MainContainer select="show-all">

{/* <p>{user.name}</p> */}
<div className="flex flex-row p-2 bg-red-900">
                <div className="flex gap-x-4">
                    <div className="bg-slate-400 rounded-full overflow-clip mr-2">
                        {profile.first_photo !== null ? (
                            <img
                                src={`/storage/avatar/${profile.first_photo}`}
                                width={120}
                            />
                        ) : (
                            <img src={noimage} width={45} />
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-md text-white tracking-tighter">Hi {profile.name}</p>
                        <Link to="/preference-settings" className="p-2 bg-black text-white">Next step: Complete your preferences</Link>
                    </div>
                </div>
                <div className="flex-1 flex gap-x-20 flex-row justify-end items-center">
                    <a className="  border-8 ring-yellow-500 rounded-full p-6 text-white ">
                    <i className="fi fi-rr-user text-2xl"></i>
                    <p className="text-xs">32%</p>
                    </a>
                    <a className=" relative border-8 ring-yellow-500 rounded-full p-6 text-white  ">
                    <i className="fi fi-rr-comment-alt text-2xl"></i>
                    <p className="text-xs">34</p>
                    </a>
                    <a className=" relative border-8 ring-yellow-500 rounded-full p-6 text-white  ">
                    <i className="fi fi-rr-heart text-2xl"></i>
                    <p className="text-xs text-center">9</p>
                    </a>
                    <a className=" relative border-8 ring-yellow-500 rounded-full p-6 text-white  ">
                    <i className="fi fi-rr-eye text-2xl"></i>
                    <p className="text-xs text-center">29</p>
                    </a>
                    <a className=" relative border-8 ring-yellow-500 rounded-full p-6 text-white font-black text-xl">
                    <i className="fi fi-rr-star text-2xl"></i>
                    <p className="text-xs text-center">0</p>
                    </a>
                     
                </div>
            </div>
<div className='flex md:flex-row flex-col w-full bg-red-600 justify-around p-2 items-center gap-4'>

    <div className='flex-1 w-full'>
        <p className="text-white">Seeking a</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white w-full' value={seeking} onChange={(e)=>setSeeking(e.target.value)}>
            <option>any</option>
            <option>male</option>

            <option>female</option>
        </select>
    </div>
    <div className='flex-1 w-full '>
        <p className="text-white">Age</p>
        <div className='flex md:flex-row flex-col gap-4'>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white md:w-1/2 w-full' value={ageMin} onChange={(e)=>setAgeMin(e.target.value)}>

            {age.map((a, index)=><option key={index} >{a}</option>)}
        </select>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white md:w-1/2 w-full' value={ageMax} onChange={(e)=>setAgeMax(e.target.value)}>
            {age.map((a, index)=><option key={index} >{a}</option>)}
        </select>
        </div>
    </div>
    <div className='flex-1 w-full  '>
        <p className="text-white">Country</p>
       <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white w-full' value={countrycode} onChange={(e)=>{
        let result = states.filter((s)=>s.country_code  == e.target.value)
        setStatesearch(result)
        console.log(result.length)
        setCountrycode(e.target.value)
        setLiveInCountry(e.target.options[e.target.selectedIndex].text)
       }}>

                <option>Any</option>
            {country.map((c,index)=><option key={index}   value={c.code}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full   '>
        <p className="text-white">State/Province</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white w-full' value={statecode} onChange={(e)=>{
            let result = cities.filter((c)=>c.state_code == e.target.value && c.country_code == countrycode)
            console.log(result.length)
            setStatecode(e.target.value)
            setCitysearch(result)
            setLiveInState(e.target.options[e.target.selectedIndex].text)
        }}>

<option>Any</option>
            {statesearch.map((s, index)=><option key={index}   value={s.state_code} >{s.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p className="text-white">City</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white w-full' value={liveInCity} onChange={(e)=>{
            console.log(e.target.value)
            setLiveInCity(e.target.value)}}>
        <option>Any</option>
            {citysearch.map((c,index)=><option key={index} >{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p className="text-white">Within</p>
        <input className='ring-1 p-2 ring-slate-900/5 outline-0 bg-white w-full' type="text" placeholder='kms' />
    </div>

    <div className='flex-1 w-full'>

        <button onClick={searchUser} className='bg-black text-white justify-center items-center p-2 w-full rounded-full font-bold hover:bg-white hover:text-black'>Search</button>
    </div>
</div>
<div className='md:w-full mx-auto  h-screen p-12'  >

{/* <Match /> */}

{isLoading && <div className=" bg-black rounded-full self-center w-fit p-3">
    <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
 
    
    </div>}
{explores.length > 0 && <div className="flex flex-row justify-between tracking-tighter items-center mb-4">
                    <div>
                        {links.map((link) => {
                            if(link.label === "&laquo; Previous"){
                               return (<button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.url == null
                                        ? " text-slate-300   mx-2"
                                        : "  mx-2"
                                    }
                                >
                                    Previous
                                </button>)
                            }else if(link.label === "Next &raquo;"){
                                return(<button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.url == null
                                        ? "text-xl text-slate-300   mx-2"
                                        : "  mx-2"
                                    }
                                >
                                    Next
                                </button>)
                            }else{ return (
                                <button
                                    onClick={() => paginate(link.url)}
                                    className={
                                        link.active
                                            ? "text-xl text-red-600  mx-2"
                                            : " mx-2"
                                    }
                                >
                                    {link.label}
                                </button>
                            );}

                        })}
                    </div>
                    <div className="flex flex-row justify-end items-center  ">
                        <p>from:{" "}{frompage}</p>
                        <p className="mx-2">-</p>
                        <p>{topage}</p>
                        <p className="ml-4 text-red-600">Total: {total}</p>
                    </div>
                </div>}

                {/* flex flex-row flex-wrap  md:justify-between justify-center */}
{explores.length > 0 ? <div className=" pt-2 grid grid-col-1 md:grid-cols-4 lg:grid-cols-6 gap-4">

    {explores.map((profile, index) => (
        <UserProfile
            profile={profile}
            liked={userlikes}
            key={index}
            reload={reload}
        />)
        )}
</div>:<div>
     {!isLoading ?<div className="flex flex-col justify-center w-full items-center">
            <h1 className="font-bold text-2xl mt-2 tracking-tighter">
                You do not have any match
            </h1>
            <p className="md:w-[30%]">
                Are you browsing through profiles on the site and
                see someone you're interested in? If you can't send
                a message yet, "Like" them instead!
            </p>
            <img
                src={profile.iam == "male"? woman:man}
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


        </div>:<div>
            
            <h1 className="font-bold text-3xl tracking-tighter text-black">
                Loading Your Interface...
            </h1>
            
            </div>}
    
    </div>}

        {explores.length > 0 && <div className="flex flex-row justify-between items-center mt-4 pb-12">
                    <div>
                        {links.map((link, index) => {
                            if(link.label === "&laquo; Previous"){
                               return (<button key={index}
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
                                return(<button key={index}
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
                                <button key={index}
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

                <div className="mt-6" />

</div>
   </MainContainer>
  )
}

export default ShowAll
