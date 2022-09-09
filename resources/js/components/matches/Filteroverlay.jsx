import React from 'react'
import { Button, Grid, Paper, Slider,FormControlLabel, RadioGroup, Radio, Checkbox} from '@material-ui/core'
import { data } from '../../constants';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ls from 'localstorage-slim'
import {FiSearch} from 'react-icons/fi'



const DB = "user-m9j234u94";
function Filteroverlay({handleclose}) {
    const [tab, setTab] = React.useState("location")
    const autoCompleteRef = React.useRef(null);
   const [distance, setDistance] = React.useState([1, 50]);
   const [age, setAge] = React.useState([18, 90]);
   const [value, setValue] = React.useState("distance based search")
   const [lookingfor, setLookingfor] = React.useState("")
//  RELIGION
const [religion, setReligion] = React.useState("");
const [anyReligion, setAnyReligion] = React.useState(false);

const handleReligion = () => {
    const token = ls.get(DATABASE_KEY, {decrypt:true});
    if (token == null) {
        return;
    }
    if (religion.length > 0) {
        axios
            .post(
                "/api/preference-religion",
                {
                    type: religion,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                setSteps("preference-completed");
                setStepNumber(10);

                localStorage.setItem(
                    PREFERENCE,
                    JSON.stringify({ step: 10, title: "preference-completed" })
                );
                toast.success(response.data.message);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    } else {
        toast.error("Select a religion");
    }
};

    function valuetext(value) {
        return `${value}km`;
    }

    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    //   SET USER CURRENT LOCATION

    const [location, setLocation] = React.useState({});

    // Get current location
    const getCurrentLocation = () => {
        axios
            .get("http://ip-api.com/json")
            .then((response) => {
                console.log(response.data);
                const { city, country, countryCode, lat, lon } = response.data;
                setQuery(`${city}, ${countryCode} ${country}`);
                setLocation({ lat: lat, lon: lon });
            })
            .catch((error) => {
                if (isGeolocationAvailable) {
                    if (isGeolocationEnabled) {
                        if (coords) {
                            setLocation({
                                lat: coords.latitude,
                                lon: coords.longitude,
                            });
                        }
                    }
                }
                // console.log(error.response.data);
            });
    };

    let autoComplete;
    function handleScriptLoad(updateQuery, autoCompleteRef) {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            { types: ["(cities)"], componentRestrictions: { country: [] } }
        );
        autoComplete.setFields(["address_components", "formatted_address"]);
        autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(updateQuery)
        );
    }

    async function handlePlaceSelect(updateQuery) {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        updateQuery(query);
        console.log(addressObject);
    }

    const [query, setQuery] = React.useState("");

    const handleLocation = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });

        if (token == null) {
            return;
        }

        axios
            .post(
                "/api/location",
                {
                    address: query,
                    latitude: location.lat,
                    longitude: location.lon,
                    min: distance[0],
                    max: distance[1],
                    allow_any_distance: allowProfile,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                setSteps("profile-completed");
                setStepNumber(12);

                ls.set(REG_STEPS, { step: 12, title: "profile-completed" }, {});
                toast.success(response.data.message);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };
  return (
    <div className="animate__animated animate__fadeIn md:p-[45px]" style={{position: 'fixed',zIndex:901,left:0, right:0, top:0, bottom:0, display:'flex',justifyContent:'center', alignItems:'center', background:'rgba(0,0,0,0.4)' }}>
                    <div className="animate__animated animate__slideInUp" style={{ background:'white', width:'100%', height:'100%', }}>


                        <div style={{ display:'flex', justifyContent:'space-between', padding:18  }}>
                            <h2 className='font-bold text-2xl text-red-800'>Filter</h2>
                            <i onClick={handleclose} className='fi fi-rr-cross w-[45px] h-[45px] flex items-center justify-center bg-[#f4f4f4] hover:bg-red-800 hover:text-white' style={{ cursor: 'pointer',   borderRadius:24,  }}></i>
                        </div>
        {/* Content */}
                        <div className='flex md:flex-row flex-col'>
                            <div className='md:w-[20%] px-4  md:gap-y-5 md:px-0 w-[100%] flex md:flex-col flex-row justify-between md:justify-center md:items-center'>
                                <button onClick={()=>{
                                    setTab('location')
                                }} className={tab == "location"?'md:px-24 md:p-3 md:rounded-full md:items-center md:hover:text-white md:bg-red-800 md:text-white text-red-800 font-bold flex items-center gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 md:rounded-full md:hover:bg-zinc-400 md:px-24 p-3 flex font-bold gap-x-3 h-max'}>Location</button>
                                <button  onClick={()=>{
                                    setTab('seeking')
                                }} className={tab == "seeking"?'md:px-24 md:p-2 md:rounded-full md:items-center md:hover:text-white md:bg-red-800 md:text-white text-red-800 font-bold flex items-center gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 md:rounded-full md:hover:bg-zinc-400 md:px-24 p-3 flex font-bold gap-x-3 h-max'}>Seeking</button>
                                <button  onClick={()=>{
                                    setTab('age')
                                }} className={tab == "age"?'md:px-24 md:p-3 md:rounded-full md:items-center md:hover:text-white md:bg-red-800 md:text-white text-red-800 font-bold flex items-center gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 md:rounded-full md:hover:bg-zinc-400 md:px-24 p-3 flex font-bold gap-x-3 h-max'}>Age</button>
                                <button  onClick={()=>{
                                    setTab('religion')
                                }} className={tab == "religion"?'md:px-24 md:p-3 md:rounded-full md:items-center md:hover:text-white md:bg-red-800 md:text-white text-red-800 font-bold flex items-center gap-x-3 hover:text-red-900 cursor-pointer':'cursor-pointer hover:text-red-900 md:rounded-full md:hover:bg-zinc-400 md:px-24 p-3 flex font-bold gap-x-3 h-max'}>Religion</button>
                            </div>
                            <div className='w-[100%] md:w-[80%]'>
                                {/* content */}


                                {tab == "location" && <div style={{ paddingLeft:45, paddingRight:45 }}>

                            <RadioGroup
                            name="food"
                            value={value}
                            onChange={handleChange}
                        >

                            <div className="flex items-center ring-1 ring-slate-900/5 p-2">
                                <FiSearch className='text-2xl font-bold' />
                                <input
                                className='flex-1'
                                    ref={autoCompleteRef}
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    placeholder="Enter a City"
                                    value={query}

                                />
                                <button
                                    onClick={() => {
                                        getCurrentLocation();
                                    }}
                                >
                                    <i class="fa-solid fa-location-crosshairs"></i>{" "}
                                    Change Location
                                </button>
                            </div>
                            <FormControlLabel
                            className='mt-2'
                                value="distance based search"
                                control={<Radio />}
                                label="Distance Based Search"
                            />
                            <p
                                style={{

                                    color: "#C62251",
                                    marginBottom: 26,
                                    fontWeight: "bold",
                                }}
                            >
                                Maximum search Distance for Profiles
                            </p>

<Grid container spacing={2} direction="row" >
                                <Grid item>1km</Grid>
                                <Grid item xs>
                                    <Slider
                                        max={1000}
                                        min={1}
                                        value={distance}
                                        onChange={(event, newValue) => {
                                            setDistance(newValue);
                                        }}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                    />
                                </Grid>
                                <Grid item>1000km</Grid>
                            </Grid>
                            <FormControlLabel
                                value="location based search"
                                control={<Radio />}
                                label="Location Based Search"
                            />
                            <p>{query.length > 0 ? query:'No location found'}</p>





                        </RadioGroup>


                            {/* <p
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    width: "100%",
                                }}
                            >
                                {distance[0]}km - {distance[1]}km
                            </p> */}

                            {/* <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox
                                        value={allowProfile}
                                        onChange={(e) =>
                                            setAllowProfile(e.target.checked)
                                        }
                                        color="primary"
                                    />
                                }
                                label={
                                    <p
                                        style={{
                                            fontSize: 14,
                                            fontFamily: "Dosis",
                                        }}
                                    >
                                        Allow Profiles from any Distance
                                    </p>
                                }
                                labelPlacement="end"
                                style={{ marginTop: 80 }}
                            /> */}

                            <Button
                                variant="contained"
                                style={{
                                    marginTop: 12,
                                    height: 48,
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                }}
                                color="primary"
                                onClick={() => {
                                    // setSteps("sex");
                                    // setStepNumber(4);
                                    // handleLocation();
                                }}
                            >
                                Save
                            </Button>
                        </div>}
                        {/* Seeking */}
                        {tab == "seeking" && <div style={{ paddingLeft:45 }}>
                        <h2>Seeking</h2>
                        <ul style={{ display:'flex', gap:12, marginTop:24 }}>
                            <li style={{ border:  lookingfor == "man"
                                                ? "1px solid #C62251"
                                                : "1px solid grey",cursor:"pointer",borderRadius:9, padding:18, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}

                                onClick={() => {
                                    if (lookingfor == "man") {
                                        setLookingfor("");
                                    } else {
                                        setLookingfor("man");
                                    }
                                }}
                            >
                                <div
                                    style={{

                                        borderColor:
                                            lookingfor == "man"
                                                ? "#C62251"
                                                : "grey",
                                    }}
                                >
                                    <img
                                        src={
                                            lookingfor == "man"
                                                ? data.manActive
                                                : data.man
                                        }
                                    />
                                </div>
                                <p
                                    style={{
                                        color:
                                            lookingfor == "man"
                                                ? "#C62251"
                                                : "grey",
                                    }}
                                >
                                    Man
                                </p>
                            </li>
                            <li style={{ border:  lookingfor == "woman"
                                                ? "1px solid #C62251"
                                                : "1px solid grey",cursor:"pointer",borderRadius:9, padding:18, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}
                                onClick={() => {
                                    if (lookingfor == "woman") {
                                        setLookingfor("");
                                    } else {
                                        setLookingfor("woman");
                                    }
                                }}
                            >
                                <div
                                    style={{
                                        borderColor:
                                            lookingfor == "woman"
                                                ? "#C62251"
                                                : "grey",
                                    }}
                                >
                                    <img
                                        src={
                                            lookingfor == "woman"
                                                ? data.womanActive
                                                : data.woman
                                        }
                                    />
                                </div>
                                <p
                                    style={{
                                        color:
                                            lookingfor == "woman"
                                                ? "#C62251"
                                                : "grey",
                                    }}
                                >
                                    Woman
                                </p>
                            </li>
                            <li style={{ border:  lookingfor == "anyone"
                                                ? "1px solid #C62251"
                                                : "1px solid grey",cursor:"pointer", borderRadius:9, padding:18, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}
                                onClick={() => {
                                    if (lookingfor == "anyone") {
                                        setLookingfor("");
                                    } else {
                                        setLookingfor("anyone");
                                    }
                                }}
                            >
                                <div

                                >
                                    <img
                                        src={
                                            lookingfor == "anyone"
                                                ? data.anyoneActive
                                                : data.anyone
                                        }
                                    />
                                </div>
                                <p
                                    style={{
                                        color:
                                            lookingfor == "anyone"
                                                ? "#C62251"
                                                : "grey",
                                    }}
                                >
                                    Anyone
                                </p>
                            </li>
                        </ul>

                        <Button
                                variant="contained"
                                style={{
                                    marginTop: 12,
                                    height: 48,
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                }}
                                color="primary"
                                onClick={() => {
                                    // setSteps("sex");
                                    // setStepNumber(4);
                                    // handleLocation();
                                }}
                            >
                                Save
                            </Button>
                        </div>}

                        {/* Age */}
                        {tab == "age" && <div style={{ paddingLeft:45, paddingRight:45 }}>
                                <h2>Age</h2>
                                <Grid container spacing={2} direction="row" style={{ marginTop:12 }} >
                                <Grid item>18yrs</Grid>
                                <Grid item xs>
                                    <Slider
                                        max={90}
                                        min={18}
                                        value={age}
                                        onChange={(event, newValue) => {
                                            setAge(newValue);
                                        }}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                    />
                                </Grid>
                                <Grid item>90yrs</Grid>
                            </Grid>

                            <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

const token = ls.get(DB, {decrypt:true});

axios.put('/api/my-preference',{
    min:age[0],
    max:age[1]
},{
    headers:{
        'Accept':'application/json',
        'Authorization': 'Bearer '+token
    }
}).then((response)=>{
    toast.success(response.data.message);
    handleclose()
}).catch((error)=>{
   //  toast.error(error)
   console.log(error)
})
setFil
}}>Save</Button>
                        </div>}

                        {/* Religion */}
                        {tab == "religion" && <div style={{ paddingLeft:45, paddingRight:45, display:'flex', flexDirection:'column', width:'100%' }}>
                                <h2>Religion</h2>
                                <>
                <p
                    style={{
                        marginBottom: 24,
                        color: "#C62251",
                        marginTop: 11,
                        fontWeight:'bold'
                    }}
                >

                </p>
                <Grid container spacing={2} direction="row">
                    <Grid item xs>
                    <Grid
                    container
                    spacing={0}
                    direction="column"

                >
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("christianity");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "christianity"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "christianity"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Christianity
                            </p>
                            {religion == "christianity" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("islam");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "islam" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "islam"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Islam
                            </p>
                            {religion == "islam" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("jewish");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "jewish" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "jewish"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Jewish
                            </p>
                            {religion == "jewish" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("buddism");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "buddism" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "buddism"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Buddism
                            </p>
                            {religion == "buddism" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("hinduism");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "hinduism"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "hinduism"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Hinduism
                            </p>
                            {religion == "hinduism" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>


                </Grid>
                    </Grid>
                    <Grid item xs>
                            <Grid>
                            <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("atheist");
                                setAnyReligion(false)
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "atheist" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "atheist"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Atheist
                            </p>
                            {religion == "atheist" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("jainism");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "jainism" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "jainism"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Jainism
                            </p>
                            {religion == "jainism" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setReligion("sikhism");
                                setAnyReligion(false);
                            }}
                            variant="outlined"
                            style={{
                                padding: 8,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    religion == "sikhism" ? "#C62251" : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        religion == "sikhism"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Sikhism
                            </p>
                            {religion == "sikhism" ? (
                                <i
                                    class="fa-solid fa-circle-check"
                                    style={{ color: "#C62251" }}
                                ></i>
                            ) : (
                                <i></i>
                            )}
                        </Paper>
                    </Grid>
                            </Grid>
                    </Grid>
                </Grid>

                <FormControlLabel
                    value="end"
                    control={
                        <Checkbox
                            value={anyReligion}
                            onChange={(e) => {
                                setAnyReligion(e.target.checked)
                             if(e.target.checked){
                                 setReligion("any religion")
                             }else{
                                 setReligion("")
                             }
                            }}
                            color="primary"
                        />
                    }
                    label={
                        <p style={{ fontSize: 14, fontFamily: "Dosis" }}>
                            Any Religion would work
                        </p>
                    }
                    labelPlacement="end"
                    style={{ marginTop: 10 }}
                />
                <Button
                disabled={religion.length>0?false:true}
                    variant="contained"
                    className='w-[90px]'
                    style={{
                        marginTop: 11,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",
                    }}
                    color="primary"
                    onClick={() => {
                        const token = ls.get(DB, {decrypt:true});

                        axios.put('/api/my-preference',{
                            religion:value
                        },{
                            headers:{
                                'Accept':'application/json',
                                'Authorization': 'Bearer '+token
                            }
                        }).then((response)=>{
                            toast.success(response.data.message);
                            loadPreference()
                        }).catch((error)=>{
                        //  toast.error(error)
                        console.log(error)
                        })


                    }}
                >
                    Save
                </Button>
            </>

                        </div>}





                            </div>
                        </div>


                    </div>
                </div>
  )
}

export default Filteroverlay
