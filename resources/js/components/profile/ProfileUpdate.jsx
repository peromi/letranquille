import React, { useState, useRef, useEffect } from "react";
import "../../../css/profilepanel.scss";
import MainContainer from "../../containers/MainContainer";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SocketContext } from "../../context/SocketContext";
import ls from "localstorage-slim";

import "animate.css";
import axios from "axios";
import { toast } from "react-toastify";
import cities from "../../assets/json/cities.json";
import country from "../../assets/json/country.json";
import states from "../../assets/json/states.json";
import LoadingPage from "../loaders/LoadingPage";

const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";

const ProfileUpdate = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [preferences, setPreferences] = useState({});

    // avatar and gallery
    const [avatar, setAvatar] = useState("");
    const [avatar2, setAvatar2] = useState("");

    const [gallery, setGallery] = useState("");
    const [gallery2, setGallery2] = useState("");
    const [gallery3, setGallery3] = useState("");

    // main section
    const [iam, setIam] = useState("");
    const [lookingfor, setLookingfor] = useState("");
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");

    const [loveQuote, setLoveQuote] = React.useState("No Quote");
    const [memberQuote, setMemberQuote] = React.useState("No Quote");
    const [seekingQuote, setSeekingQuote] = React.useState("No Quote");
    const [datingFor, setDatingFor] = React.useState("No Answer");
    const [gender, setGender] = React.useState("male");
    const [liveInCountry, setLiveInCountry] = useState("No Answer");
    const [liveInState, setLiveInState] = useState("No Answer");
    const [liveInCity, setLiveInCity] = useState("No Answer");

    // states
    const [education, setEducation] = useState("No Answer");
    const [haveChildren, setHaveChildren] = useState("No Answer");
    const [age, setAge] = useState("No Answer");
    const [liveIn, setLiveIn] = useState("No Answer");
    const [relocate, setRelocate] = useState("No Answer");
    const [hairColor, setHairColor] = useState("No Answer");
    const [eyeColor, setEyeColor] = useState("No Answer");
    const [weight, setWeight] = useState("No Answer");
    const [height, setHeight] = useState("No Answer");
    const [smoke, setSmoke] = useState("No Answer");
    const [drink, setDrink] = useState("No Answer");
    const [ethnicity, setEthnicity] = useState("No Answer");
    const [bodyStyle, setBodyStyle] = useState("No Answer");
    const [bodyArt, setBodyArt] = useState("No Answer");
    const [appearance, setAppearance] = useState("No Answer");
    const [maritalStatus, setMaritalStatus] = useState("No Answer");
    const [numberOfChildren, setNumberOfChildren] = useState("No Answer");
    const [oldestChild, setOldestChild] = useState("No Answer");
    const [youngest, setYoungest] = useState("No Answer");
    const [wantMoreChildren, setWantMoreChildren] = useState("No Answer");
    const [havePets, setHavePets] = useState("No Answer");
    const [occupation, setOccupation] = useState("No Answer");
    const [employmentStatus, setEmploymentStatus] = useState("No Answer");
    const [annualIncome, setAnnualIncome] = useState("No Answer");
    const [livingSituation, setLivingSituation] = useState("No Answer");
    const [nationality, setNationality] = useState("No Answer");
    const [languagesSpoken, setLanguagesSpoken] = useState("No Answer");
    const [englishAbility, setEnglishAbility] = useState("No Answer");
    const [frenchAbility, setFrenchAbility] = useState("No Answer");
    const [religiousValue, setReligiousValue] = useState("No Answer");
    const [polygamy, setPolygamy] = useState("No Answer");
    const [starSign, setStarSign] = useState("No Answer");
    const [religion, setReligion] = useState("No Answer");
    const [favoriteMovie, setFavoriteMovie] = useState("No Answer");
    const [favoriteMusic, setFavoriteMusic] = useState("No Answer");
    const [dressStyle, setDressStyle] = useState("No Answer");
    const [humor, setHumor] = useState("No Answer");
    const [hobbiesAndInterest, setHobbiesAndInterest] = useState("No Answer");
    const [personality, setPersonality] = useState("No Answer");

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

    //   Preferences hooks

    const [statesearch, setStatesearch] = React.useState([]);
    const [citysearch, setCitysearch] = React.useState([]);

    const [countrycode, setCountrycode] = React.useState("");
    const [statecode, setStatecode] = React.useState("");
    const [citycode, setCitycode] = React.useState("");
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [currency, setCurrency] = React.useState("");
    const [currencySymbol, setCurrencySymbol] = React.useState("");
    const [flag, setFlag] = React.useState("🇺🇸");

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

    
    
   

    const loadProfile = () => {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {
           

            console.log(db)
            

            console.log("DATA PROFILE ONLY", db.profile);
            // if (params.id !== undefined) {
            //     profileview({ to: params.id, name: profileOnly.name });
            // }
        } else {
        }
    } ;

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
            const db = ls.get(USERDB, { decrypt: true });
            axios
                .get("/api/user-profile", {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + db.token,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    let data = response.data;

                    // setUser(data.user);
                    // setNewavatar(data.avatar);
                    setProfile(data.profile);
                    setPreferences(data.preference);
                    // setReligion(data.religion);
                    // setLocation(data.location);
                    setGallery(data.user.gallery);
                    let prof = data.profile;
                    setIam(prof.iam);
                    setLookingfor(prof.lookingfor);
                    setName(prof.name);
                    setBirthday(prof.birthday);
                    setAge(prof.age);
                    setBodyStyle(prof.bodytype);
                    setHeight(prof.height);
                    setSmoke(prof.life_style_smoke);
                    setDrink(prof.life_style_drink);
                    setEducation(prof.education);
                    setHaveChildren(prof.have_children);
                    setLoveQuote(prof.love_quote);
                    setMemberQuote(prof.member_quote);
                    setSeekingQuote(prof.seeking_quote);
                    setGender(prof.gender);
                    setDatingFor(prof.dating_for);
                    setRelocate(prof.relocate);
                    setHairColor(prof.hair_color);
                    setEyeColor(prof.eye_color);
                    setWeight(prof.weight);
                    setEthnicity(prof.ethnicity);
                    setBodyArt(prof.body_art);
                    setAppearance(prof.appearance);
                    setMaritalStatus(prof.marital_status);
                    setNumberOfChildren(prof.number_of_children);
                    setOldestChild(prof.oldest_child);
                    setYoungest(prof.youngest_child);
                    setWantMoreChildren(prof.want_more_children);
                    setHavePets(prof.have_pets);
                    setOccupation(prof.occupation);
                    setEmploymentStatus(prof.employment_status);
                    setAnnualIncome(prof.annual_income);
                    setLivingSituation(prof.living_situation);
                    setNationality(prof.nationality);
                    setLanguagesSpoken(prof.languages_spoken);
                    setEnglishAbility(prof.english_ability);
                    setFrenchAbility(prof.french_ability);
                    setReligiousValue(prof.religious_values);
                    setPolygamy(prof.polygamy);
                    setStarSign(prof.star_sign);
                    setFavoriteMovie(prof.favorite_movie);
                    setFavoriteMusic(prof.favorite_music);
                    setDressStyle(prof.dress_style);
                    setHumor(prof.humor);
                    setReligion(prof.religion);
                    setHobbiesAndInterest(prof.hobbies_interest);
                    setPersonality(prof.personality);

                    if (prof.live_in !== null) {
                        setLiveInCountry(prof.live_in.split(",")[0]);
                        setLiveInState(prof.live_in.split(",")[1]);
                        setLiveInCity(prof.live_in.split(",")[2]);
                    }
                });
        } else {
      
            const db = ls.get(USERDB, { decrypt: true });
            axios
                .get("/api/user-profile/" + params.id, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + db.token,
                    },
                })
                .then((response) => {
                    let data = response.data;

                    console.log(data.user);
                    // setUser(data.user);
                    setNewavatar(data.avatar);
                    setProfile(data.profile);
                    setPreferences(data.preference);

                    let prof = data.profile;
                    setIam(prof.iam);
                    setLookingfor(prof.lookingfor);
                    setName(prof.name);
                    setBirthday(prof.birthday);
                    setAge(prof.age);
                    setBodyStyle(prof.bodytype);
                    setHeight(prof.height);
                    setSmoke(prof.life_style_smoke);
                    setDrink(prof.life_style_drink);
                    setEducation(prof.education);
                    setHaveChildren(prof.have_children);
                    setLoveQuote(prof.love_quote);
                    setMemberQuote(prof.member_quote);
                    setSeekingQuote(prof.seeking_quote);
                    setGender(prof.gender);
                    setDatingFor(prof.dating_for);
                    setRelocate(prof.relocate);
                    setHairColor(prof.hair_color);
                    setEyeColor(prof.eye_color);
                    setWeight(prof.weight);
                    setEthnicity(prof.ethnicity);
                    setBodyArt(prof.body_art);
                    setAppearance(prof.appearance);
                    setMaritalStatus(prof.marital_status);
                    setNumberOfChildren(prof.number_of_children);
                    setOldestChild(prof.oldest_child);
                    setYoungest(prof.youngest_child);
                    setWantMoreChildren(prof.want_more_children);
                    setHavePets(prof.have_pets);
                    setOccupation(prof.occupation);
                    setEmploymentStatus(prof.employment_status);
                    setAnnualIncome(prof.annual_income);
                    setLivingSituation(prof.living_situation);
                    setNationality(prof.nationality);
                    setLanguagesSpoken(prof.languages_spoken);
                    setEnglishAbility(prof.english_ability);
                    setFrenchAbility(prof.french_ability);
                    setReligiousValue(prof.religious_values);
                    setPolygamy(prof.polygamy);
                    setStarSign(prof.star_sign);
                    setFavoriteMovie(prof.favorite_movie);
                    setFavoriteMusic(prof.favorite_music);
                    setDressStyle(prof.dress_style);
                    setHumor(prof.humor);
                    setReligion(prof.religion);
                    setHobbiesAndInterest(prof.hobbies_interest);
                    setPersonality(prof.personality);

                    if (prof.live_in !== null) {
                        setLiveInCountry(prof.live_in.split(",")[0]);
                        setLiveInState(prof.live_in.split(",")[1]);
                        setLiveInCity(prof.live_in.split(",")[2]);
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
                }).catch((e)=>{
                    alert(e)
                });
        }
    };

    const imageUpload = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        // let ids = toast.loading("Please wait...");
        // if (token == null) {
        //     return;
        // }
        // if (hobbies.length > 10) {
        //     toast.error("You can only choose 10 hobbies.");
        //     return;
        // }
        let formData = new FormData();
        formData.append("cover", avatar);

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
                // toast.update(ids, {
                //     render: "Something went wrong",
                //     type: "error",
                //     isLoading: false,
                //     autoClose: true,
                // });

                toast.error(error);
            });
    };

    var ageArray = [];

    for (let i = 19; i <= 80; i++) {
        ageArray.push(i);
    }

    function loadUser() {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {
            console.log(db);
            setProfile(db.user.user);
        }
    }

    const updateImageAvatarAndGallery = () => {
        const db = ls.get(USERDB, { decrypt: true });

        setLoading(true)

        
        let formData = new FormData();
        formData.append("avatar", avatar);
        formData.append("avatar2", avatar2);
        formData.append("gallery", gallery);
        formData.append("gallery2", gallery2);
        formData.append("gallery3", gallery3);

        formData.append("iam", gender);
        formData.append("lookingfor", lookingfor);
        formData.append("name", name);
        formData.append("birthday", birthday);
        formData.append("age", age);
        formData.append("bodytype", bodyStyle);
        formData.append("height", height);
        formData.append("life_style_smoke", smoke);
        formData.append("life_style_drink", drink);
        formData.append("education", education);
        formData.append("have_children", haveChildren);
        formData.append("love_quote", loveQuote);
        formData.append("member_quote", memberQuote);
        formData.append("seeking_quote", seekingQuote);
        formData.append("gender", gender);
        formData.append("dating_for", datingFor);
        formData.append(
            "live_in",
            liveInCountry + "," + liveInState + "," + liveInCity
        );
        formData.append("relocate", relocate);
        formData.append("hair_color", hairColor);
        formData.append("eye_color", eyeColor);
        formData.append("weight", weight);
        formData.append("ethnicity", ethnicity);
        formData.append("body_art", bodyArt);
        formData.append("appearance", appearance);
        formData.append("marital_status", maritalStatus);
        formData.append("number_of_children", numberOfChildren);
        formData.append("oldest_child", oldestChild);
        formData.append("youngest_child", youngest);
        formData.append("want_more_children", wantMoreChildren);
        formData.append("have_pets", havePets);
        formData.append("occupation", occupation);
        formData.append("employment_status", employmentStatus);
        formData.append("annual_income", annualIncome);
        formData.append("living_situation", livingSituation);
        formData.append("nationality", nationality);
        formData.append("languages_spoken", languagesSpoken);
        formData.append("english_ability", englishAbility);
        formData.append("french_ability", frenchAbility);
        formData.append("religious_values", religiousValue);
        formData.append("polygamy", polygamy);
        formData.append("star_sign", starSign);
        formData.append("favorite_movie", favoriteMovie);
        formData.append("favorite_music", favoriteMusic);
        formData.append("dress_style", dressStyle);
        formData.append("humor", humor);
        formData.append("religion", religion);
        formData.append("hobbies_interest", hobbiesAndInterest);
        formData.append("personality", personality);

        axios
            .post("/api/user-avatar-update", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Authorization: "Bearer " + db.token,
                },
            })
            .then((response) => {
                console.log(response.data);

               

                ls.set(
                    USERDB,
                    { user: db.user, token: db.token, profile: response.data.profile, preference: db.preference},
                    { encrypt: true })


                    setLoading(false)
            }).catch((e)=>{
                setLoading(false)
            });
    };

    const updateProfile = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        let db = ls.get(USERDB, { decrypt: true });

        var userid = db.user.user;

        axios
            .put(
                `/api/profile/${userid.user_id}`,
                {
                    iam: gender,
                    lookingfor: lookingfor,
                    name: name,
                    birthday: birthday,
                    age: age,
                    bodytype: bodyStyle,
                    height: height,
                    life_style_smoke: smoke,
                    life_style_drink: drink,
                    education: education,
                    have_children: haveChildren,
                    love_quote: loveQuote,
                    member_quote: memberQuote,
                    seeking_quote: seekingQuote,
                    gender: gender,
                    dating_for: datingFor,
                    live_in:
                        liveInCountry + "," + liveInState + "," + liveInCity,
                    relocate: relocate,
                    hair_color: hairColor,
                    eye_color: eyeColor,
                    weight: weight,
                    ethnicity: ethnicity,
                    body_art: bodyArt,
                    appearance: appearance,
                    marital_status: maritalStatus,
                    number_of_children: numberOfChildren,
                    oldest_child: oldestChild,
                    youngest_child: youngest,
                    want_more_children: wantMoreChildren,
                    have_pets: havePets,
                    occupation: occupation,
                    employment_status: employmentStatus,
                    annual_income: annualIncome,
                    living_situation: livingSituation,
                    nationality: nationality,
                    languages_spoken: languagesSpoken,
                    english_ability: englishAbility,
                    french_ability: frenchAbility,
                    religious_values: religiousValue,
                    polygamy: polygamy,
                    star_sign: starSign,
                    favorite_movie: favoriteMovie,
                    favorite_music: favoriteMusic,
                    dress_style: dressStyle,
                    humor: humor,
                    religion: religion,
                    hobbies_interest: hobbiesAndInterest,
                    personality: personality,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                let prof = res.data.profile;
                setIam(prof.gender);
                setLookingfor(prof.lookingfor);
                setName(prof.name);
                setBirthday(prof.birthday);
                setAge(prof.age);
                setBodyStyle(prof.bodytype);
                setHeight(prof.height);
                setSmoke(prof.life_style_smoke);
                setDrink(prof.life_style_drink);
                setEducation(prof.education);
                setHaveChildren(prof.have_children);
                setLoveQuote(prof.love_quote);
                setMemberQuote(prof.member_quote);
                setSeekingQuote(prof.seeking_quote);
                setGender(prof.gender);
                setDatingFor(prof.dating_for);
                setRelocate(prof.relocate);
                setHairColor(prof.hair_color);
                setEyeColor(prof.eye_color);
                setWeight(prof.weight);
                setEthnicity(prof.ethnicity);
                setBodyArt(prof.body_art);
                setAppearance(prof.appearance);
                setMaritalStatus(prof.marital_status);
                setNumberOfChildren(prof.number_of_children);
                setOldestChild(prof.oldest_child);
                setYoungest(prof.youngest_child);
                setWantMoreChildren(prof.want_more_children);
                setHavePets(prof.have_pets);
                setOccupation(prof.occupation);
                setEmploymentStatus(prof.employment_status);
                setAnnualIncome(prof.annual_income);
                setLivingSituation(prof.living_situation);
                setNationality(prof.nationality);
                setLanguagesSpoken(prof.languages_spoken);
                setEnglishAbility(prof.english_ability);
                setFrenchAbility(prof.french_ability);
                setReligiousValue(prof.religious_values);
                setPolygamy(prof.polygamy);
                setStarSign(prof.star_sign);
                setFavoriteMovie(prof.favorite_movie);
                setFavoriteMusic(prof.favorite_music);
                setDressStyle(prof.dress_style);
                setHumor(prof.humor);
                setReligion(prof.religion);
                setHobbiesAndInterest(prof.hobbies_interest);
                setPersonality(prof.personality);

                if (prof.live_in !== null) {
                    setLiveInCountry(prof.live_in.split(",")[0]);
                    setLiveInState(prof.live_in.split(",")[1]);
                    setLiveInCity(prof.live_in.split(",")[2]);
                }
            })
            .catch((e) => {
                alert(e);
            });
    };

    React.useEffect(() => {
        // loadScript()
        loadUser();
        loadProfile();
        loadUserProfile();
    }, []);

    let profileImage = document.getElementById("avatar");
    let profileImage2 = document.getElementById("avatar2");

    let galleryImage = document.getElementById("gallery");
    let galleryImage2 = document.getElementById("gallery2");
    let galleryImage3 = document.getElementById("gallery3");


    if (loading) {
        return <LoadingPage />;
    }
    return (
        <MainContainer>
            <div className="px-40 pt-12 bg-white pb-32 border-t-[1px] font-bold">
                <h1 className="font-bold text-xl mb-2">Profile Update</h1>
                {/* first level */}
                <div className="flex flex-row ">
                    {/* details */}
                    <div className="w-full flex flex-col ">
                        {/* name */}
                        <div className="flex flex-row items-center justify-start">
                            <h1
                                className="font-bold text-2xl tracking-tighter mr-4 uppercase"
                                title={name}
                            >
                                {name}
                            </h1>
                        </div>

                        {/* sex */}

                        {/* seeking */}

                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="ring-1 ring-slate-900/7 h-[40px]   my-2 w-full"
                            title="You can edit your name here"
                        />
                        <p className="mt-3 font-bold">Birthday</p>
                        <input
                            required
                            type="date"
                            placeholder="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className="ring-1 ring-slate-900/7 h-[40px]   my-2 w-full"
                            title="You can edit your birthday here"
                        />
                        <input
                            type="text"
                            placeholder="Your love quote"
                            value={loveQuote}
                            onChange={(e) => setLoveQuote(e.target.value)}
                            className="ring-1 ring-slate-900/7 h-[40px]   my-2 w-full"
                            title="You can edit your love quote here"
                        />

                        <div className="flex flex-row ring-1 ring-slate-900/7">
                            <select
                                required
                                className="w-full h-[40px]"
                                value={lookingfor}
                                onChange={(e) => setLookingfor(e.target.value)}
                                title="What gender do you seek?"
                            >
                                <option value="">Seeking</option>
                                <option>male</option>
                                <option>female</option>
                            </select>

                            {/* age */}

                            {/* <select className="w-full h-[40px]">
                                    <option>From age</option>
                                    {ageArray.map((age, index)=><option key={index}>{age}</option>)} 
                                </select>

                                <select className="w-full h-[40px]">
                                    <option>to age</option>
                                    {ageArray.map((age, index)=><option key={index}>{age}</option>)} 
                                </select> */}
                        </div>
                        {/* active online or offline */}

                        <input
                            type="text"
                            title="Why do you want to have a date?"
                            value={datingFor}
                            onChange={(e) => setDatingFor(e.target.value)}
                            placeholder="Reason for dating..."
                            className="my-2 ring-1 ring-slate-900/7 h-[40px]"
                        />

                        <p className="mt-4">
                            Profile Pictures (first & second)
                        </p>
                        <input
                            type="file"
                            placeholder=""
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setAvatar(e.target.files[0]);
                                }
                            }}
                            id="avatar"
                            className="hidden"
                            accept="image/*"
                        />
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setAvatar2(e.target.files[0]);
                                }
                            }}
                            id="avatar2"
                            className="hidden"
                            accept="image/*"
                        />

                        {/* divider */}

                        {/* table overview */}

                        <div className="flex flex-row ring-1 ring-slate-900/5 p-2  bg-zinc-50 items-center">
                            {avatar !== "" && (
                                <img
                                    src={URL.createObjectURL(avatar)}
                                     
                                    width={120}
                                />
                            )}
                            <p className="flex-1">
                                {avatar === ""
                                    ? "Select image for your profile"
                                    : avatar.name}
                            </p>

                            <button
                                className="p-2 bg-slate-400 rounded-full px-12"
                                onClick={() => {
                                    profileImage.click();
                                }}
                            >
                                Browse
                            </button>
                        </div>

                        <p className="my-4">Second Profile Picture</p>
                        <div className="flex flex-row ring-1 ring-slate-900/5 p-2  bg-zinc-50 items-center">
                            {avatar2 !== "" &&  
                                <img
                                    src={URL.createObjectURL(avatar2)}
                                    
                                    width={120}
                                />
                           }
                            <p className="flex-1">
                                {avatar2 === ""
                                    ? "Select image for your profile"
                                    : avatar2.name}
                            </p>

                            <button
                                className="p-2 bg-slate-400 rounded-full px-12"
                                onClick={() => {
                                    profileImage2.click();
                                }}
                            >
                                Browse
                            </button>
                        </div>

                        <p className="mt-4">
                            Upload image to add to gallery (upload upto 3 or
                            more)
                        </p>
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setGallery(e.target.files[0]);
                                }
                            }}
                            
                            id="gallery"
                            className="hidden"
                            accept="image/*"
                        />
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setGallery2(e.target.files[0]);
                                }
                            }}
                            id="gallery2"
                            className="hidden"
                            accept="image/*"
                        />
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setGallery3(e.target.files[0]);
                                }
                            }}
                            id="gallery3"
                            className="hidden"
                            accept="image/*"
                        />

<div className="flex flex-row ring-1 ring-slate-900/5 p-2  bg-zinc-50 items-center">
                            
                            <p className="flex-1">Select image for your gallery</p>

                            <button
                                className="p-2 bg-slate-400 rounded-full px-12"
                                onClick={() => {
                                    galleryImage.click();
                                }}
                            >
                                Browse
                            </button>
                        </div>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2  bg-zinc-50 items-center">
                            
                            <p className="flex-1"> Select image for your gallery  
                            </p>

                            <button
                                className="p-2 bg-slate-400 rounded-full px-12"
                                onClick={() => {
                                    galleryImage2.click();
                                }}
                            >
                                Browse
                            </button>
                        </div>
<div className="flex flex-row ring-1 ring-slate-900/5 p-2  bg-zinc-50 items-center">
                            
                            <p className="flex-1">
                              Select image for your gallery 
                            </p>

                            <button
                                className="p-2 bg-slate-400 rounded-full px-12"
                                onClick={() => {
                                    galleryImage3.click();
                                }}
                            >
                                Browse
                            </button>
                        </div>

                 
                    </div>
                </div>

                {/* match or not match */}

                {/* <div className="float-right mb-32 mt-12">
                            <span className="mr-4"><i className="fi fi-sr-rec text-green-600"></i> Match</span>
                            <span> <i className="fi fi-sr-rec text-red-600"></i> Not Match</span>
                        </div> */}

                {/* Members */}
                <h1 className="mt-32 font-bold text-red-600 text-xl">
                    Member Quote
                </h1>

                <p>
                    <input
                        value={memberQuote}
                        onChange={(e) => setMemberQuote(e.target.value)}
                        placeholder="What kind of person are you desiring?"
                        className="bg-zinc-100 p-2 flex-1 border-0 rounded-md w-full"
                    />
                </p>

                {/* Seeking */}

                <h1 className="font-bold text-xl text-red-600 mt-20">
                    Seeking
                </h1>
                <p>
                    <input
                        value={seekingQuote}
                        onChange={(e) => setSeekingQuote(e.target.value)}
                        placeholder="Seeking quote"
                        className="bg-zinc-100 p-2 flex-1 border-0 rounded-md w-full"
                    />
                </p>

                <table width={"100%"} className="mt-20">
                    <thead>
                        <tr className="bg-white">
                            <th>
                                <p className="flex-1 px-3 float-left font-bold text-xl text-red-700">
                                    Basic
                                </p>
                            </th>
                            <th>
                                <p className="flex-1 float-left font-bold text-xl text-red-700 capitalize">
                                    {name}
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className=" ">
                            <td className="px-3">Gender:</td>
                            <td className="ml-4 pl-4 font-bold ring-1 ">
                                <select
                                    required
                                    className="w-full h-[40px]"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3">Age:</td>
                            <td className="ml-4 pl-4 font-bold flex-1 ">
                                <select
                                    className="w-full h-[40px]"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                >
                                    {ageArray.map((n, i) => (
                                        <option key={i}>{n}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="px-3">Live in:</td>
                            <td className="ml-4 pl-4 font-bold ">
                                {/* Douala, Littoral, Cameroon */}
                                <div className="w-full ring-1 ring-slate-900/5 flex flex-row justify-evenly ">
                                    <select
                                        className=" h-[40px]"
                                        onChange={(e) => {
                                            let result = states.filter(
                                                (s) =>
                                                    s.country_code ==
                                                    e.target.value
                                            );
                                            setStatesearch(result);
                                            console.log(result.length);
                                            setCountrycode(e.target.value);

                                            setLiveInCountry(
                                                e.target.options[
                                                    e.target.selectedIndex
                                                ].text
                                            );
                                        }}
                                    >
                                        <option>Select country</option>
                                        <option>Any</option>
                                        {country.map((c, index) => (
                                            <option
                                                key={index}
                                                value={c.code}
                                                selected={
                                                    liveInCountry === c.name
                                                }
                                            >
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>

                                    {/* state */}
                                    <select
                                        className="h-[40px] "
                                        onChange={(e) => {
                                            let result = cities.filter(
                                                (c) =>
                                                    c.state_code ==
                                                        e.target.value &&
                                                    c.country_code ==
                                                        countrycode
                                            );
                                            console.log(result.length);
                                            setCitysearch(result);
                                            setStatecode(e.target.value);

                                            setLiveInState(
                                                e.target.options[
                                                    e.target.selectedIndex
                                                ].text
                                            );
                                        }}
                                    >
                                        <option>Select state</option>
                                        <option>Any</option>
                                        {statesearch.map((s, index) => (
                                            <option
                                                key={index}
                                                value={s.state_code}
                                                selected={
                                                    liveInState === s.name
                                                }
                                            >
                                                {s.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* city */}
                                    <select
                                        className="h-[40px]"
                                        value={citycode}
                                        onChange={(e) => {
                                            setCitycode(e.target.value);
                                            let result = cities.filter(
                                                (c) => c.name == e.target.value
                                            );

                                            console.log(result);

                                            setCountrycode(
                                                result[0].country_code
                                            );
                                            setStatecode(result[0].state_code);

                                            setLiveInCity(
                                                e.target.options[
                                                    e.target.selectedIndex
                                                ].text
                                            );
                                        }}
                                    >
                                        <option>Select city</option>
                                        <option>Any</option>
                                        {citysearch.map((c, index) => (
                                            <option
                                                key={index}
                                                selected={liveInCity === c.name}
                                            >
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Relocate:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={relocate}
                                    onChange={(e) =>
                                        setRelocate(e.target.value)
                                    }
                                >
                                    <option>
                                        Willing to relocate to another country
                                    </option>
                                    <option>
                                        Not willing to relocate to another
                                        country
                                    </option>
                                </select>
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
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={hairColor}
                                    onChange={(e) =>
                                        setHairColor(e.target.value)
                                    }
                                >
                                    <option>Black</option>
                                    <option>Brown</option>
                                    <option>White</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Eye color:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={eyeColor}
                                    onChange={(e) =>
                                        setEyeColor(e.target.value)
                                    }
                                >
                                    <option>Black</option>
                                    <option>Brown</option>
                                    <option>Green</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Height:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                {/* 5' 6" (168 cm) */}
                                <select
                                    required
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                >
                                    <option>5' 6" (170 cm)</option>
                                    <option>6' (183 cm)</option>
                                    <option>6' 5" (198 cm)</option>
                                    <option>7' 5" (229 cm)</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Weight:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {/* 40kg (88 lb) */}
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                >
                                    <option>40kg (88 lb)</option>
                                    <option>48kg (105 lb)</option>
                                    <option>50kg (110 lb)</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body style:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={bodyStyle}
                                    onChange={(e) =>
                                        setBodyStyle(e.target.value)
                                    }
                                >
                                    <option>Slim</option>
                                    <option>Average</option>
                                    <option>Curvy</option>
                                    <option>Muscular</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Ethnicity:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                {/* <input
                                    type="text"
                                    placeholder="Type your ethnic"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={ethnicity}
                                    onChange={(e) =>
                                        setEthnicity(e.target.value)
                                    }
                                /> */}

                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={ethnicity}
                                    onChange={(e) =>
                                        setEthnicity(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Please specify your ethnicity
                                    </option>
                                    <option>Caucasian</option>
                                    <option>African-American</option>
                                    <option>Latino or Hispanic</option>
                                    <option>Asian</option>
                                    <option>Native American</option>
                                    <option>
                                        Native Hawaiian or Pacific Islander
                                    </option>
                                    <option>Two or More</option>
                                    <option>Other/Unknown</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Body art:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={bodyArt}
                                    onChange={(e) => setBodyArt(e.target.value)}
                                >
                                    <option>Yes</option>
                                    <option>No</option>
                                    <option>Other</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Appearance:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={appearance}
                                    onChange={(e) =>
                                        setAppearance(e.target.value)
                                    }
                                >
                                    <option>Sexy</option>
                                    <option>Charming</option>
                                    <option>Attractive</option>
                                    <option>Beautiful</option>
                                    <option>Handsome</option>
                                    <option>No Answer</option>
                                </select>
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
                                {/* Occassionally */}
                                <select
                                    required
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={drink}
                                    onChange={(e) => setDrink(e.target.value)}
                                >
                                    <option>I don't drink</option>
                                    <option>Yes I drink</option>
                                    <option>Occassionally</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#ebe9e9]">
                            <td className="px-3">Smoke:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    required
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={smoke}
                                    onChange={(e) => setSmoke(e.target.value)}
                                >
                                    <option>I don't smoke</option>
                                    <option>Yes I smoke</option>
                                    <option>Occassionally</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#d6d5d5]">
                            <td className="px-3">Marital status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#fffdfd]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={maritalStatus}
                                    onChange={(e) =>
                                        setMaritalStatus(e.target.value)
                                    }
                                >
                                    <option>Single</option>
                                    <option>Married</option>
                                    <option>Divorced</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#fffefe]">
                            <td className="px-3">Have children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={haveChildren}
                                    onChange={(e) =>
                                        setHaveChildren(e.target.value)
                                    }
                                >
                                    <option>Yes - don't live at home</option>
                                    <option>Yes - they live at home</option>
                                    <option>No</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Number of children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={numberOfChildren}
                                    onChange={(e) =>
                                        setNumberOfChildren(e.target.value)
                                    }
                                >
                                    <option>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#ffffff]">
                            <td className="px-3">Oldest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={oldestChild}
                                    onChange={(e) =>
                                        setOldestChild(e.target.value)
                                    }
                                >
                                    <option>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Youngest child:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ebe8e8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={youngest}
                                    onChange={(e) =>
                                        setYoungest(e.target.value)
                                    }
                                >
                                    <option>None</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Want (more) children:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={wantMoreChildren}
                                    onChange={(e) =>
                                        setWantMoreChildren(e.target.value)
                                    }
                                >
                                    <option>No</option>
                                    <option>Not Sure</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Have pets:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <input
                                    type="text"
                                    placeholder="Type of pets"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={havePets}
                                    onChange={(e) =>
                                        setHavePets(e.target.value)
                                    }
                                />
                            </td>
                        </tr>

                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Occupation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                <input
                                    type="text"
                                    placeholder="Occupation"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={occupation}
                                    onChange={(e) =>
                                        setOccupation(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Employment status:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <input
                                    type="text"
                                    placeholder="Employment status"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={employmentStatus}
                                    onChange={(e) =>
                                        setEmploymentStatus(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#fcf9f9]">
                            <td className="px-3">Annual income:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#ffffff]">
                                <input
                                    type="text"
                                    placeholder="Annual income"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={annualIncome}
                                    onChange={(e) =>
                                        setAnnualIncome(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#ebeaea]">
                            <td className="px-3">Living situation:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={livingSituation}
                                    onChange={(e) =>
                                        setLivingSituation(e.target.value)
                                    }
                                >
                                    <option>Live Alone</option>
                                    <option>Live with family</option>
                                    <option>No Answer</option>
                                </select>
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
                                <input
                                    type="text"
                                    placeholder="Nationality"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={nationality}
                                    onChange={(e) =>
                                        setNationality(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#dfd9d9]">
                            <td className="px-3">Education:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={education}
                                    onChange={(e) =>
                                        setEducation(e.target.value)
                                    }
                                >
                                    <option value="">
                                        What is the highest degree or level of
                                        education you have completed?
                                    </option>

                                    <option>Some High School</option>
                                    <option>High School</option>
                                    <option>Bachelor's Degree</option>
                                    <option>Master's Degree</option>
                                    <option>Ph.D. or higher</option>
                                    <option>Trade School</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f3f0f0]">
                            <td className="px-3">Languages spoken:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f3f1f1]">
                                <input
                                    type="text"
                                    placeholder="Eg. English, French, German Spanish..."
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={languagesSpoken}
                                    onChange={(e) =>
                                        setLanguagesSpoken(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#eceaea]">
                            <td className="px-3">English ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f1eeee]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={englishAbility}
                                    onChange={(e) =>
                                        setEnglishAbility(e.target.value)
                                    }
                                >
                                    <option>Yes</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f0efef]">
                            <td className="px-3">French ability:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f7f3f3]">
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={frenchAbility}
                                    onChange={(e) =>
                                        setFrenchAbility(e.target.value)
                                    }
                                >
                                    <option>Yes</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f5f3f3]">
                            <td className="px-3">Religion:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e9e7e7]">
                                <input
                                    type="text"
                                    placeholder="Religion"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={religion}
                                    onChange={(e) =>
                                        setReligion(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#e9e5e5]">
                            <td className="px-3">Religious values:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#faf5f5]">
                                <input
                                    type="text"
                                    placeholder="Religious values"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={religiousValue}
                                    onChange={(e) =>
                                        setReligiousValue(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Polygamy:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#e2e0e0]">
                                {/* Don't accept polygamy */}
                                <select
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={polygamy}
                                    onChange={(e) =>
                                        setPolygamy(e.target.value)
                                    }
                                >
                                    <option>Don't accept polygamy</option>
                                    <option>I accept polygamy</option>
                                    <option>No Answer</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-[#f2f2f2]">
                            <td className="px-3">Star sign:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#dbdbdb]">
                                <input
                                    type="text"
                                    placeholder="Eg. Leo, Pisces, Libra"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={starSign}
                                    onChange={(e) =>
                                        setStarSign(e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* More about me */}
                <div className="flex flex-row items-center pr-12 mt-20">
                    <h1 className="font-bold text-red-500 flex-1 text-xl">
                        More About Me
                    </h1>
                </div>
                {/* More about first */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Favorite Movie:
                        </h1>
                        {/* <p>Titanic</p> */}
                        <input
                            type="text"
                            value={favoriteMovie}
                            onChange={(e) => setFavoriteMovie(e.target.value)}
                            placeholder="eg Movie Title"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Favorite Music:
                        </h1>
                        {/* <p>Blues, Jazz Old school</p> */}
                        <input
                            type="text"
                            value={favoriteMusic}
                            onChange={(e) => setFavoriteMusic(e.target.value)}
                            placeholder="Eg. Music genre"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                </div>
                {/* More about second */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Dress Style:
                        </h1>
                        {/* <p>Dress Sexy</p>
                         */}
                        <input
                            type="text"
                            value={dressStyle}
                            onChange={(e) => setDressStyle(e.target.value)}
                            placeholder="Eg. Sexy"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Humor:
                        </h1>
                        {/* <p>Say any humor</p> */}
                        <input
                            type="text"
                            value={humor}
                            onChange={(e) => setHumor(e.target.value)}
                            placeholder="Humourous words"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                </div>
                {/* More about third */}
                <div className="flex flex-row justify-between mt-8 font-bold">
                    <span>
                        <h1 className="font-bold text-xl  text-red-600">
                            Hobbies & Interests:
                        </h1>
                        {/* <p>Films, Music & baseball</p> */}

                        <input
                            type="text"
                            value={hobbiesAndInterest}
                            onChange={(e) =>
                                setHobbiesAndInterest(e.target.value)
                            }
                            placeholder="Hobbies & Interest"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                    <span>
                        <h1 className="font-bold text-xl text-red-600">
                            Personality:
                        </h1>
                        {/* <p>Your personality here</p> */}
                        <input
                            type="text"
                            value={personality}
                            onChange={(e) => setPersonality(e.target.value)}
                            placeholder="Your personality"
                            className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                        />
                    </span>
                </div>

                <button
                    onClick={() => {

                        let year = new Date(birthday);

                        let date = new Date()

                      

                    if((date.getFullYear() - year.getFullYear()) > 17){updateImageAvatarAndGallery();}else{
                        alert("Your birthdate must be above 18")
                    }
                        // updateProfile();
                    }}
                    className="bg-red-600 px-20 p-3 text-white mt-20 justify-center hover:bg-yellow-600"
                >
                    Save Update
                </button>
            </div>
        </MainContainer>
    );
};

export default ProfileUpdate;
const styles = {
    pink: {
        color: "#C62251",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
};
