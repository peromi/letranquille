// import React, { useState } from "react";
// import AuthContainer from "../containers/AuthContainer";
// import { TextField } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from "@material-ui/pickers";
// import Grid from "@material-ui/core/Grid";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
// import Chip from "@material-ui/core/Chip";
// import Paper from "@material-ui/core/Paper";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { apiKey, data } from "../constants";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Spinner from "react-spinkit";
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import ls from 'localstorage-slim'
// import { SocketContext } from "../context/SocketContext";
// import {FiSearch} from 'react-icons/fi'
// import cities from '../assets/json/cities.json'
// import  country  from '../assets/json/country.json';
// import  states  from '../assets/json/states.json';
// import  country_currency  from '../assets/json/country-currancy.json';

// const DATABASE_KEY = "user-m9j234u94";
// const REG_STEPS = "stepper";
// const PREFERENCE = "preference";

// function Onboarding() {
//     const {coords, isGeolocationAvailable, isGeolocationEnabled} = React.useState(SocketContext)
//     const navigate = useNavigate();

//     const [steps, setSteps] = React.useState("personal");

//     const [stepNumber, setStepNumber] = React.useState(1);

//     // man selection
//     function valuetext(value) {
//         return `${value}km`;
//     }

//     //   SET USER CURRENT LOCATION

//     const [location, setLocation] = React.useState({});

//     // Get current location

//     React.useEffect(() => {


//         const getdata = ls.get(REG_STEPS, {decrypt:true});
//         if (getdata !== null) {
//             if (getdata.title != null) {
//                 setSteps(getdata.title);
//             }

//             setStepNumber(getdata.step);
//         }

//         const db = ls.get(DATABASE_KEY, {decrypt:true})
//         if(db === null){
//             navigate('/register')
//         }


//     }, []);

//     // Personal Information
//     const [iam, setIam] = React.useState("");
//     const [lookingfor, setLookingfor] = React.useState("");
//     const [bodyType, setBodyType] = React.useState("");
//     const [bodyTypeShow, setBodyTypeShow] = React.useState(false);
//     const [name, setName] = React.useState("");
//     const [height, setHeight] = React.useState(0);

//     const [heightShow, setHeightShow] = React.useState(false);

//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const handleDateChange = (date) => {
//         console.log(date);
//         setSelectedDate(date);
//     };


//     const handlePersonalInfo = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});

//         if (token.length == 0) {
//         }
//         if (
//             iam.length > 0 &&
//             lookingfor.length > 0 &&
//             bodyType.length > 0 &&
//             name.length > 0
//         ) {
            
//             var date = new Date(selectedDate)
//             var today = new Date()
//             var age = today.getFullYear() - date.getFullYear()
//             if(age < 18){
//                 alert("You are not upto 18 years!")
//                 return
//             }else{
//                 axios
//                 .post(
//                     "/api/profile",
//                     {
//                         iam: iam,
//                         lookingfor: lookingfor,
//                         name: name,
//                         birthday: selectedDate,
//                         bodytype: bodyType,
//                         body_show: bodyTypeShow,
//                         height: height,
//                         height_show:heightShow
//                     },
//                     {
//                         headers: {
//                             Accept: "application/json",
//                             Authorization: "Bearer " + token,
//                         },
//                     }
//                 )
//                 .then((response) => {
//                     toast.success(response.data.message);
//                     setSteps("drink");
//                     setStepNumber(2);


//                     ls.set(
//                         REG_STEPS, { step: 2, title: "drink" }, {encrypt:true}
//                     );
//                 })
//                 .catch((err) => {
//                     toast.error(e.response.data.message);
//                 });
//             }
            
            
            
//         } else {
//             toast.error("Ensure the right fields are selected.");
//         }
//     };

//     const PersonalDetails = () => {
//         return (
//             <>
//                 <div className="personality__choice" style={{ marginTop: 21 }}>
//                     <div>
//                         <p className="font-bold text-lg">I am a..</p>
//                         <ul>
//                             <li
//                                 onClick={() => {
//                                     if (iam == "man") {
//                                         setIam("");
//                                     } else {
//                                         setIam("male");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             iam == "male" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             iam == "male"
//                                                 ? data.manActive
//                                                 : data.man
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             iam == "male" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     Man
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (iam == "female") {
//                                         setIam("");
//                                     } else {
//                                         setIam("female");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             iam == "female" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             iam == "female"
//                                                 ? data.womanActive
//                                                 : data.woman
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             iam == "female" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     Woman
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (iam == "other") {
//                                         setIam("");
//                                     } else {
//                                         setIam("other");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             iam == "other" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             iam == "other"
//                                                 ? data.otherActive
//                                                 : data.other
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             iam == "other" ? "#C62251" : "grey",
//                                     }}
//                                 >
//                                     Other
//                                 </p>
//                             </li>
//                         </ul>
//                         <p className="font-bold text-lg">I am looking for..</p>
//                         <ul>
//                             <li
//                                 onClick={() => {
//                                     if (lookingfor == "male") {
//                                         setLookingfor("");
//                                     } else {
//                                         setLookingfor("male");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             lookingfor == "male"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             lookingfor == "male"
//                                                 ? data.manActive
//                                                 : data.man
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             lookingfor == "male"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Man
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (lookingfor == "female") {
//                                         setLookingfor("");
//                                     } else {
//                                         setLookingfor("female");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             lookingfor == "female"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             lookingfor == "female"
//                                                 ? data.womanActive
//                                                 : data.woman
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             lookingfor == "female"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Woman
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (lookingfor == "any") {
//                                         setLookingfor("");
//                                     } else {
//                                         setLookingfor("any");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             lookingfor == "any"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             lookingfor == "any"
//                                                 ? data.anyoneActive
//                                                 : data.anyone
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             lookingfor == "any"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Anyone
//                                 </p>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="personal__divider"></div>
//                     <div style={{  }}>
//                         <p className="font-bold text-lg">My Body type is..</p>
//                         <ul>
//                             <li
//                                 onClick={() => {
//                                     if (bodyType == "slim") {
//                                         setBodyType("");
//                                     } else {
//                                         setBodyType("slim");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             bodyType == "slim"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             bodyType == "slim"
//                                                 ? data.slimActive
//                                                 : data.slim
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             bodyType == "slim"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Slim
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (bodyType == "average") {
//                                         setBodyType("");
//                                     } else {
//                                         setBodyType("average");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             bodyType == "average"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             bodyType == "average"
//                                                 ? data.averageActive
//                                                 : data.average
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             bodyType == "average"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Average
//                                 </p>
//                             </li>
//                             <li
//                                 onClick={() => {
//                                     if (bodyType == "curvy") {
//                                         setBodyType("");
//                                     } else {
//                                         setBodyType("curvy");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             bodyType == "curvy"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             bodyType == "curvy"
//                                                 ? data.curvyActive
//                                                 : data.curvy
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             bodyType == "curvy"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Curvy
//                                 </p>
//                             </li>

//                             <li
//                                 onClick={() => {
//                                     if (bodyType == "muscular") {
//                                         setBodyType("");
//                                     } else {
//                                         setBodyType("muscular");
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         borderColor:
//                                             bodyType == "muscular"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     <img
//                                         src={
//                                             bodyType == "muscular"
//                                                 ? data.muscularActive
//                                                 : data.muscular
//                                         }
//                                     />
//                                 </div>
//                                 <p className="font-bold text-lg"
//                                     style={{
//                                         color:
//                                             bodyType == "muscular"
//                                                 ? "#C62251"
//                                                 : "grey",
//                                     }}
//                                 >
//                                     Muscular
//                                 </p>
//                             </li>
//                         </ul>
//                         <div className="personal_profile_checkbox">
//                             <input
//                                 type="checkbox"
//                                 name=""
//                                 id=""
//                                 value={bodyTypeShow}
//                                 onChange={(e) => {

//                                     if (bodyTypeShow == true) {
//                                         setBodyTypeShow(false);
//                                     } else {
//                                         setBodyTypeShow(true);
//                                     }
//                                 }}
//                             />
//                             <p className="font-bold text-lg">Don't show my body type on profile</p>
//                         </div>
//                     </div>
//                 </div>

//                 <TextField
//                 className="font-bold text-lg"
//                     id="outlined-basic"
//                     label="Enter Your Name"
//                     style={{ marginTop: 12, width:'100%' }}
//                     variant="outlined"
//                     inputProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     InputLabelProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                     <KeyboardDatePicker className="w-full"
//                         inputVariant="outlined"
//                         margin="normal"
//                         id="date-picker-dialog"
//                         label="Enter Your Date of Birth"
//                         format="dd - MMM - yyyy"
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         KeyboardButtonProps={{
//                             "aria-label": "change date",
//                         }}
//                         inputProps={{
//                             style: {
//                                 fontFamily: "Dosis",
//                                 fontWeight: "bold",
//                                  width:'100%'
//                             },
//                         }}
//                         InputLabelProps={{
//                             style: {
//                                 fontFamily: "Dosis",
//                                 fontWeight: "bold",
//                             },
//                         }}
//                         DialogProps={{
//                             style: {
//                                 fontFamily: "Dosis",
//                                 fontWeight: "bold",
//                             },
//                             title: "Birthday",
//                         }}
//                     />
//                 </MuiPickersUtilsProvider>
//                 <p>What's Your Height</p>
//                     <select onChange={(e)=>setHeight(e.target.value)} value={height} className="p-3 mb-3 ring-1 ring-slate-900/5 w-full">
//                         <option value={3}>3ft</option>
//                         <option value={4}>4ft</option>
//                         <option value={4.5}>4.5ft</option>
//                         <option value={5}>5ft</option>
//                         <option value={5.5}>5.5ft</option>
//                         <option value={6}>6ft</option>
//                         <option value={6.5}>6.5ft</option>
//                         <option value={7}>7ft</option>
//                         <option value={7.5}>7.5ft</option>
//                     </select>

//                     <div className="flex flex-row items-center">
//                     <input
//                                     type="checkbox"
//                                     name=""
//                                     id=""
//                                     value={heightShow}
//                                     onChange={(e) =>
//                                         setHeightShow(e.target.checked)
//                                     }
//                                 />

// <p className="font-bold text-lg ml-2">
//                                     Don't show my height on profile
//                                 </p>
//                     </div>




//                 <Button
//                     variant="contained"
//                     className="w-full"
//                     style={{
//                         marginTop: 21,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         handlePersonalInfo();

//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         );
//     };



//     // Drinking LifeStyle
//     const [drinker, setDrinker] = React.useState("");
//     const handleDrink =()=>{
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         if (token == null) {
//             return;
//         }

//         axios.put("/api/profile",{
//             drink:drinker
//         },{
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + token,
//             },
//         }).then((response)=>{
//             setSteps("smoke");
//                 setStepNumber(3);
//             ls.set(REG_STEPS, {'step':3, 'title':'smoke'}, {encrypt:true})
//             toast.success(response.data.message)
//         }).catch(error=>{
//             toast.error(error.response.data.message)
//         })
//     }
//     const DrinkDetail = ()=>{
//         return(
//             <>
//                 <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>I am a/an..</p>
//                 <Grid
//                     container
//                     spacing={0}
//                     direction="column"
//                     style={{ width: "100%" }}
//                 >
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setDrinker("drinker");
//                             }}
//                             variant="outlined"
//                             className="flex-1"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     drinker == "drinker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         drinker == "drinker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Drinker
//                             </p>
//                             {drinker == "drinker" ? (
//                                 <img src={data.drink} />
//                             ) : (
//                                 <img src={data.drink} />
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setDrinker("non drinker");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     drinker == "non drinker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         drinker == "non drinker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                Non Drinker
//                             </p>
//                             {drinker == "non drinker" ? (
//                                 <img src={data.nodrink}  />
//                             ) : (
//                                 <img src={data.nodrink}   />
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setDrinker("occasional drinker");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     drinker == "occasional drinker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         drinker == "occasional drinker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                Occasional Drinker
//                             </p>
//                             {drinker == "occasional drinker" ? (
//                                 <img src={data.wine}  />
//                             ) : (
//                                 <img src={data.wine}   />
//                             )}
//                         </Paper>
//                     </Grid>


//                     </Grid>

//                 <Button
//                 disabled={drinker.length>0?false:true}
//                     variant="contained"
//                     className="w-full"
//                     style={{
//                         marginTop: 132,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",

//                     }}
//                     color="primary"
//                     onClick={() => {
//                         // setSteps("sex");
//                         // setStepNumber(4);
//                         handleDrink();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         )
//     }

//     // SMOkER PREFERENCE
//     const [smoker, setSmoker] = React.useState("");
//     const handleSmoke =()=>{
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         if (token == null) {
//             return;
//         }

//         axios.put("/api/profile",{
//             smoke:smoker
//         },{
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + token,
//             },
//         }).then((response)=>{
//             setSteps("food");
//                 setStepNumber(4);
//             ls.set(REG_STEPS, {'step':4, 'title':'food'},{encrypt:true})
//             toast.success(response.data.message)
//         }).catch(error=>{
//             toast.error(error.response.data.message)
//         })
//     }
//     const SmokerDetail = ()=>{
//         return(
//             <>
//                 <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>I am a/an..</p>
//                 <Grid
//                     container
//                     spacing={0}
//                     direction="column"
//                     style={{ width: "100%" }}
//                 >
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setSmoker("smoker");
//                             }}
//                             variant="outlined"
//                             className="w-full cursor-pointer"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     smoker == "smoker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         smoker == "smoker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Smoker
//                             </p>
//                             {smoker == "smoker" ? (
//                                 <img src={data.smoke} />
//                             ) : (
//                                 <img src={data.smoke} />
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setSmoker("non smoker");
//                             }}
//                             className="w-full cursor-pointer"
//                             variant="outlined"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     smoker == "non smoker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         smoker == "non smoker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                Non Smoker
//                             </p>
//                             {smoker == "non smoker" ? (
//                                 <img src={data.nosmoke}  />
//                             ) : (
//                                 <img src={data.nosmoke}   />
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setSmoker("occasional smoker");
//                             }}
//                             className="w-full cursor-pointer"
//                             variant="outlined"
//                             style={{
//                                 height:65,
//                                 paddingTop:12,
//                                 paddingBottom:12,
//                                 paddingLeft: 14,
//                                 paddingRight:14,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     smoker == "occasional smoker"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         smoker == "occasional smoker"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                Occasional Smoker
//                             </p>
//                             {smoker == "occasional smoker" ? (
//                                 <img src={data.smoke}  />
//                             ) : (
//                                 <img src={data.smoke}   />
//                             )}
//                         </Paper>
//                     </Grid>


//                     </Grid>

//                 <Button
//                 disabled={smoker.length>0?false:true}
//                     variant="contained"
//                     className="w-full"
//                     style={{
//                         marginTop: 132,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",

//                     }}
//                     color="primary"
//                     onClick={() => {
//                         // setSteps("sex");
//                         // setStepNumber(4);
//                         handleSmoke();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         )
//     }


//      // FOOD
//      const [food, setFood] = React.useState("");
//      const handleFood =()=>{
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         if (token == null) {
//             return;
//         }

//         axios.put("/api/profile",{
//             food:food
//         },{
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + token,
//             },
//         }).then((response)=>{
//             setSteps("friendship");
//                 setStepNumber(5);
//             ls.set(REG_STEPS, {'step':5, 'title':'friendship'},{encrypt:true})
//             toast.success(response.data.message)
//         }).catch(error=>{
//             toast.error(error.response.data.message)
//         })
//     }
//      const FoodDetail = ()=>{
//          return(
//              <>
//                  <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>I am a..</p>
//                  <Grid
//                      container
//                      spacing={0}
//                      direction="column"
//                      style={{ width: "100%" }}
//                  >
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFood("vegetarian");
//                              }}
//                              className="w-full cursor-pointer"
//                              variant="outlined"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      food == "vegetarian"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          food == "vegetarian"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                  Vegetarian
//                              </p>
//                              {food == "vegetarian" ? (
//                                  <img src={data.foodie} />
//                              ) : (
//                                  <img src={data.foodie} />
//                              )}
//                          </Paper>
//                      </Grid>
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFood("vegan");
//                              }}
//                              className="w-full cursor-pointer"
//                              variant="outlined"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      food == "vegan"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          food == "vegan"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                 Vegan
//                              </p>
//                              {food == "vegan" ? (
//                                  <img src={data.flower}  />
//                              ) : (
//                                  <img src={data.flower}   />
//                              )}
//                          </Paper>
//                      </Grid>
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFood("non vegetarian");
//                              }}
//                              variant="outlined"
//                              className="w-full cursor-pointer"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      food == "non vegetarian"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          food == "non vegetarian"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                 Non Vegetarian
//                              </p>
//                              {food == "non vegetarian" ? (
//                                  <img src={data.chicken}  />
//                              ) : (
//                                  <img src={data.chicken}   />
//                              )}
//                          </Paper>
//                      </Grid>


//                      </Grid>

//                  <Button
//                  disabled={food.length>0?false:true}
//                      variant="contained"
//                      className="w-full cursor-pointer"
//                      style={{
//                          marginTop: 132,
//                          height: 48,
//                          fontFamily: "Dosis",
//                          fontWeight: "bold",

//                      }}
//                      color="primary"
//                      onClick={() => {
//                          // setSteps("sex");
//                          // setStepNumber(4);
// handleFood()
//                      }}
//                  >
//                      Continue
//                  </Button>
//              </>
//          )
//      }

//     //  DESIRED FRIENDSHIP
//     const [friendship, setFriendship] = React.useState("");
//     const handleFriendship =()=>{
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         if (token == null) {
//             return;
//         }

//         axios.put("/api/profile",{
//             relationship:friendship
//         },{
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + token,
//             },
//         }).then((response)=>{
//             setSteps("religion");
//                 setStepNumber(6);
//             ls.set(REG_STEPS, {'step':6, 'title':'religion'}, {encrypt:true})
//             toast.success(response.data.message)
//         }).catch(error=>{
//             toast.error(error.response.data.message)
//         })
//     }
//      const FriendshipDetail = ()=>{
//          return(
//              <>
//                  <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>What is the relationship you want?</p>
//                  <Grid
//                      container
//                      spacing={0}
//                      direction="column"
//                      style={{ width: "100%" }}
//                  >
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFriendship("long term");
//                              }}
//                              variant="outlined"
//                              className="w-full cursor-pointer"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      friendship == "long term"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          friendship == "long term"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                  Long Term
//                              </p>
//                              {friendship == "long term" ? (
//                                  <img src={data.ring} />
//                              ) : (
//                                  <img src={data.ring} />
//                              )}
//                          </Paper>
//                      </Grid>
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFriendship("short term");
//                              }}
//                              className="w-full cursor-pointer"
//                              variant="outlined"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      friendship == "short term"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          friendship == "short term"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                 Short Term
//                              </p>
//                              {friendship == "short term" ? (
//                                  <img src={data.couple}  />
//                              ) : (
//                                  <img src={data.couple}   />
//                              )}
//                          </Paper>
//                      </Grid>
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFriendship("hookups");
//                              }}
//                              className="w-full cursor-pointer"
//                              variant="outlined"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                                      friendship == "hookups"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          friendship == "hookups"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                 Hookups
//                              </p>
//                              {friendship == "hookups" ? (
//                                  <img src={data.bed}  />
//                              ) : (
//                                  <img src={data.bed}   />
//                              )}
//                          </Paper>
//                      </Grid>
//                      <Grid item>
//                          <Paper
//                              onClick={() => {
//                                  setFriendship("new friends");
//                              }}
//                              className="w-full cursor-pointer"
//                              variant="outlined"
//                              style={{
//                                  height:65,
//                                  paddingTop:12,
//                                  paddingBottom:12,
//                                  paddingLeft: 14,
//                                  paddingRight:14,
//                                  marginBottom: 12,
//                                  display: "flex",
//                                  flexDirection: "row",
//                                  alignItems: "center",
//                                  justifyContent: "space-between",
//                                  borderColor:
//                              friendship == "new friends"
//                                          ? "#C62251"
//                                          : "black",
//                              }}
//                          >
//                              <p
//                                  style={{
//                                      color:
//                                          friendship == "new friends"
//                                              ? "#C62251"
//                                              : "black",
//                                  }}
//                              >
//                                 New Friends
//                              </p>
//                              {friendship == "new friends" ? (
//                                  <img src={data.friend}  />
//                              ) : (
//                                  <img src={data.friend}   />
//                              )}
//                          </Paper>
//                      </Grid>


//                      </Grid>

//                  <Button
//                  disabled={friendship.length>0?false:true}
//                      variant="contained"
//                      className="w-full cursor-pointer"
//                      style={{
//                          marginTop: 132,
//                          height: 48,
//                          fontFamily: "Dosis",
//                          fontWeight: "bold",

//                      }}
//                      color="primary"
//                      onClick={() => {
//                          // setSteps("sex");
//                          // setStepNumber(4);
// handleFriendship()
//                      }}
//                  >
//                      Continue
//                  </Button>
//              </>
//          )
//      }


//     // Religious Data
//     const [religion, setReligion] = React.useState("");

//     const handleReligion = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});

//         if (token == null) {
//             return;
//         }
//         if (religion.length > 0) {
//             axios
//                 .post(
//                     "/api/religion",
//                     {
//                         name: religion,
//                     },
//                     {
//                         headers: {
//                             Accept: "application/json",
//                             Authorization: "Bearer " + token,
//                         },
//                     }
//                 )
//                 .then((response) => {
//                     setSteps("job");
//                     setStepNumber(7);

//                     ls.set(
//                         REG_STEPS, { step: 7, title: "job" },{encrypt:true}
//                     );
//                     toast.success(response.data.message);
//                 })
//                 .catch((error) => {
//                     toast.error(error.response.data.message);
//                 });
//         } else {
//             toast.error("Select a religion");
//         }
//     };

//     const ReligiousDetails = () => {
//         return (
//             <>
//                 <p
//                     style={{
//                         marginBottom: 24,
//                         color: "#C62251",
//                         marginTop: 21,
//                     }}
//                 >
//                     My Religion is..
//                 </p>
//                 <Grid
//                     container
//                     spacing={0}
//                     direction="column"
//                     style={{ width: "100%" }}
//                     className="flex flex-wrap flex-row"
//                 >
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("christianity");
//                             }}
//                             variant="outlined"
//                             className="flex-1 cursor-pointer"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "christianity"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "christianity"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Christianity
//                             </p>
//                             {religion == "christianity" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("islam");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "islam" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "islam"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Islam
//                             </p>
//                             {religion == "islam" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("jewish");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "jewish" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "jewish"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Jewish
//                             </p>
//                             {religion == "jewish" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("buddism");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "buddism" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "buddism"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Buddism
//                             </p>
//                             {religion == "buddism" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("hinduism");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "hinduism"
//                                         ? "#C62251"
//                                         : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "hinduism"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Hinduism
//                             </p>
//                             {religion == "hinduism" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("jainism");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "jainism" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "jainism"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Jainism
//                             </p>
//                             {religion == "jainism" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("sikhism");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "sikhism" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "sikhism"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Sikhism
//                             </p>
//                             {religion == "sikhism" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                     <Grid item>
//                         <Paper
//                             onClick={() => {
//                                 setReligion("atheist");
//                             }}
//                             variant="outlined"
//                             style={{
//                                 padding: 8,
//                                 marginBottom: 12,
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignItems: "center",
//                                 justifyContent: "space-between",
//                                 borderColor:
//                                     religion == "atheist" ? "#C62251" : "black",
//                             }}
//                         >
//                             <p
//                                 style={{
//                                     color:
//                                         religion == "atheist"
//                                             ? "#C62251"
//                                             : "black",
//                                 }}
//                             >
//                                 Atheist
//                             </p>
//                             {religion == "atheist" ? (
//                                 <i
//                                     class="fa-solid fa-circle-check"
//                                     style={{ color: "#C62251" }}
//                                 ></i>
//                             ) : (
//                                 <i></i>
//                             )}
//                         </Paper>
//                     </Grid>
//                 </Grid>
//                 <Button
//                     variant="contained"
//                     className="w-full cursor-pointer"
//                     style={{
//                         marginTop: 21,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         handleReligion();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         );
//     };

//     // JOB Process
//     const [job, setJob] = React.useState("");

//     const handleJob = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});

//         if (token == null) {
//             return;
//         }

//         if (job.length > 0) {
//             axios
//                 .post(
//                     "/api/profession",
//                     {
//                         job: job,
//                     },
//                     {
//                         headers: {
//                             Accept: "application/json",
//                             Authorization: "Bearer " + token,
//                         },
//                     }
//                 )
//                 .then((response) => {
//                     setSteps("sex");
//                     setStepNumber(8);

//                     ls.set(
//                         REG_STEPS, { step: 8, title: "sex" },{encrypt:true}
//                     );
//                     toast.success(response.data.message);
//                 })
//                 .catch((error) => {
//                     toast.error(error.response.data.message);
//                 });
//         } else {
//             toast.error("Field can't be empty.");
//         }
//     };

//     const JobDetails = () => {
//         return (
//             <>
//                 <TextField
//                 className="w-full"
//                     label="Job Title"
//                     inputProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     InputLabelProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     variant="outlined"
//                     style={{ marginTop: 21 }}
//                     value={job}
//                     onChange={(e) => setJob(e.target.value)}
//                 />

//                 <Button
//                     disabled={job.length > 0 ? false : true}
//                     variant="contained"
//                     className="w-full cursor-pointer"
//                     style={{
//                         marginTop: 121,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         handleJob();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         );
//     };

//     // SEX ORIENTATION PROCESS
//     const [sex, setSex] = React.useState("");
//     const [showSex, setShowSex] = React.useState(false);
//     const handleSex = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         if (token == null) {
//             return;
//         }

//         axios
//             .post(
//                 "/api/sexual-orientation",
//                 {
//                     type: sex,
//                     show: showSex,
//                 },
//                 {
//                     headers: {
//                         Accept: "application/json",
//                         Authorization: "Bearer " + token,
//                     },
//                 }
//             )
//             .then((response) => {
//                 setSteps("hobbies");
//                 setStepNumber(9);
//                 localStorage.removeItem(REG_STEPS);
//                 ls.set(
//                     REG_STEPS, { step: 9, title: "hobbies" },{encrypt:true}
//                 );
//                 toast.success(response.data.message);
//             })
//             .catch((error) => {
//                 toast.error(error.response.data.message);
//             });
//     };
//     const SexOrientation = () => {
//         return (
//             <>
//                 <p style={{ color: "#C62251", marginTop: 21 }}>
//                     My Sex Orientation is
//                 </p>
//                 <Grid
//                     container
//                     direction="row"
//                     spacing={2}
//                     style={{ width: "100%", marginTop: 23 }}
//                 >
//                     <Grid item xs>
//                         <Grid
//                             container
//                             spacing={0}
//                             direction="column"
//                             style={{ width: "100%" }}
//                         >
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("straight");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "straight"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "straight"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Straight
//                                     </p>
//                                     {sex == "straight" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("gay");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "gay" ? "#C62251" : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "gay"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Gay
//                                     </p>
//                                     {sex == "gay" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("lesbian");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "lesbian"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "lesbian"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Lesbian
//                                     </p>
//                                     {sex == "lesbian" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("demisexual");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "demisexual"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "demisexual"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Demisexual
//                                     </p>
//                                     {sex == "demisexual" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("pansexual");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "pansexual"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "pansexual"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Pansexual
//                                     </p>
//                                     {sex == "pansexual" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("queer");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "queer"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "queer"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Queer
//                                     </p>
//                                     {sex == "queer" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                     <Grid item xs>
//                         <Grid
//                             container
//                             spacing={0}
//                             direction="column"
//                             style={{ width: "100%" }}
//                         >
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("aromantic");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "aromantic"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "aromantic"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Aromantic
//                                     </p>
//                                     {sex == "aromantic" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                             <Grid item>
//                                 <Paper
//                                     onClick={() => {
//                                         setSex("bicurious");
//                                     }}
//                                     variant="outlined"
//                                     style={{
//                                         padding: 8,
//                                         marginBottom: 12,
//                                         display: "flex",
//                                         flexDirection: "row",
//                                         alignItems: "center",
//                                         justifyContent: "space-between",
//                                         borderColor:
//                                             sex == "bicurious"
//                                                 ? "#C62251"
//                                                 : "black",
//                                     }}
//                                 >
//                                     <p
//                                         style={{
//                                             color:
//                                                 sex == "bicurious"
//                                                     ? "#C62251"
//                                                     : "black",
//                                         }}
//                                     >
//                                         Bicurious
//                                     </p>
//                                     {sex == "bicurious" ? (
//                                         <i
//                                             class="fa-solid fa-circle-check"
//                                             style={{ color: "#C62251" }}
//                                         ></i>
//                                     ) : (
//                                         <i></i>
//                                     )}
//                                 </Paper>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>

//                 <FormControlLabel
//                     value="end"
//                     className="w-full block"
//                     control={
//                         <Checkbox
//                             value={showSex}
//                             onChange={(e) => setShowSex(e.target.checked)}
//                             color="primary"
//                         />
//                     }
//                     label={
//                         <p style={{ fontSize: 14, fontFamily: "Dosis" }}>
//                             Don't show my Sexual Orientation on Profile
//                         </p>
//                     }
//                     labelPlacement="end"
//                     style={{}}
//                 />
//                 <Button
//                     disabled={sex.length > 0 ? false : true}
//                     variant="contained"
//                     className="w-full cursor-pointer"
//                     style={{
//                         marginTop: 21,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         handleSex();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         );
//     };

//     // HOBBIES AND INTEREST PROCESS
//     const initialArray = Array;
//     const [hobbies, setHobbies] = React.useState(initialArray);

//     const handleHobby = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});

//         if (token == null) {
//             return;
//         }
//         if (hobbies.length > 10) {
//             toast.error("You can only choose 10 hobbies.");
//             return;
//         }

//         axios
//             .post(
//                 "/api/user-hobby",
//                 {
//                     hobby: hobbies,
//                 },
//                 {
//                     headers: {
//                         Accept: "application/json",
//                         Authorization: "Bearer " + token,
//                     },
//                 }
//             )
//             .then((response) => {
//                 console.log(response.data);
//                 setSteps("photo");
//                 setStepNumber(10);

//                 ls.set(
//                     REG_STEPS,  {step: 10, title: "photo" },{encrypt:true}
//                 );
//                 toast.success(response.data.message);
//             })
//             .catch((error) => {
//                 toast.error(error.response.data.message);
//             });
//     };

//     // Hobbies
//     const [cooking, setCooking] = React.useState("");
//     const [gaming, setGaming] = React.useState("");
//     const [gym, setGym] = React.useState("");
//     const [kpop, setKpop] = React.useState("");
//     const [photography, setPhotography] = React.useState("");
//     const [music, setMusic] = React.useState("");
//     const [netflix, setNetflix] = React.useState("");
//     const [beach, setBeach] = React.useState("");
//     const [sarcasm, setSarcasm] = React.useState("");
//     const [baseball, setBaseball] = React.useState("");
//     const [manga, setManga] = React.useState("");
//     const [art, setArt] = React.useState("");
//     const [vegan, setVegan] = React.useState("");

//     // Interest
//     const [reading, setReading] = React.useState("");
//     const [mountain, setMountain] = React.useState("");
//     const [travelling, setTravelling] = React.useState("");
//     const [football, setFootball] = React.useState("");
//     const [nba, setNba] = React.useState("");
//     const [hiphop, setHiphop] = React.useState("");
//     const [athlete, setAthlete] = React.useState("");
//     const [astrology, setAstrology] = React.useState("");
//     const [dancing, setDancing] = React.useState("");
//     const [foodie, setFoodie] = React.useState("");
//     const [anime, setAnime] = React.useState("");
//     const [marvel, setMarvel] = React.useState("");
//     const [vegetarian, setVegetarian] = React.useState("");

//     const Hobbies = () => {
//         return (
//             <div className="w-[450px]">
//                 <p style={{ color: "#C62251", marginTop: 21 }}>
//                     My Hobbies and Interest are
//                 </p>
//                 <small>Select up to 10</small>

//                 <div
//                     id="containerScroll"
//                     style={{ marginTop: 23, height: 350, overflowY: "scroll" }}
//                 >
//                     <Grid
//                         container
//                         direction="row"
//                         spacing={2}
//                         style={{ width: "100%" }}


//                     >
//                         <Grid item xs>
//                             <Grid
//                                 container
//                                 spacing={0}
//                                 direction="column"
//                                 style={{ width: "100%" }}
//                             >
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (cooking.length > 0) {
//                                                 setCooking("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === cooking
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setHobbies((hobbies) => [
//                                                     ...hobbies,
//                                                     "cooking",
//                                                 ]);

//                                                 setCooking("cooking");

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "cooking",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 cooking.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     cooking.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Cooking
//                                         </p>
//                                         {cooking.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (gaming.length > 0) {
//                                                 setGaming("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === gaming
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "",
//                                                     ])
//                                                 );
//                                             } else {
//                                                 setGaming("gaming");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("gaming")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "gaming",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies.length);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 gaming.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     gaming.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Gaming
//                                         </p>
//                                         {gaming.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (gym.length > 0) {
//                                                 setGym("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === gym
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setGym("gym");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("gym")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "gym",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 gym.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     gym.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Gym
//                                         </p>
//                                         {gym.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (kpop.length > 0) {
//                                                 setKpop("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === kpop
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setKpop("kpop");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("kpop")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "kpop",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 kpop.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     kpop.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             K-Pop
//                                         </p>
//                                         {kpop.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>

//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (photography.length > 0) {
//                                                 setPhotography("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === photography
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setPhotography("photography");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat(
//                                                         "photography"
//                                                     )
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "photography",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 photography.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     photography.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Photography
//                                         </p>
//                                         {photography.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (music.length > 0) {
//                                                 setMusic("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === music
//                                                 );
//                                                 hobbies.splice(index, 1);
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setMusic("music");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("music")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "music",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 music.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     music.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Music
//                                         </p>
//                                         {music.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (netflix.length > 0) {
//                                                 setNetflix("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === netflix
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setNetflix("netflix & chill");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat(
//                                                         "netflix & chill"
//                                                     )
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "netflix & chill",
//                                                     ])
//                                                 );
//                                             }

//                                             console.log(hobbies);
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 netflix.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     netflix.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Netflix & Chill
//                                         </p>
//                                         {netflix.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (beach.length > 0) {
//                                                 setBeach("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === beach
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setBeach("beach");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("beach")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "beach",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 beach.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     beach.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Beach
//                                         </p>
//                                         {beach.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (sarcasm.length > 0) {
//                                                 setSarcasm("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === sarcasm
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setSarcasm("sarcasm");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("sarcasm")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "sarcasm",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 sarcasm.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     sarcasm.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Sarcasm
//                                         </p>
//                                         {sarcasm.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (baseball.length > 0) {
//                                                 setBaseball("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === baseball
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setBaseball("baseball");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("baseball")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "baseball",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 baseball.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     baseball.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Baseball
//                                         </p>
//                                         {baseball.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (manga.length > 0) {
//                                                 setManga("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === manga
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setManga("manga");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("manga")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "manga",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 manga.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     manga.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Manga
//                                         </p>
//                                         {manga.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (art.length > 0) {
//                                                 setArt("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === art
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setArt("art");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("art")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "art",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 art.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     art.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Art
//                                         </p>
//                                         {art.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (vegan.length > 0) {
//                                                 setVegan("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === vegan
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setVegan("vegan");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("vegan")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "vegan",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 vegan.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     vegan.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Vegan
//                                         </p>
//                                         {vegan.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs>
//                             <Grid
//                                 container
//                                 spacing={0}
//                                 direction="column"
//                                 style={{ width: "100%" }}
//                             >
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (reading.length > 0) {
//                                                 setReading("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === reading
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setReading("reading");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("reading")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "reading",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 reading.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     reading.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Reading
//                                         </p>
//                                         {reading.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (mountain.length > 0) {
//                                                 setMountain("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === mountain
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setMountain("mountain");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("mountain")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "mountain",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 mountain.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     mountain.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Mountain
//                                         </p>
//                                         {mountain.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (travelling.length > 0) {
//                                                 setTravelling("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === travelling
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setTravelling("travelling");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("travelling")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "travelling",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 travelling.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     travelling.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Travelling
//                                         </p>
//                                         {travelling.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (football.length > 0) {
//                                                 setFootball("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === football
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setFootball("football");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("football")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "football",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 football.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     football.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Football
//                                         </p>
//                                         {football.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>

//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (nba.length > 0) {
//                                                 setNba("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === nba
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setNba("nba");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("nba")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "nba",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 nba.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     nba.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             NBA
//                                         </p>
//                                         {nba.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (hiphop.length > 0) {
//                                                 setHiphop("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === hiphop
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setHiphop("hip hop");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("hip hop")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "hip hop",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 hiphop.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     hiphop.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Hip Hop
//                                         </p>
//                                         {hiphop.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (athlete.length > 0) {
//                                                 setAthlete("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === athlete
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setAthlete("athlete");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("athlete")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "athlete",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 athlete.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     athlete.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Athlete
//                                         </p>
//                                         {athlete.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (astrology.length > 0) {
//                                                 setAstrology("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === astrology
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setAstrology("astrology");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("astrology")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "astrology",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 astrology.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     astrology.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Astrology
//                                         </p>
//                                         {astrology.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (dancing.length > 0) {
//                                                 setDancing("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === dancing
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setDancing("dancing");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("dancing")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "dancing",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 dancing.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     dancing.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Dancing
//                                         </p>
//                                         {dancing.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (foodie.length > 0) {
//                                                 setFoodie("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === foodie
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setFoodie("foodie");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("foodie")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "foodie",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 foodie.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     foodie.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Foodie
//                                         </p>
//                                         {foodie.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (anime.length > 0) {
//                                                 setAnime("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === anime
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setAnime("anime");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("anime")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "anime",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 anime.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     anime.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Anime
//                                         </p>
//                                         {anime.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (marvel.length > 0) {
//                                                 setMarvel("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === marvel
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setMarvel("marvel movie");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat(
//                                                         "marvel movie"
//                                                     )
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "marvel movie",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 marvel.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     marvel.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Marvel Movies
//                                         </p>
//                                         {marvel.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                                 <Grid item>
//                                     <Paper
//                                         onClick={() => {
//                                             if (vegetarian.length > 0) {
//                                                 setVegetarian("");
//                                                 let index = hobbies.findIndex(
//                                                     (e) => e === vegetarian
//                                                 );
//                                                 hobbies.splice(index, 1);

//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([...hobbies])
//                                                 );
//                                             } else {
//                                                 setVegetarian("vegetarian");
//                                                 setHobbies((hobbies) =>
//                                                     hobbies.concat("vegetarian")
//                                                 );
//                                                 localStorage.setItem(
//                                                     "items",
//                                                     JSON.stringify([
//                                                         ...hobbies,
//                                                         "vegetarian",
//                                                     ])
//                                                 );
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         style={{
//                                             padding: 8,
//                                             marginBottom: 12,
//                                             display: "flex",
//                                             flexDirection: "row",
//                                             alignItems: "center",
//                                             justifyContent: "space-between",
//                                             borderColor:
//                                                 vegetarian.length > 0
//                                                     ? "#C62251"
//                                                     : "gray",
//                                         }}
//                                     >
//                                         <p
//                                             style={{
//                                                 color:
//                                                     vegetarian.length > 0
//                                                         ? "#C62251"
//                                                         : "gray",
//                                             }}
//                                         >
//                                             Vegetarian
//                                         </p>
//                                         {vegetarian.length > 0 ? (
//                                             <i
//                                                 class="fa-solid fa-circle-check"
//                                                 style={{ color: "#C62251" }}
//                                             ></i>
//                                         ) : (
//                                             <i></i>
//                                         )}
//                                     </Paper>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </div>

//                 <Button
//                     disabled={hobbies.length > 0 ? false : true}
//                     variant="contained"
//                     className="w-full"
//                     style={{
//                         marginTop: 21,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         handleHobby();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </div>
//         );
//     };

//     // IMAGE UPLOAD
//     const [avatar, setAvatar] = React.useState(null);
//     const [avatar2, setAvatar2] = React.useState(null);

//     // GALLERY IMAGES
//     const [gallery1, setGallery1] = React.useState(null);
//     const [gallery2, setGallery2] = React.useState(null);
//     const [gallery3, setGallery3] = React.useState(null);
//     const [gallery4, setGallery4] = React.useState(null);
//     const [gallery5, setGallery5] = React.useState(null);
//     const [gallery6, setGallery6] = React.useState(null);

//     const [bio, setBio] = React.useState("");

//     const imageUpload = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});
//         const id = toast.loading("Please wait...")
//         if (token == null) {
//             return;
//         }
//         // if(hobbies.length >10){
//         //     toast.error("You can only choose 10 hobbies.")
//         //     return;
//         // }

//         let formData = new FormData();
//         formData.append("avatar1", avatar);
//         formData.append("avatar2", avatar2);
//         formData.append("gallery1", gallery1);
//         formData.append("gallery2", gallery2);
//         if(gallery3 !== null){
//            formData.append("gallery3", gallery3);
//         }

//         if(gallery4 !== null){
//             formData.append("gallery4", gallery4);

//         }

//         if(gallery5 !== null){
//             formData.append("gallery5", gallery5);

//         }
//         if(gallery6 !== null){
//             formData.append("gallery6", gallery6);
//         }


//         formData.append("bio", bio);
//         axios.post("/api/avatar", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     Accept: "application/json",
//                     Authorization: "Bearer " + token,
//                 },
//             })
//             .then((response) => {
//                 console.log(response.data);

//                 setSteps("location");
//                 setStepNumber(11);
//                 localStorage.removeItem(REG_STEPS);
//                 ls.set(
//                     REG_STEPS, { step: 11, title: "location" },{encrypt:true}
//                 );
//                 toast.update(id, {render:response.data.message, type:'success',isLoading: false, autoClose:true})

//             })
//             .catch((error) => {

//                 toast.update(id, {render:error.response.data.message, type:'error', isLoading: false, autoClose:true})

//             });
//     };

//     const PhotoDetails = () => {
//         return (
//             <>
//                 <p style={{ marginTop: 31, marginBottom: 12 }}>
//                     <span style={{ color: "#C62251", fontWeight: "bold" }}>
//                         Profile Pictures
//                     </span>
//                     <small> (2 Different Pictures are Mandatory)</small>
//                 </p>

//                 <Grid container spacing={2} direction="row">
//                     <Grid
//                         item
//                         style={{
//                             justifyContent: "center",
//                             alignItems: "center",
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: 12,
//                         }}
//                     >
//                         {/* <Paper style={{ padding: 34, width: 120, height: 120 }}>
//                             Photo
//                         </Paper> */}
//                         <img
//                             src={
//                                 avatar == null
//                                     ? data.photo_profile
//                                     : URL.createObjectURL(avatar)
//                             }
//                             onClick={() => {
//                                 document.getElementById("avatar1").click();
//                             }}
//                             style={{
//                                 width: 146,
//                                 height: 146,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="avatar1"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setAvatar(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                         <p>Profile Picture 1</p>
//                     </Grid>
//                     <Grid
//                         item
//                         style={{
//                             justifyContent: "center",
//                             alignItems: "center",
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: 12,
//                         }}
//                     >
//                         <img
//                             src={
//                                 avatar2 == null
//                                     ? data.photo_profile
//                                     : URL.createObjectURL(avatar2)
//                             }
//                             onClick={() => {
//                                 document.getElementById("avatar2").click();
//                             }}
//                             style={{
//                                 width: 146,
//                                 height: 146,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="avatar2"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setAvatar2(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                         <p>Profile Picture 2</p>
//                     </Grid>
//                 </Grid>

//                 <p
//                     style={{
//                         color: "#C62251",
//                         fontWeight: "bold",
//                         marginTop: 31,
//                         marginBottom: 21,
//                     }}
//                 >
//                     Upload Pictures for Gallery
//                 </p>

//                 <Grid spacing={2}   container className="flex flex-wrap">
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery1 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery1)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery1").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "cover",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery1"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery1(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery2 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery2)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery2").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery2"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery2(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery3 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery3)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery3").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery3"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery3(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery4 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery4)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery4").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery4"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery4(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery5 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery5)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery5").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery5"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery5(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                     <Grid item>
//                         <img
//                             src={
//                                 gallery6 == null
//                                     ? data.gallery
//                                     : URL.createObjectURL(gallery6)
//                             }
//                             onClick={() => {
//                                 document.getElementById("gallery6").click();
//                             }}
//                             style={{
//                                 width: 95,
//                                 backgroundSize: "contain",
//                                 borderRadius: 3,
//                             }}
//                         />
//                         <input
//                             id="gallery6"
//                             type="file"
//                             onChange={(e) => {
//                                 if (e.target.files && e.target.files[0]) {
//                                     let img = e.target.files[0];
//                                     setGallery6(img);
//                                 }
//                             }}
//                             style={{ display: "none" }}
//                         />
//                     </Grid>
//                 </Grid>

//                 <p style={{ marginTop: 31, marginBottom: 12 }}>
//                     <span style={{ color: "#C62251", fontWeight: "bold" }}>
//                         Short Bio
//                     </span>
//                     <small> (25 Characters)</small>
//                 </p>
//                 <TextField
//                  className="w-full block"
//                     id="standard-multiline-static"
//                     label="Enter Short Bio atleast 25 characters"
//                     multiline
//                     rows={3}
//                     defaultValue=""
//                     variant="outlined"
//                     inputProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     InputLabelProps={{
//                         style: {
//                             fontFamily: "Dosis",
//                             fontWeight: "bold",
//                         },
//                     }}
//                     value={bio}
//                     onChange={(e) => {
//                         setBio(e.target.value);
//                     }}
//                 />
//                 <Button
//                 className="w-full block"
//                     disabled={
//                         avatar == null &&
//                         avatar2 == null &&
//                         gallery1 == null &&
//                         gallery2 == null &&
//                         gallery3 == null &&
//                         gallery4 == null &&
//                         gallery5 == null &&
//                         gallery6 == null &&
//                         bio.length < 10
//                             ? true
//                             : false
//                     }
//                     variant="contained"
//                     style={{
//                         marginTop: 21,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         imageUpload();
//                     }}
//                 >
//                     Continue
//                 </Button>
//             </>
//         );
//     };

//     const [value, setValue] = React.useState([1, 50]);

//     const [allowProfile, setAllowProfile] = React.useState(false);

//     let autoComplete;



//     async function handlePlaceSelect(updateQuery) {
//         const addressObject = autoComplete.getPlace();
//         const query = addressObject.formatted_address;
//         updateQuery(query);
//         console.log(addressObject);
//     }




//     const [statesearch, setStatesearch] = React.useState([])
//     const [citysearch, setCitysearch] = React.useState([])

//     const [countrycode, setCountrycode] = React.useState('')
//     const [statecode, setStatecode] = React.useState('')
//     const [citycode, setCitycode] = React.useState('')
//     const [latitude, setLatitude] = React.useState('')
//     const [longitude, setLongitude] = React.useState('')
//     const [currency, setCurrency] = React.useState('')
//     const [currencySymbol, setCurrencySymbol] = React.useState('')
//     const [flag, setFlag] = React.useState('🇺🇸')

//     const handleLocation = () => {
//         const token = ls.get(DATABASE_KEY, {decrypt:true});

//         if (token == null) {
//             return;
//         }

//         axios
//             .post(
//                 "/api/location",
//                 {
//                     country: countrycode,
//                     state: statecode,
//                     city: citycode,
//                     latitude: latitude,
//                     longitude:longitude,
//                     currency:currency,
//                     currency_symbol:currencySymbol
//                 },
//                 {
//                     headers: {
//                         Accept: "application/json",
//                         Authorization: "Bearer " + token,
//                     },
//                 }
//             )
//             .then((response) => {
//                 console.log(response.data);
//                 setSteps("profile-completed");
//                 setStepNumber(12);

//                 ls.set(
//                     REG_STEPS, { step: 12, title: "profile-completed" },{}
//                 );
//                 toast.success(response.data.message);
//             })
//             .catch((error) => {
//                 toast.error(error.response.data.message);
//             });
//     };

//     const LocationDetails = () => {
//         return (
//             <>
//                 <div style={{ position: "relative", marginTop: 34 }}>
//                     {/* <img src={data.map} style={{ width: "100%" }} /> */}
//                     <div
//                         style={{
//                             position: "absolute",
//                             width: "80%",
//                             height: "80%",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             top: 0,
//                             bottom: 0,
//                             left: 0,
//                             right: 0,
//                             display: "flex",
//                         }}
//                     >
//                         {/* <Spinner
//                             name="ball-scale-ripple-multiple"
//                             style={{
//                                 color: "#cecece",
//                                 fontSize: 87,
//                                 display: "flex",
//                             }}
//                         />
//                         <i
//                             class="fa-solid fa-magnifying-glass"
//                             style={{ color: "gray" }}
//                         ></i> */}
//                     </div>
//                 </div>

// {/* country */}


// <select className='ring-1 p-3 mb-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
//         let result = states.filter((s)=>s.country_code  == e.target.value)
//         setStatesearch(result)
//         console.log(result.length)
//         setCountrycode(e.target.value)
//         let countryDetails = country_currency.filter((c)=>c.isoCode == e.target.value);
//         console.log(countryDetails[0].currency['symbol_native'])
//         console.log(countryDetails[0].currency['code'])


//         setFlag(countryDetails[0].flag['emoji'])
//         setCurrency(countryDetails[0].currency['code'])
//         setCurrencySymbol(countryDetails[0].currency['symbol_native'])
//        }}>

//                 <option>Select country</option>
//             {country.map((c,index)=><option key={index} value={c.code}>{c.name}</option>)}
//         </select>

// {/* state */}
//         <select className='ring-1 p-3 mb-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
//             let result = cities.filter((c)=>c.state_code == e.target.value && c.country_code == countrycode)
//             console.log(result.length)
//             setCitysearch(result)
//             setStatecode(e.target.value)
//         }}>

// <option>Select state</option>
//             {statesearch.map((s, index)=><option key={index} value={s.state_code} >{s.name}</option>)}
//         </select>
// {/* city */}
// <select className='ring-1 p-3 mb-4 ring-slate-900/5 outline-0 bg-transparent w-full'
// value={citycode} onChange={(e) =>{
//     setCitycode(e.target.value)
//     let result = cities.filter((c)=>c.name == e.target.value)

//    console.log(result)

//     setLatitude(result[0].latitude)
//     setLongitude(result[0].longitude)
//     setCountrycode(result[0].country_code)
//     setStatecode(result[0].state_code)


//     }}
// >
//         <option>Select city</option>
//             {citysearch.map((c,index)=><option key={index}>{c.name}</option>)}
//         </select>
//                 <Button
//                     variant="contained"
//                     className="w-full"
//                     style={{
//                         marginTop: 12,
//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                     }}
//                     color="primary"
//                     onClick={() => {
//                         // setSteps("sex");
//                         // setStepNumber(4);
//                         handleLocation();
//                     }}
//                 >
//                     Finish
//                 </Button>
//             </>
//         );
//     };

//     // Profile Completed
//     const valueProgress = 0.66;
//     const ProfileCreationFinished = ()=>{
//         return (
//             <div className="flex flex-col items-center">
//              <h1 className="font-bold text-2xl" style={{ textAlign:'center', width:'100%', fontSize:21, alignSelf:'center',color:'#C62251'  }}>Congratulations! Profile Creation Finished</h1>

//                 <img src={data.done} style={{ width:280, alignSelf:'center' }} />
//                 <p style={{ fontSize:15,  flexWrap:'wrap', width:300, textAlign:'center', alignSelf:'center' }}>You can Always Update or Change Profile Details in Profile Settings</p>
//                 <div style={{ display:'flex',justifyContent:'center', alignItems:'center', gap:12, marginTop:23, marginBottom:23  }}>
//                         <div style={{ width:60, height:60 }}><CircularProgressbar styles={buildStyles({
//                             pathColor:"#C62251"
//                         })} value={valueProgress} maxValue={1} text={`${valueProgress * 100}%`} /></div>

//                     <p style={{ fontSize:18, fontWeight:'bold' }}>Profile Completed</p>
//                 </div>


//                 <p className="font-bold mb-4" style={{  fontSize:15, marginTop:24, width:370, alignSelf:'center', textAlign:'center' }}>Update your Preferences to discover the most compatible</p>


//                         <Button variant="contained"
//                         className="w-full mt-[34px]"
//                     style={{

//                         height: 48,
//                         fontFamily: "Dosis",
//                         fontWeight: "bold",
//                         width:'100%'
//                     }}
//                     color="primary"
//                     onClick={()=>{

//                         localStorage.setItem(PREFERENCE, JSON.stringify({'step':1, 'title':'age'}))
//                         localStorage.removeItem(REG_STEPS)
//                         navigate('/preference', {replace:true});
//                     }}
//                     >Setup Your Preferences</Button>


//             </div>
//         )
//     }

//     return (
//         <AuthContainer>
//             <div className="progress__indicator">
//                 <div
//                     style={{
//                         backgroundColor: "#C62251",
//                         width: `${stepNumber/12*100}%`,
//                         height: 12,
//                     }}
//                 ></div>
//             </div>
//             <div className="personal__title">
//                 <div>
//                     {stepNumber == 10 && (
//                         <>
//                             <h1 className="font-bold text-2xl">Profile Pictures & Bio {stepNumber}/11 </h1>
//                             <p>
//                                 Please Picture so People will know who you are
//                             </p>
//                         </>
//                     )}

//                     {stepNumber == 11 && (
//                         <>
//                             <h1 className="font-bold text-2xl">Your Location {stepNumber}/11 </h1>
//                             <p>
//                                 Choose your Country, State and City...
//                             </p>
//                         </>
//                     )}


//                     {stepNumber < 10 && (
//                         <>
//                             <h1 className="font-bold text-2xl">Personal Information {stepNumber}/11</h1>
//                             <p>Please enter the following informations</p>
//                         </>
//                     )}
//                 </div>

//                 {/* {stepNumber != 12 &&(<a href="" style={{ color: "#C62251", fontWeight: "bold" }}>
//                     Skip
//                 </a>)} */}
//             </div>
//             {/* Personal Details */}
//             {steps == "personal" && PersonalDetails()}

//             {/* Drinker Details */}
//             {steps == "drink" && DrinkDetail()}

//             {/* Smoker Details */}
//             {steps == "smoke" && SmokerDetail()}

//              {/* Smoker Details */}
//              {steps == "food" && FoodDetail()}

//             {/* Relationship Details */}
//             {steps == "friendship" && FriendshipDetail()}

//             {/* Religious Details */}
//             {steps == "religion" && ReligiousDetails()}

//             {/* Job Title */}
//             {steps == "job" && JobDetails()}

//             {/* Sex Orientation */}
//             {steps == "sex" && SexOrientation()}

//             {/* Hobbies and Interest */}
//             {steps == "hobbies" && Hobbies()}

//             {/* Profile Photos and BIO */}
//             {steps == "photo" && PhotoDetails()}

//             {/* Location Access */}
//             {steps == "location" && LocationDetails()}

//             {/* Profile Update Completed */}
//             {steps == "profile-completed" && ProfileCreationFinished()}
//         </AuthContainer>
//     );
// }

// export default Onboarding;
