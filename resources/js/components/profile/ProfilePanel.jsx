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
    Paper,
} from "@material-ui/core";
import "animate.css";
import axios from "axios";
import { toast } from "react-toastify";

const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";
function ProfilePanel() {
    const navigate = useNavigate();
    const params = useParams();
    const [optionbutton, setOptionbutton] = React.useState(false);
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
        const token = ls.get(DATABASE_KEY, { decrypt: true });

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
                loadUserProfile();
                loadProfile();
                setSetting("");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };
    // Avatar
    const [newavatar, setNewavatar] = React.useState("");
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

    const [profession, setProfession] = React.useState("");
    const [value, setValue] = React.useState("");
    const [height, setHeight] = React.useState(3.0);
    const autoCompleteRef = React.useRef(null);

    const [user, setUser] = React.useState("");
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
    // const getCurrentLocation = () => {
    //     axios
    //         .get("http://ip-api.com/json")
    //         .then((response) => {
    //             console.log(response.data);
    //             const { city, country, countryCode, lat, lon } = response.data;
    //             setQuery(`${city}, ${countryCode} ${country}`);
    //             setLocation({ lat: lat, lon: lon });
    //         })
    //         .catch((error) => {
    //             if (isGeolocationAvailable) {
    //                 if (isGeolocationEnabled) {
    //                     if (coords) {
    //                         setLocation({
    //                             lat: coords.latitude,
    //                             lon: coords.longitude,
    //                         });
    //                     }
    //                 }
    //             }
    //             // console.log(error.response.data);
    //         });
    // };

    let autoComplete;

    // const loadScript = (url, callback) => {
    //     let script = document.createElement("script");
    //     script.type = "text/javascript";

    //     if (script.readyState) {
    //         script.onreadystatechange = function () {
    //             if (
    //                 script.readyState === "loaded" ||
    //                 script.readyState === "complete"
    //             ) {
    //                 script.onreadystatechange = null;
    //                 callback();
    //             }
    //         };
    //     } else {
    //         script.onload = () => callback();
    //     }

    //     script.src = url;
    //     document.getElementsByTagName("head")[0].appendChild(script);
    // };

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
                profileview({ to: params.id, name: db.user.user.name });
            }
        } else {
        }
    }, []);

    const handleProfileView = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        axios
            .post(
                "/api/profile-view",
                {
                    profile: params.id,
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
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

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

                    setUser(data.user);
                    setNewavatar(data.avatar);
                    setProfile(data.profile);
                    setReligion(data.religion);
                    setLocation(data.location);
                    setGallery(data.gallery);
                    setProfession(data.profession);
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

                    console.log(response.data.user);
                    setUser(data.user);
                    setNewavatar(data.avatar);
                    setProfile(data.profile);
                    setReligion(data.religion);
                    setGallery(data.gallery);
                    setProfession(data.profession);
                    setLocation(data.location);
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
        if (hobbies.length > 10) {
            toast.error("You can only choose 10 hobbies.");
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
        // loadScript()
        loadProfile();
        loadUserProfile();
    }, [params]);

    return (
        <MainContainer>
            <div className="px-40 pt-12 bg-white pb-32 border-t-[1px] font-bold">
                {/* first level */}
                <div className="flex flex-row h-[400px]">
                    {/* avatar */}
                    <div className="w-[450px] h-full flex flex-col">
                   
                   <div className="w-full  h-[80%]" style={{
                    background:  `url('/storage/avatar/${newavatar.first_cover}')`
                           ,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
                }}>
                   
                   </div>
                        {/* <img src={profile != null? ` /storage/avatar/${newavatar.first_cover}`:`${data.bg}`} className="w-[100%]" /> */}
                        {/* gallery */}
                        <div className="flex flex-row gap-x-3 mt-1 flex-wrap">
                            {gallery.map((photo, index) => (
                                <img key={index} src={`/storage/gallery/${photo.cover}`} className="w-[54px]" />
                            ))}
                        </div>
                    </div>

                    {/* details */}
                    <div className="w-[100%] pl-12 flex flex-col h-full">
                        <div className="flex flex-row items-center">
                            {/* quote */}
                            <p className=" bg-red-400 p-2 rounded-md self-auto font-bold text-white">Quote here</p>
                            <div className="flex-1" />
                            
                            <button className="mr-3 w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center">
                                <i className="fi fi-sr-heart text-3xl text-white text-center mt-[2px]"></i>
                            </button>
                            <button className="mr-3 w-[60px] h-[60px] rounded-full bg-black flex flex-col justify-center items-center">
                                <i className=" fi fi-sr-comment text-2xl text-white  text-center"></i>
                            </button>
                         
                        </div>

                        {/* name */}
                        <div className="flex flex-row items-center justify-start">
                            <h1 className="font-bold text-2xl tracking-tighter mr-4 uppercase">
                                {profile.name}
                            </h1>
                            <span className="mx-3">
                            <i className="fi fi-sr-user"></i>
                            </span>
                            <span>
                            <i className="fi fi-sr-rec"></i>
                                
                            </span>
                        </div>

                        {/* sex */}
                        <p>Female / Single / ID: {profile.user_id}</p>
                        {/* seeking */}
                        <p>Seeking Male 40 - 59 for: Romance / Dating</p>

                        {/* active online or offline */}
                        <div className="flex flex-row items-center">
                            <p className="flex-1">Last active: 44mins ago</p>
                            <div className="flex flex-row justify-center items-center gap-x-3">
                            <span className="mr-2">
                                <button title={`Add ${profile.name} to your favorite`}><i className="fi fi-sr-star text-3xl"></i></button>
                            </span>
                            <span className="mr-2">
                                <button><h1 className="text-4xl font-bold">!</h1></button>
                            </span>
                            <span>
                            <button title={`Ban ${profile.name}`}><i className="fi fi-rr-ban text-3xl"></i></button>
                            </span>
                            </div>
                        </div>

                        {/* divider */}
                        <div className="border-t-[1px] border-slate-200 h-[1px] mt-1" />

                        {/* table overview */}

                        <table width={"100%"} className="mt-2 flex-1">
                            <thead>
                                <tr className="text-xl text-red-600  m-2 bg-white">
                                    <th>
                                        <p className="flex-1 float-left pl-4 text-2xl">
                                            Overview
                                        </p>
                                    </th>

                                    <th>
                                        <p className="flex-1 float-left pl-6 text-2xl font-bold capitalize">
                                        {profile.name}
                                        </p>
                                    </th>
                                    <th>
                                        <p className="flex-1 float-left pl-4 text-2xl">
                                            She's Looking For
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                <tr>
                                    <td className="bg-zinc-50 px-4">
                                        Education:
                                    </td>
                                    <td className="bg-slate-100 px-4">
                                        No Answer
                                    </td>
                                    <td className="bg-zinc-50 px-4">Any</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-100 px-4">
                                        Have children:
                                    </td>
                                    <td className="bg-zinc-50 px-4">
                                        Yes - don't live at home
                                    </td>
                                    <td className="bg-zinc-100 px-4">Any</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-50 px-4">Drink:</td>
                                    <td className="bg-zinc-100 px-4">
                                        Ocassionally drink
                                    </td>
                                    <td className="bg-zinc-50 px-4">Any</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-100 px-4">
                                        Religion:
                                    </td>
                                    <td className="bg-zinc-50 px-4">
                                        Christian
                                    </td>
                                    <td className="bg-zinc-100 px-4">Any</td>
                                </tr>
                            </tbody>
                        </table>

                       
                    </div>
                </div>

                 {/* match or not match */}

                 <div className="float-right mb-32 mt-12">
                            <span className="mr-4"><i className="fi fi-sr-rec text-green-600"></i> Match</span>
                            <span> <i className="fi fi-sr-rec text-red-600"></i> Not Match</span>
                        </div>

                {/* Members */}
                <h1 className="mt-32 font-bold text-red-600 text-xl">
                    Member Overview
                </h1>
                <div className="flex flex-row">
                    <p className="mr-">A responsible and gentle woman</p>
                    <button>Translate</button>
                </div>

                {/* Seeking */}

                <h1 className="font-bold text-xl text-red-600 mt-20">
                    Seeking
                </h1>
                <p>A partner for life</p>

                <table width={"100%"} className="mt-20 flex-1">
                    <thead>
                        <tr className="bg-white">
                            <th>
                                <p className="flex-1 px-3 float-left font-bold text-xl text-red-700">
                                    Basic
                                </p>
                            </th>
                            <th>
                                <p className="flex-1 float-left font-bold text-xl text-red-700 capitalize">
                                    {profile.name}
                                </p>
                            </th>
                            <th></th>
                            <th>
                                <p className="flex-1 float-left font-bold text-xl text-red-700">
                                    She's Looking For
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className="bg-[#f8f8f8]">
                            <td className="px-3">Gender:</td>
                            <td className="bg-green-100 pl-4 font-bold">
                                Female
                            </td>
                            <td></td>
                            <td className="bg-green-200 ml-4 pl-4">Male</td>
                        </tr>
                        <tr>
                            <td className="px-3">Age:</td>
                            <td className=" ml-4 pl-4 font-bold bg-green-500">
                                44
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-red-300">
                                40 - 59
                            </td>
                        </tr>
                        <tr className="bg-[#f8f8f8]">
                            <td className="px-3">Live in:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e5e5e5]">
                                Douala, Littoral, Cameroon
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#EBEBEB]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Relocate:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Willing to relocate to another country
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>

                        {/* Appearance */}
                        <tr>
                            <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Appearance
                            </p>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffefe] ">
                            <td className="px-3">Hair color:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0f0f0]">
                                Black
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Eye color:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Brown
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Height:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                5' 6" (168 cm)
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Weight:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                40kg (88 lb)
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body style:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                Average
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Ethnicity:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                African
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body art:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                                Other
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0efef]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Appearance:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Attractive
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>

                        {/* Lifestyle */}
                        <tr>
                            <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Lifestyle
                            </p>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffefe] ">
                            <td className="px-3">Drink:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0f0f0]">
                                Occassionally
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Smoke:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Don't smoe
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Marital status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Single
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Have children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Yes - don't live at home
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Number of children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                1
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Oldest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                1
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Youngest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                                No Answer
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0efef]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Want (more) children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                Not Sure
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Have pets:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Cat
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>

                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Occupation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                Construction/Trades
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Employment status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Prefer not to say
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Annual income:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                Prefer not to say
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Living situation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                Live Alone
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                Any
                            </td>
                        </tr>
                        {/* background culture */}
                        <tr>
                            <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Background / Cultural Values
                            </p>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffdfd]">
                            <td className="px-3">Nationality:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f3efefe3]">
                                No Answer
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#dfd9d9]">
                            <td className="px-3">Education:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                No Answer
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fafafa]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f3f0f0]">
                            <td className="px-3">Languages spoken:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f3f1f1]">
                                French
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f1efef]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#eceaea]">
                            <td className="px-3">English ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f1eeee]">
                                Some
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f7f5f5]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f0efef]">
                            <td className="px-3">French ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f7f3f3]">
                                No Answer
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e7e6e6]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f5f3f3]">
                            <td className="px-3">Religion:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e9e7e7]">
                                Christian
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe7e7]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#e9e5e5]">
                            <td className="px-3">Religious values:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#faf5f5]">
                                No Answer
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e4e3e3]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Polygamy:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e2e0e0]">
                                Don't accept polygamy
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f1f1]">
                                Any
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Star sign:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#dbdbdb]">
                                Leo
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                Any
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* More about me */}
                <div className="flex flex-row items-center pr-12 mt-20">
                    <h1 className="font-bold text-red-500 flex-1 text-xl">
                        More About Me
                    </h1>

                    <p className="mr-2">match</p>
                    <p>no match</p>
                </div>
                {/* More about first */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Favorite Movie:
                        </h1>
                        <p>Titanic</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Favorite Music:
                        </h1>
                        <p>Blues, Jazz Old school</p>
                    </span>
                </div>
                {/* More about second */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Dress Style:
                        </h1>
                        <p>Dress Sexy</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Humor:
                        </h1>
                        <p>Say any humor</p>
                    </span>
                </div>
                {/* More about third */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Hobbies & Interests:
                        </h1>
                        <p>Films, Music & baseball</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Personality:
                        </h1>
                        <p>Your personality here</p>
                    </span>
                </div>

                <h1 className="font-bold text-xl text-red-700 mt-12">
                    Safety Tips
                </h1>
                <p   >
                    Becare using common sense and following a few basic
                    precautions its easy to have fun, successful and safe dating
                    experience. Please contact our friendly customer service
                    staff if you need assistance with anything or have any
                    questions.
                </p>
            </div>
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
