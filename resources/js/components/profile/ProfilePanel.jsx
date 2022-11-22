import React,{useState} from "react";
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

    // Slide show for profile images
    const [slideshow, setSlideshow] = React.useState("")
    // Preferences
    const [preferences, setPreferences] = React.useState({})
    const [iam, setIam] = useState("")
    const [lookingfor, setLookingfor] = useState("")
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")

    const [loveQuote, setLoveQuote] = React.useState("No Quote")
    const [memberQuote, setMemberQuote] = React.useState("No Quote")
    const [seekingQuote, setSeekingQuote] = React.useState("No Quote")
    const [datingFor, setDatingFor] = React.useState("No Answer")
    const [gender, setGender] = React.useState("male")
    const [liveInCountry, setLiveInCountry] = useState("No Answer")
    const [liveInState, setLiveInState] = useState("No Answer")
    const [liveInCity, setLiveInCity] = useState("No Answer")

    // states
    const [education, setEducation] = useState("No Answer")
    const [haveChildren, setHaveChildren] = useState("No Answer")
    const [age, setAge] = useState("No Answer")
    const [liveIn, setLiveIn] = useState("No Answer")
    const [relocate, setRelocate] = useState("No Answer")
    const [hairColor, setHairColor] = useState("No Answer")
    const [eyeColor, setEyeColor] = useState("No Answer")
    const [weight, setWeight] = useState("No Answer")
    const [height, setHeight] = useState("No Answer")
    const [smoke, setSmoke] = useState("No Answer")
    const [drink, setDrink] = useState("No Answer")
    const [ethnicity, setEthnicity] = useState("No Answer")
    const [bodyStyle, setBodyStyle] = useState("No Answer")
    const [bodyArt, setBodyArt] = useState("No Answer")
    const [appearance, setAppearance] = useState("No Answer")
    const [maritalStatus, setMaritalStatus] = useState("No Answer")
    const [numberOfChildren, setNumberOfChildren] = useState("No Answer")
    const [oldestChild, setOldestChild] = useState("No Answer")
    const [youngest, setYoungest] = useState("No Answer")
    const [wantMoreChildren, setWantMoreChildren] = useState("No Answer")
    const [havePets, setHavePets] = useState("No Answer")
    const [occupation, setOccupation] = useState("No Answer")
    const [employmentStatus, setEmploymentStatus] = useState("No Answer")
    const [annualIncome, setAnnualIncome] = useState("No Answer")
    const [livingSituation, setLivingSituation] = useState("No Answer")
    const [nationality, setNationality] = useState("No Answer")
    const [languagesSpoken, setLanguagesSpoken] = useState("No Answer")
    const [englishAbility, setEnglishAbility] = useState("No Answer")
    const [frenchAbility, setFrenchAbility] = useState("No Answer")
    const [religiousValue, setReligiousValue] = useState("No Answer")
    const [polygamy, setPolygamy] = useState("No Answer")
    const [starSign, setStarSign] = useState("No Answer")
    const [religion, setReligion] = useState("No Answer")
    const [favoriteMovie, setFavoriteMovie] = useState("No Answer")
    const [favoriteMusic, setFavoriteMusic] = useState("No Answer")
    const [dressStyle, setDressStyle] = useState("No Answer")
    const [humor, setHumor] = useState("No Answer")
    const [hobbiesAndInterest, setHobbiesAndInterest] = useState("No Answer")
    const [personality, setPersonality] = useState("No Answer")


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
    const [cover, setCover] = React.useState(null);


    const { profileview } = React.useContext(SocketContext);
    const [profile, setProfile] = React.useState({});
    const [hover, setHover] = React.useState(false);
    const [setting, setSetting] = React.useState("");

    const [profession, setProfession] = React.useState("");
    const autoCompleteRef = React.useRef(null);

    const [user, setUser] = React.useState("");
    
    const [gallery, setGallery] = React.useState([]);
    //   Preferences hooks
   

    const [distance, setDistance] = React.useState([1, 50]);

    const [allowProfile, setAllowProfile] = React.useState(false);

    function valuetext(value) {
        return `${value}km`;
    }

    //   SET USER CURRENT LOCATION

    const [location, setLocation] = React.useState({});

    
   let autoComplete;

     

   
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
                    console.log("Yours", response.data);
                    let data = response.data.user;

                    setUser(data.user);
                    setNewavatar(data.avatar);
                    setProfile(data.profile);

                    setPreferences(response.data.preference);
                    // setReligion(data.religion);
                    // setLocation(data.location);
                    setGallery(data.gallery);
                    let prof = data.profile;
                   
                    setIam(prof.iam)
                    setLookingfor(prof.lookingfor)
                    setName(prof.name)
                    setBirthday(prof.birthday)
                    setAge(prof.age)
                    setBodyStyle(prof.bodytype)
                    setHeight(prof.height)
                    setSmoke(prof.life_style_smoke)
                    setDrink(prof.life_style_drink)
                    setEducation(prof.education)
                    setHaveChildren(prof.have_children)
                    setLoveQuote(prof.love_quote)
                    setMemberQuote(prof.member_quote )
                    setSeekingQuote(prof.seeking_quote)
                    setGender(prof.gender)
                    setDatingFor(prof.dating_for)
                    setRelocate(prof.relocate)
                    setHairColor(prof.hair_color)
                    setEyeColor(prof.eye_color)
                    setWeight(prof.weight)
                    setEthnicity(prof.ethnicity)
                    setBodyArt(prof.body_art)
                    setAppearance(prof.appearance)
                    setMaritalStatus(prof.marital_status)
                    setNumberOfChildren(prof.number_of_children)
                    setOldestChild(prof.oldest_child)
                    setYoungest(prof.youngest_child)
                    setWantMoreChildren(prof.want_more_children)
                    setHavePets(prof.have_pets)
                    setOccupation(prof.occupation)
                    setEmploymentStatus(prof.employment_status)
                    setAnnualIncome(prof.annual_income)
                    setLivingSituation(prof.living_situation)
                    setNationality(prof.nationality)
                    setLanguagesSpoken(prof.languages_spoken)
                    setEnglishAbility(prof.english_ability)
                    setFrenchAbility(prof.french_ability)
                    setReligiousValue(prof.religious_values)
                    setPolygamy(prof.polygamy)
                    setStarSign(prof.star_sign)
                    setFavoriteMovie(prof.favorite_movie)
                    setFavoriteMusic(prof.favorite_music)
                    setDressStyle(prof.dress_style)
                    setHumor(prof.humor)
                    setReligion(prof.religion)
                    setHobbiesAndInterest(prof.hobbies_interest)
                    setPersonality(prof.personality)


                    if(prof.live_in !== null){

                        setLiveInCountry(prof.live_in.split(',')[0])
                        setLiveInState(prof.live_in.split(',')[1])
                        setLiveInCity(prof.live_in.split(',')[2])
                    }
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

                    console.log(response.data);
                    setUser(data.user);
                    setNewavatar(data.avatar);
                    setProfile(data.profile);
                    setPreferences(response.data.preference);

                    let prof = data.profile;
                setIam(prof.iam)
                setLookingfor(prof.lookingfor)
                setName(prof.name)
                setBirthday(prof.birthday)
                setAge(prof.age)
                setBodyStyle(prof.bodytype)
                setHeight(prof.height)
                setSmoke(prof.life_style_smoke)
                setDrink(prof.life_style_drink)
                setEducation(prof.education)
                setHaveChildren(prof.have_children)
                setLoveQuote(prof.love_quote)
                setMemberQuote(prof.member_quote )
                setSeekingQuote(prof.seeking_quote)
                setGender(prof.gender)
                setDatingFor(prof.dating_for)
                setRelocate(prof.relocate)
                setHairColor(prof.hair_color)
                setEyeColor(prof.eye_color)
                setWeight(prof.weight)
                setEthnicity(prof.ethnicity)
                setBodyArt(prof.body_art)
                setAppearance(prof.appearance)
                setMaritalStatus(prof.marital_status)
                setNumberOfChildren(prof.number_of_children)
                setOldestChild(prof.oldest_child)
                setYoungest(prof.youngest_child)
                setWantMoreChildren(prof.want_more_children)
                setHavePets(prof.have_pets)
                setOccupation(prof.occupation)
                setEmploymentStatus(prof.employment_status)
                setAnnualIncome(prof.annual_income)
                setLivingSituation(prof.living_situation)
                setNationality(prof.nationality)
                setLanguagesSpoken(prof.languages_spoken)
                setEnglishAbility(prof.english_ability)
                setFrenchAbility(prof.french_ability)
                setReligiousValue(prof.religious_values)
                setPolygamy(prof.polygamy)
                setStarSign(prof.star_sign)
                setFavoriteMovie(prof.favorite_movie)
                setFavoriteMusic(prof.favorite_music)
                setDressStyle(prof.dress_style)
                setHumor(prof.humor)
                setReligion(prof.religion)
                setHobbiesAndInterest(prof.hobbies_interest)
                setPersonality(prof.personality)


                
                if(prof.live_in !== null){

                    setLiveInCountry(prof.live_in.split(',')[0])
                    setLiveInState(prof.live_in.split(',')[1])
                    setLiveInCity(prof.live_in.split(',')[2])
                }
                    // setUser(data.user);
                    // setNewavatar(data.avatar);
                    // setProfile(data.profile);
                    // setReligion(data.religion);
                    setGallery(data.gallery);
                    // setProfession(data.profession);
                    // setLocation(data.location);
                    // setHobby(data.hobbies);
                    // setAge(data.preference_age);
                    // setDrink(data.preference_drink);
                    // setSmoke(data.preference_smoke);
                    // setRelationship(data.preference_relationship);
                    // setFood(data.preference_food);
                    // setBodytype(data.preference_bodytype);
                    // setReligions(data.preference_religion);

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
                   
                   <div className="w-full  h-[80%]"  >
                   {slideshow.trim() !== "" ?<img src={`${slideshow}`} width="100%" height="100%" />:<img src={`/storage/avatar/${newavatar.first_cover}`} width="100%" height="100%" />} 
                   </div>
                        {/* <img src={profile != null? ` /storage/avatar/${newavatar.first_cover}`:`${data.bg}`} className="w-[100%]" /> */}
                        {/* gallery */}
                        <div className="flex flex-row gap-x-3 mt-1 flex-wrap">
                        <img onClick={()=>{
                                    setSlideshow("/storage/avatar/"+newavatar.first_cover)
                                }}  src={`/storage/avatar/${newavatar.first_cover}`} className="w-[54px]" />
                        <img onClick={()=>{
                                    setSlideshow("/storage/avatar/"+newavatar.second_cover)
                                }}  src={`/storage/avatar/${newavatar.second_cover}`} className="w-[54px]" />
                            {gallery.map((photo, index) => (
                                <img onClick={()=>{
                                    setSlideshow("/storage/gallery/"+photo.cover)
                                }} key={index} src={`/storage/gallery/${photo.cover}`} className="w-[54px]" />
                            ))}
                        </div>
                    </div>

                    {/* details */}
                    <div className="w-[100%] pl-12 flex flex-col h-full">
                        <div className="flex flex-row items-center">
                            {/* quote */}
                            <p className=" bg-red-400 p-2 rounded-md self-auto font-bold text-white">{profile.love_quote ?? "No quote"}</p>
                            <div className="flex-1" />
                            
                            {params.id !== undefined && <div className="flex flex-row"> 
                            <button className="mr-3 w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center" title={`Like ${name}`}>
                                <i className="fi fi-sr-heart text-3xl text-white text-center mt-[2px]"></i>
                            </button>
                            <Link to={`/messages-single/${profile.user_id}`}  className="mr-6 w-[60px] h-[60px] rounded-full bg-black flex flex-col justify-center items-center"  title={`Send a message to ${name}`}>
                                <i className=" fi fi-sr-comment text-2xl text-white  text-center"></i>
                            </Link>
                            </div>}

                            {params.id === undefined &&  <Link to="/profile-update" className=" w-[60px] h-[60px] rounded-full bg-black flex flex-col justify-center items-center"  title="Update your profile">
                                <i className=" fi fi-rr-edit text-2xl text-white  text-center"></i>
                            </Link>}
                           
                         
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
                        <p className="capitalize">{iam} / {maritalStatus ?? "No answer"} / ID: {profile.user_id}</p>
                        {/* seeking */}
                        <p className="capitalize">Seeking {lookingfor} {preferences !== null ? preferences.age_min  : "No answer"} - {preferences !== null ? preferences.age_max  : "No answer"} for: {datingFor  ?? "No answer"}</p>

                        {/* active online or offline */}
                        <div className="flex flex-row items-center">
                            <p className="flex-1">Last active: 44mins ago</p>
                            {params.id !== undefined && <div className="flex flex-row justify-center items-center gap-x-3">
                            <span className="mr-2">
                                <button title={`Add ${name} to your favorite`}><i className="fi fi-sr-star text-3xl"></i></button>
                            </span>
                            <span className="mr-2">
                                <button title={`"Get to know more about ${name}"`}><h1 className="text-4xl font-bold">!</h1></button>
                            </span>
                            <span>
                            <button title={`Ban ${name}`}><i className="fi fi-rr-ban text-3xl"></i></button>
                            </span>
                            </div>}
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
                                        {name}
                                        </p>
                                    </th>
                                    <th>
                                        <p className="flex-1 float-left pl-4 text-2xl">
                                           {iam === "male" ? "He's":"She's"} Looking For
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
                                        {education  ?? "No answer"}
                                    </td>
                                    <td className="bg-zinc-50 px-4">{preferences !== null ? preferences.education : "No answer"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-100 px-4">
                                        Have children:
                                    </td>
                                    <td className="bg-zinc-50 px-4">
                                        {haveChildren ?? "No answer"}
                                    </td>
                                    <td className="bg-zinc-100 px-4">{preferences !== null ? preferences.have_children : "No answer"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-50 px-4">Drink:</td>
                                    <td className="bg-zinc-100 px-4">
                                        {drink ?? "No answer"}
                                    </td>
                                    <td className="bg-zinc-50 px-4">{preferences !== null ? preferences.drink : "No answer"}</td>
                                </tr>
                                <tr>
                                    <td className="bg-zinc-100 px-4">
                                        Religion:
                                    </td>
                                    <td className="bg-zinc-50 px-4">
                                        {religion ?? "No answer"}
                                    </td>
                                    <td className="bg-zinc-100 px-4">{preferences !== null ? preferences.religion : "No answer"}</td>
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
                    <p className="mr-">{memberQuote ?? "No answer"}</p>
                    <button>Translate</button>
                </div>

                {/* Seeking */}

                <h1 className="font-bold text-xl text-red-600 mt-20">
                    Seeking
                </h1>
                <p>{seekingQuote ?? "No answer"}</p>

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
                                    {profile.name ?? "No answer"}
                                </p>
                            </th>
                            <th></th>
                            <th>
                                <p className="flex-1 float-left font-bold text-xl text-red-700">
                                {iam === "male" ? "He's":"She's"} Looking For
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className="bg-[#f8f8f8]">
                            <td className="px-3">Gender:</td>
                            <td className="bg-green-100 pl-4 font-bold">
                                {iam}
                            </td>
                            <td></td>
                            <td className="bg-green-200 ml-4 pl-4">{lookingfor}</td>
                        </tr>
                        <tr>
                            <td className="px-3">Age:</td>
                            <td className=" ml-4 pl-4 font-bold bg-green-500">
                                {age}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-red-300">
                               {preferences !== null ? preferences.age_min : "No answer"} - {preferences !== null ? preferences.age_max : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f8f8f8]">
                            <td className="px-3">Live in:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e5e5e5]">
                                {liveInCity ?? "No answer"}, {liveInState ?? "No answer"}, {liveInCountry ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#EBEBEB]">
                               {preferences !== null ? preferences.live_in : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Relocate:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {relocate ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.relocate : "No answer"}
                            </td>
                        </tr>

                        {/* Appearance */}
                        <tr>
                            <td>Appearance</td>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffefe] ">
                            <td className="px-3">Hair color:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0f0f0]">
                               {hairColor ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                {preferences !== null ? preferences.hair_color : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Eye color:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                               {eyeColor ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                               {preferences !== null ? preferences.eye_color : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Height:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {height ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {preferences !== null ? preferences.height : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Weight:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {weight ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.weight : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body style:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                {bodyStyle ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                {preferences !== null ? preferences.body_style : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Ethnicity:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {ethnicity ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.ethnicity : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body art:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                               {bodyArt ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0efef]">
                                {preferences !== null ? preferences.body_art : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Appearance:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {appearance ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {preferences !== null ? preferences.appearance : "No answer"}
                            </td>
                        </tr>

                        {/* Lifestyle */}
                        <tr>
                           <td> <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Lifestyle
                            </p></td>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffefe] ">
                            <td className="px-3">Drink:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0f0f0]">
                                {drink ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                {preferences !== null ? preferences.drink : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Smoke:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {smoke ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.smoke : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Marital status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {maritalStatus ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {preferences !== null ? preferences.marital_status : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Have children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {haveChildren ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.have_children : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Number of children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                {numberOfChildren ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                {preferences !== null ? preferences.number_of_children : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Oldest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {oldestChild ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.oldest_child : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Youngest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                                {youngest ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0efef]">
                                {preferences !== null ? preferences.youngest_child : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Want (more) children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                {wantMoreChildren ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                {preferences !== null ? preferences.want_more_children : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Have pets:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {havePets ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                               {preferences !== null ? preferences.have_pets : "No answer"}
                            </td>
                        </tr>

                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Occupation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                {occupation ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                {preferences !== null ? preferences.occupation : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Employment status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {employmentStatus ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {preferences !== null ? preferences.employment_status : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Annual income:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                {annualIncome ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e6e4e4]">
                                {preferences !== null ? preferences.annual_income : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Living situation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {livingSituation ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {preferences !== null ? preferences.living_situation : "No answer"}
                            </td>
                        </tr>
                        {/* background culture */}
                        <tr>
                            <td><p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Background / Cultural Values
                            </p></td>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffdfd]">
                            <td className="px-3">Nationality:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f3efefe3]">
                                {nationality ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffefe]">
                                {preferences !== null ? preferences.nationality : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#dfd9d9]">
                            <td className="px-3">Education:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {education ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fafafa]">
                                {preferences !== null ? preferences.education : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f3f0f0]">
                            <td className="px-3">Languages spoken:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f3f1f1]">
                                {languagesSpoken ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f1efef]">
                                {preferences !== null ? preferences.languages_spoken : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#eceaea]">
                            <td className="px-3">English ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f1eeee]">
                                {englishAbility ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f7f5f5]">
                                {preferences !== null ? preferences.english_ability : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f0efef]">
                            <td className="px-3">French ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f7f3f3]">
                                {frenchAbility ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e7e6e6]">
                                {preferences !== null ? preferences.french_ability : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f5f3f3]">
                            <td className="px-3">Religion:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e9e7e7]">
                                {religion ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe7e7]">
                                {preferences !== null ? preferences.religion : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#e9e5e5]">
                            <td className="px-3">Religious values:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#faf5f5]">
                                {religiousValue ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e4e3e3]">
                                {preferences !== null ? preferences.religious_values : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Polygamy:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e2e0e0]">
                                {polygamy ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f1f1]">
                                {preferences !== null ? preferences.polygamy : "No answer"}
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Star sign:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#dbdbdb]">
                                {starSign ?? "No answer"}
                            </td>
                            <td></td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f5f5f5]">
                                {preferences !== null ? preferences.star_sign : "No answer"}
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
                        <p>{favoriteMovie ?? "No answer"}</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Favorite Music:
                        </h1>
                        <p>{favoriteMusic ?? "No answer"}</p>
                    </span>
                </div>
                {/* More about second */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Dress Style:
                        </h1>
                        <p>{dressStyle ?? "No answer"}</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Humor:
                        </h1>
                        <p>{humor ?? "No answer"}</p>
                    </span>
                </div>
                {/* More about third */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Hobbies & Interests:
                        </h1>
                        <p>{hobbiesAndInterest ?? "No answer"}</p>
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Personality:
                        </h1>
                        <p>{personality ?? "No answer"}</p>
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
