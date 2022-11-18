import React, { useState } from "react";
import "../../css/preferenceedit.scss";
import MainContainer from "../containers/MainContainer";

import ls from "localstorage-slim";
import { SocketContext } from "../context/SocketContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import cities from "../assets/json/cities.json";
import country from "../assets/json/country.json";
import states from "../assets/json/states.json";

import LoadingPage from "../components/loaders/LoadingPage";

import "animate.css";

const USERDB = "dao";
const DB = "user-m9j234u94";
function PreferenceSettings() {
    const [loading, setLoading] = useState(false);

    const [preferences, setPreferences] = React.useState({});

    const [profile, setProfile] = useState("");

    // set country, state and city

    const [liveInCountry, setLiveInCountry] = useState("any")
    const [liveInState, setLiveInState] = useState("any")
    const [liveInCity, setLiveInCity] = useState("any")

    const [education, setEducation] = useState("any");
    const [haveChildren, setHaveChildren] = useState("any");
    const [ageMin, setAgeMin] = useState("any");
    const [ageMax, setAgeMax] = useState("any");
    const [liveIn, setLiveIn] = useState("any");
    const [relocate, setRelocate] = useState("any");
    const [hairColor, setHairColor] = useState("any");
    const [eyeColor, setEyeColor] = useState("any");
    const [weight, setWeight] = useState("any");
    const [height, setHeight] = useState("any");
    const [smoke, setSmoke] = useState("any");
    const [drink, setDrink] = useState("any");
    const [ethnicity, setEthnicity] = useState("any");
    const [bodyStyle, setBodyStyle] = useState("any");
    const [bodyArt, setBodyArt] = useState("any");
    const [appearance, setAppearance] = useState("any");
    const [maritalStatus, setMaritalStatus] = useState("any");
    const [numberOfChildren, setNumberOfChildren] = useState("any");
    const [oldestChild, setOldestChild] = useState("any");
    const [youngest, setYoungest] = useState("any");
    const [wantMoreChildren, setWantMoreChildren] = useState("any");
    const [havePets, setHavePets] = useState("any");
    const [occupation, setOccupation] = useState("any");
    const [employmentStatus, setEmploymentStatus] = useState("any");
    const [annualIncome, setAnnualIncome] = useState("any");
    const [livingSituation, setLivingSituation] = useState("any");
    const [nationality, setNationality] = useState("any");
    const [languagesSpoken, setLanguagesSpoken] = useState("any");
    const [englishAbility, setEnglishAbility] = useState("any");
    const [frenchAbility, setFrenchAbility] = useState("any");
    const [religiousValue, setReligiousValue] = useState("any");
    const [polygamy, setPolygamy] = useState("any");
    const [starSign, setStarSign] = useState("any");
    const [religion, setReligion] = useState("any");

    const [value, setValue] = React.useState("");

    const [toggle, setToggle] = React.useState(false);

    const [statesearch, setStatesearch] = React.useState([]);
    const [citysearch, setCitysearch] = React.useState([]);

    const [countrycode, setCountrycode] = React.useState("");
    const [statecode, setStatecode] = React.useState("");
    const [citycode, setCitycode] = React.useState("");

    var ageArray = [];

    for (let i = 19; i <= 80; i++) {
        ageArray.push(i);
    }

    const handleToggle = () => {
        if (toggle == true) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        setAnyReligion(false);
    };

    function valuetext(value) {
        return `${value}yrs`;
    }
    const [age, setAge] = React.useState([20, 28]);

    const loadPreference = () => {
        const token = ls.get(DB, { decrypt: true });
        axios
            .get("/api/all-preferences", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setPreferences(response.data.preference);
                // setPreferenceAge(response.data.preference.preference_age)
                // setPreferenceFood(response.data.preference.preference_food)
                // setPreferenceSmoke(response.data.preference.preference_smoke)
                // setPreferenceRelationship(response.data.preference.preference_relationship)
                // setPreferenceDrink(response.data.preference.preference_drink)
                // setPreferenceBodytype(response.data.preference.preference_bodytype)
                // setPreferenceReligion(response.data.preference.preference_religion)
                if (response.data.preference !== null) {
                    var pref = response.data.preference;



                    setEducation(pref.education)
                    setHaveChildren(pref.have_children)
                    setAgeMin(pref.age_min)
                    setAgeMax(pref.age_max)
                    setLiveIn(pref.live_in)
                    setRelocate(pref.relocate)
                    setHairColor(pref.hair_color)
                    setEyeColor(pref.eye_color)
                    setWeight(pref.weight)
                    setHeight(pref.height)
                    setSmoke(pref.smoke)
                    setDrink(pref.drink)
                    setEthnicity(pref.ethnicity)
                    setBodyStyle(pref.body_style)
                    setBodyArt(pref.body_art)
                    setAppearance(pref.appearance)
                    setMaritalStatus(pref.marital_status)
                    setNumberOfChildren(pref.number_of_children)
                    setOldestChild(pref.oldest_child)
                    setYoungest(pref.youngest_child)
                    setWantMoreChildren(pref.want_more_children)
                    setHavePets(pref.have_pets)
                    setOccupation(pref.occupation)
                    setEmploymentStatus(pref.employment_status)
                    setAnnualIncome(pref.annual_income)
                    setLivingSituation(pref.living_situation)
                    setNationality(pref.nationality)
                    setLanguagesSpoken(pref.languages_spoken)
                    setEnglishAbility(pref.english_ability)
                    setFrenchAbility(pref.french_ability)
                    setReligiousValue(pref.religious_values)
                    setPolygamy(pref.polygamy)
                    setStarSign(pref.star_sign)
                    setReligion(pref.religion)



                    if(pref.live_in !== null){

                        setLiveInCountry(pref.live_in.split(',')[0])
                        setLiveInState(pref.live_in.split(',')[1])
                        setLiveInCity(pref.live_in.split(',')[2])
                    }

                }
            })
            .catch((error) => {
                //  toast.error(error)
                console.log(error);
            });
    };

    // add preferences temporal

    const addPreferences = () => {
        const token = ls.get(DB, { decrypt: true });
        let db = ls.get(USERDB, { decrypt: true });

        var userid = db.user.user;

        axios
            .post(
                "/api/add-preferences",
                {
                    user_id: userid.user_id,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                console.log(res.data.preference);

                setPreferences(res.data.preference);
            });
    };

    // Update Preferences
    const updatePreferences = () => {
        setLoading(true);
        const token = ls.get(DB, { decrypt: true });

        let db = ls.get(USERDB, { decrypt: true });

        var userid = db.user.user;

        axios
            .put(
                `/api/edit-preferences/${userid.user_id}`,
                {
                    education: education,
                    have_children: haveChildren,
                    age_min: ageMin,
                    age_max: ageMax,
                    live_in: liveInCountry+","+liveInState+","+liveInCity,
                    relocate: relocate,
                    hair_color: hairColor,
                    eye_color: eyeColor,
                    weight: weight,
                    height: height,
                    smoke: smoke,
                    drink: drink,
                    ethnicity: ethnicity,
                    body_style: bodyStyle,
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
                    religion: religion,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                console.log("Result:" + res.data.preference);

                setPreferences(res.data.preference);
                setLoading(false);
            })
            .catch((e) => {
                alert(e);
            });
    };

    function loadUser() {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {
            console.log(db);
            setProfile(db.user.user);
        }
    }

    React.useEffect(() => {
        loadUser();
        loadPreference();
        addPreferences();
    }, []);

    if (loading) {
        return <LoadingPage />;
    }
    return (
        <MainContainer>
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className="p-3 text-white font-bold border-b-4 border-white">
                    Preference Settings
                </button>
            </div>

            <div className="px-40 pt-12 bg-white pb-32 border-t-[1px] font-bold">
              <h1>Update Your Preferences for a better match</h1>

                <table width={"100%"} className="mt-20">
                    <thead>
                        <tr className="bg-white">
                            <th>
                                <p className="flex-1 px-3 float-left font-bold text-xl text-red-700">
                                    Basic
                                </p>
                            </th>
                            <th>
                                <p className="flex-1 float-left font-bold text-xl text-red-700 capitalize"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-bold">
                        <tr className=" ">
                            <td className="px-3">Age Range:</td>
                            <td className="ml-4 pl-4 font-bold ring-1 flex flex-row">
                                <select
                                    className="w-full h-[40px]"
                                    value={ageMin}
                                    onChange={(e) => setAgeMin(e.target.value)}
                                >
                                    <option>From age</option>
                                    {ageArray.map((age, index) => (
                                        <option key={index}>{age}</option>
                                    ))}
                                </select>

                                <select
                                    className="w-full h-[40px]"
                                    value={ageMax}
                                    onChange={(e) => setAgeMax(e.target.value)}
                                >
                                    <option>to age</option>
                                    {ageArray.map((age, index) => (
                                        <option key={index}>{age}</option>
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

                                            
                                            setLiveInCountry( e.target.options[
                                                e.target.selectedIndex
                                            ].text);
                                            
                                             
                                        }}
                                    >
                                        <option>Select country</option>
                                        <option>Any</option>
                                        {country.map((c, index) => (
                                            <option key={index} value={c.code} selected={liveInCountry === c.name}>
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

                                            setLiveInState( e.target.options[
                                                e.target.selectedIndex
                                            ].text);
                                             
                                        }}
                                    >
                                        <option>Select state</option>
                                        <option>Any</option>
                                        {statesearch.map((s, index) => (
                                            <option
                                                key={index}
                                                value={s.state_code} selected={liveInState === s.name}
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

                                            setLiveInCity( e.target.options[
                                                e.target.selectedIndex
                                            ].text);

                                             
                                        }}
                                    >
                                        <option>Select city</option>
                                        <option>Any</option>
                                        {citysearch.map((c, index) => (
                                            <option key={index} selected={liveInCity === c.name}>
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
                           <td> <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Appearance
                            </p></td>
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
                                <input
                                    type="text"
                                    placeholder="Type your ethnic"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={ethnicity}
                                    onChange={(e) =>
                                        setEthnicity(e.target.value)
                                    }
                                />
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
                           <td> <p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Lifestyle
                            </p></td>
                        </tr>

                        {/* other information */}
                        <tr className="bg-[#fffefe] ">
                            <td className="px-3">Drink:</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f0f0f0]">
                                {/* Occassionally */}
                                <select
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
                            <td><p className="font-bold text-xl mt-12 mb-3 text-red-600">
                                Background / Cultural Values
                            </p></td>
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
                            <td className="px-3">Education:{education}</td>
                            <td className=" ml-4 pl-4 font-bold bg-[#f8f8f8]">
                                <input
                                    type="text"
                                    placeholder="Education"
                                    className="w-full h-[40px] my-1 ring-1 ring-slate-900/7"
                                    value={education}
                                    onChange={(e) =>
                                        setEducation(e.target.value)
                                    }
                                />
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

                <button
                    onClick={() => {
                        updatePreferences();
                    }}
                    className="bg-red-600 px-20 p-3 text-white mt-20 justify-center hover:bg-yellow-600"
                >
                    Save Update
                </button>
            </div>
        </MainContainer>
    );
}

export default PreferenceSettings;
const styles = {
    pink: {
        color: "#C62251",
        fontWeight: "bold",
        textTransform: "capitalize",
    },
};
