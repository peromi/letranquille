import React from "react";
import "../../../css/profilepanel.scss";
import MainContainer from "../../containers/MainContainer";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SocketContext } from "../../context/SocketContext";
import ls from "localstorage-slim";
import { data } from "../../constants";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Grid,
    Slider,
    Paper
} from "@material-ui/core";
import "animate.css";
import axios from "axios";
import { toast } from "react-toastify";

const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";
function ProfilePanel() {
    const navigate = useNavigate();
    const params = useParams();
    const [optionbutton, setOptionbutton] = React.useState(false)
// Hobbies
const [cooking, setCooking] = React.useState("");
const [gaming, setGaming] = React.useState("");
const [gym, setGym] = React.useState("");
const [kpop, setKpop] = React.useState("");
const [photography, setPhotography] = React.useState("");
const [music, setMusic] = React.useState("");
const [netflix, setNetflix] = React.useState("");
const [beach, setBeach] = React.useState("");
const [sarcasm, setSarcasm] = React.useState("");
const [baseball, setBaseball] = React.useState("");
const [manga, setManga] = React.useState("");
const [art, setArt] = React.useState("");
const [vegan, setVegan] = React.useState("");

// Interest
const [reading, setReading] = React.useState("");
const [mountain, setMountain] = React.useState("");
const [travelling, setTravelling] = React.useState("");
const [football, setFootball] = React.useState("");
const [nba, setNba] = React.useState("");
const [hiphop, setHiphop] = React.useState("");
const [athlete, setAthlete] = React.useState("");
const [astrology, setAstrology] = React.useState("");
const [dancing, setDancing] = React.useState("");
const [foodie, setFoodie] = React.useState("");
const [anime, setAnime] = React.useState("");
const [marvel, setMarvel] = React.useState("");
const [vegetarian, setVegetarian] = React.useState("");

const [hobbies, setHobbies] = React.useState([]);
const handleHobby = () => {
    const token = ls.get(DATABASE_KEY, {decrypt:true});

    if (token == null) {
        return;
    }
    if (hobbies.length > 10) {
        toast.error("You can only choose 10 hobbies.");
        return;
    }

    axios
        .post(
            "/api/user-hobby",
            {
                hobby: hobbies,
            },
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        )
        .then((response) => {

            toast.success(response.data.message);
            loadUserProfile()
            loadProfile()
            setSetting('')
        })
        .catch((error) => {
            toast.error(error.response.data.message);
        });
};
    // Avatar
    const [avatar, setAvatar] = React.useState(null);
    const [avatar2, setAvatar2] = React.useState(null);
    const [cover, setCover] = React.useState(null);

    const [gallery1, setGallery1] = React.useState(null);
    const [gallery2, setGallery2] = React.useState(null);
    const [gallery3, setGallery3] = React.useState(null);
    const [gallery4, setGallery4] = React.useState(null);
    const [gallery5, setGallery5] = React.useState(null);
    const [gallery6, setGallery6] = React.useState(null);

    const { profileview } = React.useContext(SocketContext);
    const [profile, setProfile] = React.useState({});
    const [hover, setHover] = React.useState(false);
    const [setting, setSetting] = React.useState("");
    const [value, setValue] = React.useState("");
    const [height, setHeight] = React.useState(3.0);
    const autoCompleteRef = React.useRef(null);

    const [religion, setReligion] = React.useState("");
    const [gallery, setGallery] = React.useState([]);
    const [hobby, setHobby] = React.useState([]);

    //   Preferences hooks
    const [age, setAge] = React.useState("");
    const [bodytype, setBodytype] = React.useState("");
    const [drink, setDrink] = React.useState("");
    const [food, setFood] = React.useState("");
    const [smoke, setSmoke] = React.useState("");
    const [relationship, setRelationship] = React.useState("");
    const [religions, setReligions] = React.useState("");

   const [distance, setDistance] = React.useState([1, 50]);

    const [allowProfile, setAllowProfile] = React.useState(false);

    function valuetext(value) {
        return `${value}km`;
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

    const loadScript = (url, callback) => {
        let script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (
                    script.readyState === "loaded" ||
                    script.readyState === "complete"
                ) {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = () => callback();
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

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

    const handleChange = (e) => {
        setValue(e.target.value);
        // setAnyReligion(false);
    };

    const handleHeight = (event, newValue) => {
        setHeight(newValue);
    };

    const loadProfile = React.useCallback(() => {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {
            console.log("DATA", db.user.user);

            if (params !== null) {
                profileview({ to: params.id, name:db.user.user.name });
            }
        } else {
        }
    }, []);

    const handleProfileView = () =>{
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        axios.post("/api/profile-view",{
            profile:params.id
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            toast.success(response.data.message)
        }).catch((error)=>{
            toast.error(error.response.data.message)
        })
    }

    const loadUserProfile = () => {
        if (params.id === undefined) {
            const token = ls.get(DATABASE_KEY, { decrypt: true });
            axios
                .get("/api/user-profile", {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    console.log("Yours", response.data.user);
                    let data = response.data.user;

                    setProfile(data);
                    setReligion(data.religion);
                    setGallery(data.gallery);
                    setHobby(data.hobbies);
                    setAge(data.preference_age);
                    setDrink(data.preference_drink);
                    setSmoke(data.preference_smoke);
                    setRelationship(data.preference_relationship);
                    setFood(data.preference_food);
                    setBodytype(data.preference_bodytype);
                    setReligions(data.preference_religion);
                });
        } else {

            const token = ls.get(DATABASE_KEY, { decrypt: true });
            axios
                .get("/api/user-profile/" + params.id, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    let data = response.data.user;
                    setProfile(data);
                    setReligion(data.religion);
                    setGallery(data.gallery);
                    setHobby(data.hobbies);
                    setAge(data.preference_age);
                    setDrink(data.preference_drink);
                    setSmoke(data.preference_smoke);
                    setRelationship(data.preference_relationship);
                    setFood(data.preference_food);
                    setBodytype(data.preference_bodytype);
                    setReligions(data.preference_religion);

                    handleProfileView();
                });

        }
    };

    const imageUpload = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        let ids = toast.loading("Please wait...");
        if (token == null) {
            return;
        }
        if(hobbies.length >10){
            toast.error("You can only choose 10 hobbies.")
            return;
        }
        let formData = new FormData();
        formData.append("cover", cover);

        axios
            .post("/api/avatar-update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data);

                toast.update(ids, {
                    render: response.data.message,
                    type: "success",
                    isLoading: false,
                    autoClose: true,
                });

                loadProfile();
                loadUserProfile();
                setSetting("");
            })
            .catch((error) => {
                toast.update(ids, {
                    render: "Something went wrong",
                    type: "error",
                    isLoading: false,
                    autoClose: true,
                });

                toast.error(error.response.data.message);
            });
    };

    React.useEffect(() => {
        loadScript()
        loadProfile();
        loadUserProfile();
    }, [params]);

    return (
        <MainContainer>
            <div
                className="relative w-full h-[380px] flex items-end "
                style={{
                    background:
                        profile.cover != null
                            ? `url('/storage/cover/${profile.cover}')`
                            : "url(" + data.bg + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >

                <div style={{background:'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))'}} className="overflow-hidden rounded-md relative flex md:flex-row flex-col  w-full px-20 pb-6 items-end">
                    <div
                        className="md:w-[300px] w-[50%] drop-shadow-lg"
                        onMouseEnter={() => {
                            if (params.id === undefined) {
                                setHover(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (params.id === undefined) {
                                setHover(false);
                            }
                        }}
                        style={{}}
                    >
                        <img className="rounded-lg md:w-[100%] md:h-[100%] w-[100%] "
                            src={`/storage/avatar/${profile.first_cover}`}

                        />
                        {hover && (
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col bg-slate-900/50 justify-center items-center animate animate-fade-in">
                                <i className="fi fi-rr-camera text-4xl text-white"></i>
                                <p className="font-bold text-white">Change Cover Picture</p>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-2" >
                        <div className="flex md:flex-row flex-col md:justify-between">
                            <div className="px-6">
                                <h1 className="capitalize text-2xl font-bold text-white drop-shadow-lg">
                                    {profile.name}
                                </h1>
                                <div className="flex gap-3 text-md font-bold"

                                >
                                    <p className="capitalize text-zinc-100">{profile.address}</p>{" "}
                                    {params.id === undefined && (
                                        <button className="text-red-400">Change</button>
                                    )}
                                </div>
                            </div>
                            {params.id === undefined && (
                                <button className="flex flex-row gap-x-2 justify-center items-center px-12 rounded-full font-bold hover:bg-white bg-yellow-300"
                                    onClick={() => {
                                        setSetting("cover image");
                                    }}
                                >
                                    <i className="fi fi-rr-picture"></i>{" "}
                                    <p>Change Cover Picture</p>
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className="  bg-white"

            >
                <div className="w-full" >
                {params.id !== undefined && <div className="progress" >
                            <div style={{ display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center' }}>
                                <div>
                                <Button variant="contained" color="primary" style={{ paddingLeft:35, paddingRight:35, borderRadius:45, paddingTop:10, paddingBottom:10, marginRight:13  }}><i className="fi fi-rr-heart" style={{ marginRight:12 }}></i> Send Like</Button>
                                <Button onClick={()=>{
                                    navigate("/messages/"+ params.id, {replace:false})
                                }} variant="outlined" color="primary" style={{ paddingLeft:35, paddingRight:35, borderRadius:45, paddingTop:10, paddingBottom:10, marginRight:13}}><i className="fi fi-rr-paper-plane"  style={{ marginRight:12 }}></i> Message</Button>
                                <Button onClick={()=>{
                                    let token = ls.get(DATABASE_KEY, { decrypt: true });
                                    axios.post("/api/favorite", {
                                        profile:params.id
                                    },
                                    {
                                        headers: {
                                            Accept:"application/json",
                                            Authorization: "Bearer "+token
                                        }
                                    }).then((response)=>{
                                        toast.success(response.data.message);
                                        setOptionbutton(false)
                                    }).catch((error)=>{
                                        toast.error(error.response.data.message);
                                        setOptionbutton(false)
                                    })
                                }} variant="outlined" color="primary" style={{ paddingLeft:23, paddingRight:23, borderRadius:45, paddingTop:10, paddingBottom:10, }}><i className="fi fi-rr-star"  style={{ marginRight:12 }}></i> Add To Favorite</Button>
                                </div>
                                <div style={{ position:'relative' }}>
                                    <i className="fi fi-rr-menu-dots-vertical" style={{ cursor:'pointer' }} onClick={()=>{
                                        setOptionbutton(!optionbutton)
                                    }}></i>
                                    {optionbutton && <div style={{boxShadow:'0px 0px 8px rgba(0,0,0,0.3)',borderRadius:8, position:'absolute',gap:14, right:0, top:45, display:'flex', flexDirection:'column', padding:12, alignItems:'flex-start',width:200,background:'white', justifyContent:'flex-start' }}>
                                        <button  onClick={()=>{
            setOptionbutton(false)
        }} style={{cursor:'pointer', width:'100%', textAlign:'left', background:'transparent', border:0, padding:8, fontSize:18, fontWeight:'bold' }}><i className="fi fi-rr-share" style={{ marginRight:12 }}></i> Share</button>
                                        <button  onClick={()=>{
            setOptionbutton(false)
        }} style={{cursor:'pointer', width:'100%',textAlign:'left', background:'transparent', border:0, padding:8, fontSize:18, fontWeight:'bold' }}><i className="fi fi-rr-comment-info" style={{ marginRight:12 }}></i> Report</button>
                                        <button onClick={()=>{
                                            let token = ls.get(DATABASE_KEY, { decrypt: true });
                                            axios.post("/api/block-user", {
                                                profile:params.id
                                            },
                                            {
                                                headers: {
                                                    Accept:"application/json",
                                                    Authorization: "Bearer "+token
                                                }
                                            }).then((response)=>{
                                                toast.success(response.data.message);
                                                setOptionbutton(false)
                                            }).catch((error)=>{
                                                toast.error(error.response.data.message);
                                                setOptionbutton(false)
                                            })
                                        }} style={{cursor:'pointer', width:'100%', textAlign:'left', background:'transparent', border:0, padding:8, fontSize:18, fontWeight:'bold', textTransform:'capitalize' }}><i className="fi-rr-heart-arrow" style={{ marginRight:12 }} ></i>Block {profile.name}</button>
                                    </div>}
                                </div>

                            </div>

                         </div>}
                        {params.id == undefined && <div className="flex gap-x-3 items-center bg-red-500 w-full p-3">

                                <h1 className="text-6xl font-bold text-white">60%</h1>

                            <div className="flex flex-col text-white"

                            >
                                <p className="-mb-1"
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    Profile Completeness
                                </p>
                                <small>Update your profile completely</small>
                                <small>to get your perfect matches</small>
                            </div>
                        </div>}
                </div>
                {/* Info */}
                <div className="mt-6 flex flex-col md:flex-row w-full px-12 md:gap-x-12">
                    <div className="w-full  ">
                        {/* Bio */}
                        <div className="flex justify-between"
                        >
                            <div  >
                                <h3>Bio</h3>
                                <p style={styles.pink}>{profile.bio}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.bio);
                                        setSetting("bio");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Body Type */}
                        <div
                            style={{
                                display: "flex",

                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Body Type</h3>
                                <p style={styles.pink}>{profile.bodytype}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.bodytype);
                                        setSetting("bodytype");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Height */}
                        <div
                            style={{
                                display: "flex",


                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Height</h3>
                                <p style={styles.pink}>
                                    {parseInt(profile.height) / 10}
                                </p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setHeight(profile.height);
                                        setSetting("height");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Religion */}
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Religion</h3>
                                <p style={styles.pink}>{religion.name}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(religion.name);
                                        setSetting("religion");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Location */}
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Location</h3>
                                <p style={styles.pink}>{profile.address}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.address);
                                        setDistance([
                                            profile.distance_min,
                                            profile.distance_max,
                                        ]);
                                        setAllowProfile(
                                            profile.allow_any_distance
                                        );
                                        setQuery(profile.address);
                                        setSetting("location");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Profession */}
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Profession</h3>
                                <p style={styles.pink}>{profile.job}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.job);
                                        setSetting("profession");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Description */}
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Description</h3>
                                <p style={styles.pink}>
                                    {profile.description ??
                                        "No description available"}
                                </p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.description);
                                        setSetting("description");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        <h3 className="font-bold text-2xl">
                            Photos Gallery
                        </h3>
                        <div className="flex flex-wrap w-full gap-4">
                            {gallery.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="md:w-[30%] w-[45%] h-[180px] p-3"
                                    style={{
                                        background:
                                            "url(/storage/gallery/" +
                                            photo.cover +
                                            ")",

                                            backgroundSize:'cover'
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-trash ml-4 mt-4"
                                        onClick={() => {
                                            let token = ls.get(DATABASE_KEY, {
                                                decrypt: true,
                                            });

                                            if(gallery.length > 1){
                                                axios
                                                .delete(
                                                    "/api/gallery-delete/" +
                                                        photo.id,
                                                    {
                                                        headers: {
                                                            Accept: "application/json",
                                                            Authorization:
                                                                "Bearer " +
                                                                token,
                                                        },
                                                    }
                                                )
                                                .then((response) => {
                                                    toast.success(
                                                        response.data.message
                                                    );
                                                    loadProfile();
                                                    loadUserProfile();
                                                })
                                                .catch((error) => {
                                                    toast.error(
                                                        error.response.data
                                                            .message
                                                    );
                                                });
                                            }else{
                                                toast.error("You can not delete all your gallery images.")
                                            }


                                        }}
                                    ></i>
                                </div>
                            ))}

                            <div
                                className="md:w-[30%] w-[45%] h-[180px] ring-1 ring-slate-900/5 flex flex-col justify-center items-center font-bold"
                                style={{ breakInside: "avoid" }}
                                onClick={() => {
                                    setSetting("gallery");
                                }}
                            >
                                <i
                                    className="fi fi-rr-plus"
                                    style={{ fontSize: 23 }}
                                ></i>
                                <p>Add more photos</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-2xl font-bold mb-2 mt-6">Preferences</h3>
                        <div className="flex flex-wrap gap-6">
                            {drink.type === "drinker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.drink} />
                                    <p>{drink.type}</p>
                                </div>
                            )}
                            {drink.type === "occasional drinker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.wine} />
                                    <p>{drink.type}</p>
                                </div>
                            )}

                            {drink.type === "non drinker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.nodrink} />
                                    <p>{drink.type}</p>
                                </div>
                            )}
                            {drink.type === "doesn't matter" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <p>Drinking Habit</p>
                                    <p>{drink.type}</p>
                                </div>
                            )}

                            {/* Food */}
                            {food.food_type === "vegetarian" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.foodie} />
                                    <p>{food.food_type}</p>
                                </div>
                            )}
                            {food.food_type === "vegan" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.flower} />
                                    <p>{food.food_type}</p>
                                </div>
                            )}

                            {food.food_type === "non vegetarian" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.chicken} />
                                    <p>{food.food_type}</p>
                                </div>
                            )}

                            {food.type === "doesn't matter" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <p>Food Habit</p>
                                    <p>{food.type}</p>
                                </div>
                            )}

                            {/* Body Type */}
                            {bodytype.type === "muscular" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.muscular} />
                                    <p>{bodytype.type}</p>
                                </div>
                            )}
                            {bodytype.type === "curvy" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.curvy} />
                                    <p>{bodytype.type}</p>
                                </div>
                            )}

                            {bodytype.type === "slim" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.slim} />
                                    <p>{bodytype.type}</p>
                                </div>
                            )}
                            {bodytype.type === "average" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.average} />
                                    <p>{bodytype.type}</p>
                                </div>
                            )}

                            {bodytype.type === "doesn't matter" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <p>Body Type</p>
                                    <p>{bodytype.type}</p>
                                </div>
                            )}

                            {/* relationship */}
                            {relationship.type === "long term" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.ring} />
                                    <p>{relationship.type}</p>
                                </div>
                            )}
                            {relationship.type === "short term" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.flower} />
                                    <p>{relationship.type}</p>
                                </div>
                            )}

                            {relationship.type === "hookups" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.friend} />
                                    <p>{relationship.type}</p>
                                </div>
                            )}
                            {relationship.type === "new friends" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.average} />
                                    <p>{relationship.type}</p>
                                </div>
                            )}

                            {/* smoking */}
                            {smoke.type === "smoker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.smoke} />
                                    <p>{smoke.type}</p>
                                </div>
                            )}
                            {smoke.type === "non smoker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.nosmoke} />
                                    <p>{smoke.type}</p>
                                </div>
                            )}

                            {smoke.type === "occasional smoker" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <img src={data.smoke} />
                                    <p>{smoke.type}</p>
                                </div>
                            )}
                            {smoke.type === "doesn't matter" && (
                                <div className="w-[45%] p-6 ring-1 ring-slate-900/5 flex flex-col justify-center items-center rounded-lg h-[180px] font-bold">
                                    <p>Smoking Habit</p>
                                    <p>{smoke.type}</p>
                                </div>
                            )}
                        </div>
                        {/* Age */}
                        <div style={{ marginTop: 14, fontWeight: "bold" }}>
                            <p>
                                Age from {age.min} to {age.max}years
                            </p>
                        </div>
                        {/* Distance */}
                        <div style={{ marginTop: 14, fontWeight: "bold" }}>
                            <p>
                                From {profile.distance_min}km to{" "}
                                {profile.distance_max}km
                            </p>
                        </div>

                        {/* Religion */}
                        <div style={{ marginTop: 14, fontWeight: "bold" }}>
                            <p>Religion: {religions.type}</p>
                        </div>

                        {/* Change button */}
                        {params.id === undefined && (
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    height: 48,
                                    width: "100%",
                                    marginTop: 34,
                                }}
                                onClick={() => {
                                    navigate("/preference-settings");
                                }}
                            >
                                Change Match Preferences
                            </Button>
                        )}

                        {/* Sexual orientation */}
                        <div
                            style={{
                                display: "flex",
                                borderTopWidth: 1,
                                borderTopColor: "#cecece",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Sexual Orientation</h3>
                                <p style={styles.pink}>{profile.type}</p>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setValue(profile.type);
                                        if (profile.show == "0") {
                                            setAllowProfile(false);
                                        } else {
                                            setAllowProfile(true);
                                        }

                                        setSetting("sexual orientation");
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                        {/* Hobbies and Interest */}
                        <div
                            style={{
                                display: "flex",
                                borderTopWidth: 1,
                                borderTopColor: "#cecece",
                                width: "100%",
                                paddingTop: 18,
                                paddingBottom: 18,
                            }}
                        >
                            <div style={{ width: "100%" }}>
                                <h3>Hobbies and Interests</h3>

                                <ul className="hobby">
                                    {hobby.map((item) => (
                                        <li
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                            key={item.id}
                                        >
                                            {item.hobby}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {params.id === undefined && (
                                <button
                                    style={{
                                        border: 0,
                                        background: "transparent",
                                        display: "flex",
                                        gap: 8,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {

                                        if(hobby.findIndex((item) => item.hobby == "cooking") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "cooking",
                                            ]);

                                            setCooking("cooking");

                                        }
                                        if(hobby.findIndex((item) => item.hobby == "gaming")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "gaming",
                                            ]);

                                            setGaming("gaming");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "gym")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "gym",
                                            ]);

                                            setGym("gym");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "kpop")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "kpop",
                                            ]);

                                            setKpop("kpop");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "photography")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "photography",
                                            ]);

                                            setPhotography("photography");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "netflix")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "netflix",
                                            ]);

                                            setNetflix("netflix");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "beach")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "beach",
                                            ]);

                                            setBeach("beach");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "sarcasm")!== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "sarcasm",
                                            ]);

                                            setSarcasm("sarcasm");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "baseball") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "baseball",
                                            ]);

                                            setBaseball("baseball");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "manga") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "manga",
                                            ]);

                                            setManga("manga");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "art") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "art",
                                            ]);

                                            setArt("art");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "vegan") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "vegan",
                                            ]);

                                            setVegan("vegan");
                                        }

                                        // INTEREST
                                        if(hobby.findIndex((item) => item.hobby == "reading") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "reading",
                                            ]);

                                            setReading("reading");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "mountain") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "mountain",
                                            ]);

                                            setMountain("mountain");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "travelling") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "travelling",
                                            ]);

                                            setTravelling("travelling");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "football") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "football",
                                            ]);

                                            setFootball("football");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "nba") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "nba",
                                            ]);

                                            setNba("nba");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "hiphop") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "hiphop",
                                            ]);

                                            setHiphop("hiphop");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "athlete") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "athlete",
                                            ]);

                                            setAthlete("athlete");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "astrology") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "astrology",
                                            ]);

                                            setAstrology("astrology");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "dancing") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "dancing",
                                            ]);

                                            setDancing("dancing");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "foodie") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "foodie",
                                            ]);

                                            setFoodie("foodie");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "anime") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "anime",
                                            ]);

                                            setAnime("anime");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "marvel") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "marvel",
                                            ]);

                                            setMarvel("marvel");
                                        }
                                        if(hobby.findIndex((item) => item.hobby == "vegetarian") !== -1){
                                            setHobbies((hobbies) => [
                                                ...hobbies,
                                                "vegetarian",
                                            ]);

                                            setVegetarian("vegetarian");
                                        }
                                        setSetting("hobby")
                                    }}
                                >
                                    <i
                                        className="fi fi-rr-pencil"
                                        style={{}}
                                    ></i>
                                    <p>Edit</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio */}
            {setting == "bio" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Bio</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <TextField
                            id="standard-multiline-static"
                            label="Enter Short Bio atleast 25 characters"
                            multiline
                            rows={3}
                            defaultValue=""
                            variant="outlined"
                            inputProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                axios
                                    .post(
                                        "/api/avatar-update",
                                        {
                                            bio: value,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadUserProfile();
                                        loadProfile();
                                    })
                                    .catch((error) => {
                                        //  toast.error(error)
                                        console.log(error);
                                    });

                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Body Type*/}
            {setting == "bodytype" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>
                                {" "}
                                <i
                                    className="fi fi-sr-user"
                                    style={{ fontSize: 24, fontWeight: "bold" }}
                                ></i>{" "}
                                Body Type
                            </h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <RadioGroup
                            name="food"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="slim"
                                control={<Radio />}
                                label="Slim"
                            />
                            <FormControlLabel
                                value="average"
                                control={<Radio />}
                                label="Average"
                            />
                            <FormControlLabel
                                value="curvy"
                                control={<Radio />}
                                label="Curvy"
                            />
                            <FormControlLabel
                                value="muscular"
                                control={<Radio />}
                                label="Muscular"
                            />
                        </RadioGroup>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                axios
                                    .put(
                                        "/api/profile",
                                        {
                                            bodytype: value,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadProfile();
                                        loadUserProfile();
                                    })
                                    .catch((error) => {
                                        //  toast.error(error)
                                        console.log(error);
                                    });
                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Height*/}
            {setting == "height" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Height</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            style={{}}
                        >
                            <Grid item>
                                <p>3</p>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    min={30}
                                    max={75}
                                    value={height}
                                    onChange={handleHeight}
                                    aria-labelledby="continuous-slider"
                                />
                            </Grid>
                            <Grid item>
                                <p>8.0</p>
                            </Grid>
                        </Grid>
                        <p
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "red",
                                fontWeight: "bold",
                            }}
                        >
                            {height / 10}
                        </p>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });

                                axios
                                    .put(
                                        "/api/profile",
                                        {
                                            height: height,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadProfile();
                                        loadUserProfile();
                                    })
                                    .catch((error) => {
                                        toast.error(
                                            error.response.data.message
                                        );
                                        console.log(error);
                                    });
                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Religion*/}
            {setting == "religion" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>
                                {" "}
                                <i
                                    className="fi fi-sr-home"
                                    style={{ fontSize: 21, fontWeight: "bold" }}
                                ></i>{" "}
                                Religion
                            </h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <RadioGroup
                            name="christian"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="christianity"
                                control={<Radio />}
                                label="Christianity"
                            />
                            <FormControlLabel
                                value="islam"
                                control={<Radio />}
                                label="Islam"
                            />
                            <FormControlLabel
                                value="jewish"
                                control={<Radio />}
                                label="Jewish"
                            />
                            <FormControlLabel
                                value="buddism"
                                control={<Radio />}
                                label="Buddism"
                            />

                            <FormControlLabel
                                value="hinduism"
                                control={<Radio />}
                                label="Hinduism"
                            />
                            <FormControlLabel
                                value="jainism"
                                control={<Radio />}
                                label="Jainism"
                            />
                            <FormControlLabel
                                value="sikhism"
                                control={<Radio />}
                                label="Sikhism"
                            />
                            <FormControlLabel
                                value="atheist"
                                control={<Radio />}
                                label="Atheist"
                            />
                        </RadioGroup>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });

                                axios
                                    .put(
                                        "/api/religion",
                                        {
                                            name: value,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadUserProfile();
                                        loadProfile();
                                    })
                                    .catch((error) => {
                                        //  toast.error(error)
                                        console.log(error);
                                    });
                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Profession */}
            {setting == "profession" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Job</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <TextField
                            label="Job Title"
                            inputProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            variant="outlined"
                            style={{ marginTop: 0 }}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                axios
                                    .put(
                                        "/api/profession",
                                        {
                                            job: value,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadUserProfile();
                                        loadProfile();
                                    })
                                    .catch((error) => {
                                        //  toast.error(error)
                                        console.log(error);
                                    });

                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Location */}
            {setting == "location" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Location</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <>
                            <div className="autoplace">
                                <i class="fa-solid fa-magnifying-glass search"></i>
                                <input
                                    ref={autoCompleteRef}
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    placeholder="Enter a City"
                                    value={query}
                                    style={{
                                        width: "100%",
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        getCurrentLocation();
                                    }}
                                >
                                    <i class="fa-solid fa-location-crosshairs"></i>{" "}
                                    Detect Location
                                </button>
                            </div>
                            <p
                                style={{
                                    marginTop: 24,
                                    color: "#C62251",
                                    marginBottom: 26,
                                }}
                            >
                                Maximum search Distance for Profiles
                            </p>

                            <Grid container spacing={2} direction="row">
                                <Grid item>1km</Grid>
                                <Grid item xs>
                                    <Slider
                                        max={300}
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
                                <Grid item>300km</Grid>
                            </Grid>

                            <p
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    width: "100%",
                                }}
                            >
                                {distance[0]}km - {distance[1]}km
                            </p>

                            <FormControlLabel
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
                            />

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
                        </>
                    </div>
                </div>
            )}
            {/* Sexual orientation */}
            {setting == "sexual orientation" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Sexual Orientation</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <RadioGroup
                            name="food"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="straight"
                                control={<Radio />}
                                label="Straight"
                            />
                            <FormControlLabel
                                value="gay"
                                control={<Radio />}
                                label="Gay"
                            />
                            <FormControlLabel
                                value="lesbian"
                                control={<Radio />}
                                label="Lesbian"
                            />
                            <FormControlLabel
                                value="demisexual"
                                control={<Radio />}
                                label="Demisexual"
                            />
                            <FormControlLabel
                                value="pansexual"
                                control={<Radio />}
                                label="Pansexual"
                            />
                            <FormControlLabel
                                value="queer"
                                control={<Radio />}
                                label="Queer"
                            />
                            <FormControlLabel
                                value="aromantic"
                                control={<Radio />}
                                label="Aromantic"
                            />
                            <FormControlLabel
                                value="bicurious"
                                control={<Radio />}
                                label="Bicurious"
                            />
                        </RadioGroup>
                        <FormControlLabel
                            value="end"
                            control={
                                <Checkbox
                                    checked={allowProfile}
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
                                    Show Sexual orientation on profile
                                </p>
                            }
                            labelPlacement="end"
                            style={{ marginTop: 80 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                axios
                                    .put(
                                        "/api/sexual_orientation",
                                        {
                                            type: value,
                                            show: allowProfile,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadProfile();
                                        loadUserProfile();
                                        setAllowProfile(false);
                                    })
                                    .catch((error) => {
                                        toast.error(
                                            error.response.data.message
                                        );
                                        console.log(error);
                                    });
                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Description */}

            {setting == "description" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Description</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <TextField
                            id="standard-multiline-static"
                            label="Your Description"
                            multiline
                            rows={3}
                            defaultValue=""
                            variant="outlined"
                            inputProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: "Dosis",
                                    fontWeight: "bold",
                                },
                            }}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                axios
                                    .put(
                                        "/api/profession",
                                        {
                                            description: value,
                                        },
                                        {
                                            headers: {
                                                Accept: "application/json",
                                                Authorization:
                                                    "Bearer " + token,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success(response.data.message);
                                        loadUserProfile();
                                        loadProfile();
                                    })
                                    .catch((error) => {
                                        //  toast.error(error)
                                        console.log(error);
                                    });

                                setSetting("");
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Profile Cover image */}
            {setting == "cover image" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Cover Image</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <img
                            src={
                                cover == null
                                    ? data.photo_profile
                                    : URL.createObjectURL(cover)
                            }
                            onClick={() => {
                                document.getElementById("cover").click();
                            }}
                            style={{
                                width: 146,
                                height: 146,
                                backgroundSize: "contain",
                                borderRadius: 3,
                            }}
                        />
                        <input
                            id="cover"
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let img = e.target.files[0];
                                    setCover(img);
                                }
                            }}
                            style={{ display: "none" }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={imageUpload}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Photos gallery */}

            {setting == "gallery" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Gallery</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>
                        <p
                            style={{
                                color: "#C62251",
                                fontWeight: "bold",
                                marginTop: 3,
                                marginBottom: 21,
                            }}
                        >
                            Upload Pictures for Gallery
                        </p>

                        <Grid
                            spacing={3}
                            direction="row"
                            container
                            style={{ marginInline: "auto" }}
                        >
                            <Grid item>
                                <img
                                    src={
                                        gallery1 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery1)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery1")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "cover",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery1"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery1(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid item>
                                <img
                                    src={
                                        gallery2 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery2)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery2")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "contain",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery2"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery2(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid item>
                                <img
                                    src={
                                        gallery3 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery3)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery3")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "contain",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery3"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery3(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid item>
                                <img
                                    src={
                                        gallery4 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery4)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery4")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "contain",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery4"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery4(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid item>
                                <img
                                    src={
                                        gallery5 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery5)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery5")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "contain",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery5"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery5(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid item>
                                <img
                                    src={
                                        gallery6 == null
                                            ? data.gallery
                                            : URL.createObjectURL(gallery6)
                                    }
                                    onClick={() => {
                                        document
                                            .getElementById("gallery6")
                                            .click();
                                    }}
                                    style={{
                                        width: 95,
                                        backgroundSize: "contain",
                                        borderRadius: 3,
                                    }}
                                />
                                <input
                                    id="gallery6"
                                    type="file"
                                    onChange={(e) => {
                                        if (
                                            e.target.files &&
                                            e.target.files[0]
                                        ) {
                                            let img = e.target.files[0];
                                            setGallery6(img);
                                        }
                                    }}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: 23 }}
                            onClick={() => {
                                const id = toast.loading("Please wait...");
                                let token = ls.get(DATABASE_KEY, {
                                    decrypt: true,
                                });
                                let formData = new FormData();
                                formData.append("gallery1", gallery1);
                                formData.append("gallery2", gallery2);
                                formData.append("gallery3", gallery3);
                                formData.append("gallery4", gallery4);
                                formData.append("gallery5", gallery5);
                                formData.append("gallery6", gallery6);

                                axios
                                    .post("/api/gallery", formData, {
                                        headers: {
                                            "Content-Type":
                                                "multipart/form-data",
                                            Accept: "application/json",
                                            Authorization: "Bearer " + token,
                                        },
                                    })
                                    .then((response) => {
                                        toast.update(id, {
                                            render: response.data.message,
                                            type: "success",
                                            isLoading: false,
                                            autoClose: true,
                                        });

                                        loadProfile();
                                        loadUserProfile();
                                        setSetting("");
                                        setGallery1(null);
                                        setGallery2(null);
                                        setGallery3(null);
                                        setGallery4(null);
                                        setGallery5(null);
                                        setGallery6(null);
                                    })
                                    .catch((error) => {
                                        toast.update(id, {
                                            render: error.response.data.message,
                                            type: "error",
                                            isLoading: false,
                                            autoClose: true,
                                        });
                                    });
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}

            {/* Hobbies */}
            {setting == "hobby" && (
                <div className="container_shadow animate__animated animate__fadeIn">
                    <div className="inner_container animate__animated animate__slideInUp">
                        <div className="nav">
                            <h1>Hobbies & Interest</h1>
                            <button
                                onClick={() => {
                                    setSetting("");
                                }}
                            >
                                <i className="fi fi-rr-cross"></i>
                            </button>
                        </div>

                        <>


                <div
                    id="containerScroll"
                    style={{ marginTop: 23, height: 350, overflowY: "scroll" }}
                >
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        style={{ width: "100%" }}
                    >
                        <Grid item xs>
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                style={{ width: "100%" }}
                            >
                                <Grid item>
                                    <Paper
                                        onClick={() => {
                                            if (cooking.length > 0) {
                                                setCooking("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === cooking
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setHobbies((hobbies) => [
                                                    ...hobbies,
                                                    "cooking",
                                                ]);

                                                setCooking("cooking");

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "cooking",
                                                    ])
                                                );
                                            }
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
                                                cooking.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    cooking.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Cooking
                                        </p>
                                        {cooking.length > 0 ? (
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
                                            if (gaming.length > 0) {
                                                setGaming("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === gaming
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "",
                                                    ])
                                                );
                                            } else {
                                                setGaming("gaming");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("gaming")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "gaming",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies.length);
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
                                                gaming.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    gaming.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Gaming
                                        </p>
                                        {gaming.length > 0 ? (
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
                                            if (gym.length > 0) {
                                                setGym("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === gym
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setGym("gym");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("gym")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "gym",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies);
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
                                                gym.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    gym.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Gym
                                        </p>
                                        {gym.length > 0 ? (
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
                                            if (kpop.length > 0) {
                                                setKpop("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === kpop
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setKpop("kpop");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("kpop")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "kpop",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies);
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
                                                kpop.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    kpop.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            K-Pop
                                        </p>
                                        {kpop.length > 0 ? (
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
                                            if (photography.length > 0) {
                                                setPhotography("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === photography
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setPhotography("photography");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat(
                                                        "photography"
                                                    )
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "photography",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies);
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
                                                photography.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    photography.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Photography
                                        </p>
                                        {photography.length > 0 ? (
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
                                            if (music.length > 0) {
                                                setMusic("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === music
                                                );
                                                hobbies.splice(index, 1);
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setMusic("music");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("music")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "music",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies);
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
                                                music.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    music.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Music
                                        </p>
                                        {music.length > 0 ? (
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
                                            if (netflix.length > 0) {
                                                setNetflix("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === netflix
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setNetflix("netflix & chill");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat(
                                                        "netflix & chill"
                                                    )
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "netflix & chill",
                                                    ])
                                                );
                                            }

                                            console.log(hobbies);
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
                                                netflix.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    netflix.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Netflix & Chill
                                        </p>
                                        {netflix.length > 0 ? (
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
                                            if (beach.length > 0) {
                                                setBeach("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === beach
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setBeach("beach");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("beach")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "beach",
                                                    ])
                                                );
                                            }
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
                                                beach.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    beach.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Beach
                                        </p>
                                        {beach.length > 0 ? (
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
                                            if (sarcasm.length > 0) {
                                                setSarcasm("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === sarcasm
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setSarcasm("sarcasm");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("sarcasm")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "sarcasm",
                                                    ])
                                                );
                                            }
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
                                                sarcasm.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    sarcasm.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Sarcasm
                                        </p>
                                        {sarcasm.length > 0 ? (
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
                                            if (baseball.length > 0) {
                                                setBaseball("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === baseball
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setBaseball("baseball");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("baseball")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "baseball",
                                                    ])
                                                );
                                            }
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
                                                baseball.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    baseball.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Baseball
                                        </p>
                                        {baseball.length > 0 ? (
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
                                            if (manga.length > 0) {
                                                setManga("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === manga
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setManga("manga");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("manga")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "manga",
                                                    ])
                                                );
                                            }
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
                                                manga.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    manga.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Manga
                                        </p>
                                        {manga.length > 0 ? (
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
                                            if (art.length > 0) {
                                                setArt("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === art
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setArt("art");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("art")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "art",
                                                    ])
                                                );
                                            }
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
                                                art.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    art.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Art
                                        </p>
                                        {art.length > 0 ? (
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
                                            if (vegan.length > 0) {
                                                setVegan("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === vegan
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setVegan("vegan");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("vegan")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "vegan",
                                                    ])
                                                );
                                            }
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
                                                vegan.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    vegan.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Vegan
                                        </p>
                                        {vegan.length > 0 ? (
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
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                style={{ width: "100%" }}
                            >
                                <Grid item>
                                    <Paper
                                        onClick={() => {
                                            if (reading.length > 0) {
                                                setReading("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === reading
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setReading("reading");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("reading")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "reading",
                                                    ])
                                                );
                                            }
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
                                                reading.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    reading.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Reading
                                        </p>
                                        {reading.length > 0 ? (
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
                                            if (mountain.length > 0) {
                                                setMountain("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === mountain
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setMountain("mountain");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("mountain")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "mountain",
                                                    ])
                                                );
                                            }
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
                                                mountain.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    mountain.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Mountain
                                        </p>
                                        {mountain.length > 0 ? (
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
                                            if (travelling.length > 0) {
                                                setTravelling("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === travelling
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setTravelling("travelling");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("travelling")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "travelling",
                                                    ])
                                                );
                                            }
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
                                                travelling.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    travelling.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Travelling
                                        </p>
                                        {travelling.length > 0 ? (
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
                                            if (football.length > 0) {
                                                setFootball("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === football
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setFootball("football");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("football")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "football",
                                                    ])
                                                );
                                            }
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
                                                football.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    football.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Football
                                        </p>
                                        {football.length > 0 ? (
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
                                            if (nba.length > 0) {
                                                setNba("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === nba
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setNba("nba");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("nba")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "nba",
                                                    ])
                                                );
                                            }
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
                                                nba.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    nba.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            NBA
                                        </p>
                                        {nba.length > 0 ? (
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
                                            if (hiphop.length > 0) {
                                                setHiphop("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === hiphop
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setHiphop("hip hop");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("hip hop")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "hip hop",
                                                    ])
                                                );
                                            }
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
                                                hiphop.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    hiphop.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Hip Hop
                                        </p>
                                        {hiphop.length > 0 ? (
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
                                            if (athlete.length > 0) {
                                                setAthlete("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === athlete
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setAthlete("athlete");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("athlete")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "athlete",
                                                    ])
                                                );
                                            }
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
                                                athlete.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    athlete.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Athlete
                                        </p>
                                        {athlete.length > 0 ? (
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
                                            if (astrology.length > 0) {
                                                setAstrology("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === astrology
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setAstrology("astrology");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("astrology")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "astrology",
                                                    ])
                                                );
                                            }
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
                                                astrology.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    astrology.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Astrology
                                        </p>
                                        {astrology.length > 0 ? (
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
                                            if (dancing.length > 0) {
                                                setDancing("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === dancing
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setDancing("dancing");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("dancing")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "dancing",
                                                    ])
                                                );
                                            }
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
                                                dancing.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    dancing.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Dancing
                                        </p>
                                        {dancing.length > 0 ? (
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
                                            if (foodie.length > 0) {
                                                setFoodie("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === foodie
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setFoodie("foodie");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("foodie")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "foodie",
                                                    ])
                                                );
                                            }
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
                                                foodie.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    foodie.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Foodie
                                        </p>
                                        {foodie.length > 0 ? (
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
                                            if (anime.length > 0) {
                                                setAnime("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === anime
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setAnime("anime");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("anime")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "anime",
                                                    ])
                                                );
                                            }
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
                                                anime.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    anime.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Anime
                                        </p>
                                        {anime.length > 0 ? (
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
                                            if (marvel.length > 0) {
                                                setMarvel("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === marvel
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setMarvel("marvel movie");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat(
                                                        "marvel movie"
                                                    )
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "marvel movie",
                                                    ])
                                                );
                                            }
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
                                                marvel.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    marvel.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Marvel Movies
                                        </p>
                                        {marvel.length > 0 ? (
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
                                            if (vegetarian.length > 0) {
                                                setVegetarian("");
                                                let index = hobbies.findIndex(
                                                    (e) => e === vegetarian
                                                );
                                                hobbies.splice(index, 1);

                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([...hobbies])
                                                );
                                            } else {
                                                setVegetarian("vegetarian");
                                                setHobbies((hobbies) =>
                                                    hobbies.concat("vegetarian")
                                                );
                                                localStorage.setItem(
                                                    "items",
                                                    JSON.stringify([
                                                        ...hobbies,
                                                        "vegetarian",
                                                    ])
                                                );
                                            }
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
                                                vegetarian.length > 0
                                                    ? "#C62251"
                                                    : "gray",
                                        }}
                                    >
                                        <p
                                            style={{
                                                color:
                                                    vegetarian.length > 0
                                                        ? "#C62251"
                                                        : "gray",
                                            }}
                                        >
                                            Vegetarian
                                        </p>
                                        {vegetarian.length > 0 ? (
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
                </div>

                <Button

                    variant="contained"
                    style={{
                        marginTop: 21,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",
                    }}
                    color="primary"
                    onClick={() => {
                        handleHobby();
                        setSetting("")
                    }}
                >
                    Continue
                </Button>
            </>




                    </div>
                </div>
            )}
        </MainContainer>
    );
}

export default ProfilePanel;
const styles = {
    pink: {
        color: "#C62251",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
};
