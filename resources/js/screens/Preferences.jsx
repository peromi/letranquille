import React from 'react'
import AuthContainer from '../containers/AuthContainer'
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { apiKey, data } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ls from 'localstorage-slim'


const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";
const PREFERENCE = "preference";
const USERPASS = "userpass";
const MAINDB = "dao";
function Preferences() {
    const navigate = useNavigate()
    const [steps, setSteps] = React.useState("age");

    const [stepNumber, setStepNumber] = React.useState(1);


    React.useEffect(()=>{
        const data = ls.get(DATABASE_KEY, {decrypt:true});
        console.log(data);

        if (data !== null) {
            // navigate('/login', {replace:true})
        } else {
        }

        const getdata = JSON.parse(localStorage.getItem(PREFERENCE));
        if (getdata !== null) {
            if (getdata.title != null) {
                setSteps(getdata.title);
            }

            setStepNumber(getdata.step);
        }
    })



    // AGE PREFERENCE
    function valuetext(value) {
        return `${value}yrs`;
    }
    const [value, setValue] = React.useState([20, 28])
    const handleAge =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-age",{
            min:value[0],
            max:value[1]
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("drink");
                setStepNumber(2);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':2, 'title':'drink'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
    const AgePreference = ()=>{
        return(
            <div>
                <p style={{ marginTop:33,  color: "#C62251", fontWeight: "bold" }}>Your Ideal Partner age should be between..</p>

                <h3 style={{ marginTop:12,}}>Age</h3>
                <Grid container spacing={2} direction="row">
                    <Grid item>18</Grid>
                    <Grid item xs>
                        <Slider
                            max={80}
                            min={18}
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                    </Grid>
                    <Grid item>80</Grid>
                </Grid>
                <p
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        width: "100%",
                        fontWeight: "bold",
                    }}
                >
                    {value[0]}yrs - {value[1]}yrs
                </p>
                <Button
                    variant="contained"
                    style={{
                        marginTop: 132,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",
                    }}
                    color="primary"
                    onClick={() => {
                        // setSteps("sex");
                        // setStepNumber(4);
                        handleAge()
                    }}
                >
                    Continue
                </Button>
            </div>
        )
    }

    // DRINK PREFERENCE
    const [drinker, setDrinker] = React.useState("");
    const handleDrink =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-drink",{
            type:drinker
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("smoke");
                setStepNumber(3);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':3, 'title':'smoke'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
    const DrinkPreference = ()=>{
        return(
            <>
                <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>Your Ideal Partner should be..</p>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    style={{ width: "48%" }}
                >
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setDrinker("drinker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    drinker == "drinker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        drinker == "drinker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Drinker
                            </p>
                            {drinker == "drinker" ? (
                                <img src={data.drink} />
                            ) : (
                                <img src={data.drink} />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setDrinker("non drinker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    drinker == "non drinker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        drinker == "non drinker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Non Drinker
                            </p>
                            {drinker == "non drinker" ? (
                                <img src={data.nodrink}  />
                            ) : (
                                <img src={data.nodrink}   />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setDrinker("occasional drinker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    drinker == "occasional drinker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        drinker == "occasional drinker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Occasional Drinker
                            </p>
                            {drinker == "occasional drinker" ? (
                                <img src={data.wine}  />
                            ) : (
                                <img src={data.wine}   />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setDrinker("doesn't matter");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    drinker == "doesn't matter"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        drinker == "doesn't matter"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Doesn't Matter
                            </p>

                        </Paper>
                    </Grid>


                    </Grid>

                <Button
                disabled={drinker.length>0?false:true}
                    variant="contained"
                    style={{
                        marginTop: 132,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",

                    }}
                    color="primary"
                    onClick={() => {
                        // setSteps("sex");
                        // setStepNumber(4);
                        handleDrink();
                    }}
                >
                    Continue
                </Button>
            </>
        )
    }

    // SMOkER PREFERENCE
    const [smoker, setSmoker] = React.useState("");
    const handleSmoke =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-smoke",{
            type:smoker
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("food");
                setStepNumber(4);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':4, 'title':'food'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
    const SmokerPreference = ()=>{
        return(
            <>
                <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>Your Ideal Partner should be..</p>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    style={{ width: "48%" }}
                >
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setSmoker("smoker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    smoker == "smoker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        smoker == "smoker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                                Smoker
                            </p>
                            {smoker == "smoker" ? (
                                <img src={data.smoke} />
                            ) : (
                                <img src={data.smoke} />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setSmoker("non smoker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    smoker == "non smoker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        smoker == "non smoker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Non Smoker
                            </p>
                            {smoker == "non smoker" ? (
                                <img src={data.nosmoke}  />
                            ) : (
                                <img src={data.nosmoke}   />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setSmoker("occasional smoker");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                                    smoker == "occasional smoker"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        smoker == "occasional smoker"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Occasional Smoker
                            </p>
                            {smoker == "occasional smoker" ? (
                                <img src={data.smoke}  />
                            ) : (
                                <img src={data.smoke}   />
                            )}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper
                            onClick={() => {
                                setSmoker("doesn't matter");
                            }}
                            variant="outlined"
                            style={{
                                height:65,
                                paddingTop:12,
                                paddingBottom:12,
                                paddingLeft: 14,
                                paddingRight:14,
                                marginBottom: 12,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderColor:
                            smoker == "doesn't matter"
                                        ? "#C62251"
                                        : "black",
                            }}
                        >
                            <p
                                style={{
                                    color:
                                        smoker == "doesn't matter"
                                            ? "#C62251"
                                            : "black",
                                }}
                            >
                               Doesn't Matter
                            </p>

                        </Paper>
                    </Grid>


                    </Grid>

                <Button
                disabled={smoker.length>0?false:true}
                    variant="contained"
                    style={{
                        marginTop: 132,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",

                    }}
                    color="primary"
                    onClick={() => {
                        // setSteps("sex");
                        // setStepNumber(4);
                        handleSmoke();
                    }}
                >
                    Continue
                </Button>
            </>
        )
    }


     // SMOkER PREFERENCE
     const [food, setFood] = React.useState("");
     const handleFood =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-food",{
            type:food
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("friendship");
                setStepNumber(5);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':5, 'title':'friendship'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
     const FoodPreference = ()=>{
         return(
             <>
                 <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>Your Ideal Partner should be..</p>
                 <Grid
                     container
                     spacing={0}
                     direction="column"
                     style={{ width: "48%" }}
                 >
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFood("vegetarian");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     food == "vegetarian"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         food == "vegetarian"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                 Vegetarian
                             </p>
                             {food == "vegetarian" ? (
                                 <img src={data.foodie} />
                             ) : (
                                 <img src={data.foodie} />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFood("vegan");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     food == "vegan"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         food == "vegan"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Vegan
                             </p>
                             {food == "vegan" ? (
                                 <img src={data.flower}  />
                             ) : (
                                 <img src={data.flower}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFood("non vegetarian");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     food == "non vegetarian"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         food == "non vegetarian"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Non Vegetarian
                             </p>
                             {food == "non vegetarian" ? (
                                 <img src={data.chicken}  />
                             ) : (
                                 <img src={data.chicken}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFood("doesn't matter");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                             food == "doesn't matter"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         food == "doesn't matter"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Doesn't Matter
                             </p>

                         </Paper>
                     </Grid>


                     </Grid>

                 <Button
                 disabled={food.length>0?false:true}
                     variant="contained"
                     style={{
                         marginTop: 132,
                         height: 48,
                         fontFamily: "Dosis",
                         fontWeight: "bold",

                     }}
                     color="primary"
                     onClick={() => {
                         // setSteps("sex");
                         // setStepNumber(4);
handleFood()
                     }}
                 >
                     Continue
                 </Button>
             </>
         )
     }

    //  DESIRED FRIENDSHIP
    const [friendship, setFriendship] = React.useState("");
    const handleFriendship =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-desired-relationship",{
            type:friendship
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("bodytype");
                setStepNumber(6);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':6, 'title':'bodytype'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
     const FriendshipPreference = ()=>{
         return(
             <>
                 <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>What is your desired relationship?</p>
                 <Grid
                     container
                     spacing={0}
                     direction="column"
                     style={{ width: "48%" }}
                 >
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFriendship("long term");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     friendship == "long term"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         friendship == "long term"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                 Long Term
                             </p>
                             {friendship == "long term" ? (
                                 <img src={data.ring} />
                             ) : (
                                 <img src={data.ring} />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFriendship("short term");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     friendship == "short term"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         friendship == "short term"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Short Term
                             </p>
                             {friendship == "short term" ? (
                                 <img src={data.couple}  />
                             ) : (
                                 <img src={data.couple}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFriendship("hookups");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     friendship == "hookups"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         friendship == "hookups"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Hookups
                             </p>
                             {friendship == "hookups" ? (
                                 <img src={data.bed}  />
                             ) : (
                                 <img src={data.bed}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setFriendship("new friends");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                             friendship == "new friends"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         friendship == "new friends"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                New Friends
                             </p>
                             {friendship == "new friends" ? (
                                 <img src={data.friend}  />
                             ) : (
                                 <img src={data.friend}   />
                             )}
                         </Paper>
                     </Grid>


                     </Grid>

                 <Button
                 disabled={friendship.length>0?false:true}
                     variant="contained"
                     style={{
                         marginTop: 132,
                         height: 48,
                         fontFamily: "Dosis",
                         fontWeight: "bold",

                     }}
                     color="primary"
                     onClick={() => {
                         // setSteps("sex");
                         // setStepNumber(4);
handleFriendship()
                     }}
                 >
                     Continue
                 </Button>
             </>
         )
     }

    //  BODY TYPE
    const [bodytype, setBodytype] = React.useState("");
    const handleBodytype =()=>{
        const token = ls.get(DATABASE_KEY, {decrypt:true});
        if (token == null) {
            return;
        }

        axios.post("/api/preference-bodytype",{
            type:bodytype
        },{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
            setSteps("religion");
                setStepNumber(7);
            localStorage.setItem(PREFERENCE, JSON.stringify({'step':7, 'title':'religion'}))
            toast.success(response.data.message)
        }).catch(error=>{
            toast.error(error.response.data.message)
        })
    }
     const BodytypePreference = ()=>{
         return(
             <>
                 <p style={{ marginTop:33, marginBottom:24,  color: "#C62251", fontWeight: "bold" }}>Your Ideal Partner should be..</p>
                 <Grid
                     container
                     spacing={0}
                     direction="column"
                     style={{ width: "48%" }}
                 >
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setBodytype("slim");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     bodytype == "slim"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         bodytype == "slim"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                 Slim
                             </p>
                             {bodytype == "slim" ? (
                                 <img src={data.slimActive} />
                             ) : (
                                 <img src={data.slimo} />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setBodytype("average");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     bodytype == "average"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         bodytype == "average"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Average                             </p>
                             {bodytype == "average" ? (
                                 <img src={data.averageActive}  />
                             ) : (
                                 <img src={data.averageo}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setBodytype("curvy");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                                     bodytype == "curvy"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         bodytype == "curvy"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Curvy
                             </p>
                             {bodytype == "curvy" ? (
                                 <img src={data.curvyActive}  />
                             ) : (
                                 <img src={data.curvyo}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setBodytype("muscular");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                             bodytype == "muscular"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         bodytype == "muscular"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Muscular
                             </p>
                             {bodytype == "muscular" ? (
                                 <img src={data.muscularActive}  />
                             ) : (
                                 <img src={data.lift}   />
                             )}
                         </Paper>
                     </Grid>
                     <Grid item>
                         <Paper
                             onClick={() => {
                                 setBodytype("doesn't matter");
                             }}
                             variant="outlined"
                             style={{
                                 height:65,
                                 paddingTop:12,
                                 paddingBottom:12,
                                 paddingLeft: 14,
                                 paddingRight:14,
                                 marginBottom: 12,
                                 display: "flex",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                                 borderColor:
                             bodytype == "doesn't matter"
                                         ? "#C62251"
                                         : "black",
                             }}
                         >
                             <p
                                 style={{
                                     color:
                                         bodytype == "doesn't matter"
                                             ? "#C62251"
                                             : "black",
                                 }}
                             >
                                Doesn't Matter
                             </p>

                         </Paper>
                     </Grid>

                     </Grid>

                 <Button
                 disabled={bodytype.length>0?false:true}
                     variant="contained"
                     style={{
                         marginTop: 72,
                         height: 48,
                         fontFamily: "Dosis",
                         fontWeight: "bold",

                     }}
                     color="primary"
                     onClick={() => {
                         // setSteps("sex");
                         // setStepNumber(4);
handleBodytype()
                     }}
                 >
                     Continue
                 </Button>
             </>
         )
     }

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






    const ReligiousPreference = () => {
        return (
            <>
                <p
                    style={{
                        marginBottom: 24,
                        color: "#C62251",
                        marginTop: 21,
                        fontWeight:'bold'
                    }}
                >
                    My Ideal Partner should be..
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
                    style={{ marginTop: 30 }}
                />
                <Button
                className="w-full block"
                disabled={religion.length>0?false:true}
                    variant="contained"
                    style={{
                        marginTop: 21,
                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",
                    }}
                    color="primary"
                    onClick={() => {
                        handleReligion();


                    }}
                >
                    Finish
                </Button>
            </>
        );
    };



    // Preference Completed
    const PreferenceCompleted = ()=>{
        return (
            <div className="flex flex-col items-center">
             <h1 className="font-bold" style={{   width:'80%', fontSize:21, alignSelf:'center',color:'#C62251'  }}>Congratulations! All the Preferences has been updated</h1>

                <img src={data.done} style={{ width:280, alignSelf:'center' }} />
                <p style={{marginTop:34, marginBottom:45, fontSize:15,  flexWrap:'wrap', width:300, textAlign:'center', alignSelf:'center' }}>Click Continue to start Discovering your Matches now</p>




                <Button variant="contained"
                    style={{

                        height: 48,
                        fontFamily: "Dosis",
                        fontWeight: "bold",
                        width:'100%'
                    }}
                    color="primary"
                    onClick={()=>{

                        localStorage.removeItem(PREFERENCE)
                        ls.remove(DATABASE_KEY)
                        loginUserAutomatically()
                        // navigate('/login', {replace:true});
                    }}
                    >Continue</Button>
            </div>
        )
    }

    const loginUserAutomatically = async ()=>{
       var user = ls.get(USERPASS, {decrypt:true})

       if(user !== null){

        let id = toast.loading("Please wait...")
        await axios.post('/api/login',{
            email:user.email,
            password:user.password
        }).then((response)=>{
            console.log("response")
                console.log(response.data)
                ls.remove('items');
                toast.update(id, {render: "Logged in", type: "success", isLoading: false, autoClose:true});


                ls.set(MAINDB, {user:response.data},{encrypt:true})
                ls.set(DATABASE_KEY, response.data.token,{encrypt:true});


                // addUser(response.data.user.id, response.user.name)
                navigate('/matches',{replace:true})

        }).catch(e=>{
            toast.update(id, {render: "Something went wrong", type: "error", isLoading: false, autoClose:true });

            console.log(e.response)
            toast.error(e.response.data.message)
            navigate('/login',{replace:true})

        })
       }else{

        navigate('/login',{replace:true})
       }

    }
  return (
   <AuthContainer>
            <div className="progress__indicator">
                <div
                    style={{
                        backgroundColor: "#C62251",
                        width: `${stepNumber/7 * 100}%`,
                        height: 12,
                    }}
                ></div>
            </div>
            <div className="personal__title">
                <div>




                    {stepNumber < 8 && (
                        <>
                            <h1 className="font-bold text-2xl">Preferences ({stepNumber}/7)</h1>
                            <p style={{ marginTop:34 }}>After you have finished, we will show you the most compatible matches<br />based on your Preferences</p>
                        </>
                    )}
                </div>

                <a href="" style={{ color: "#C62251", fontWeight: "bold" }}>

                </a>
            </div>

            {/* AGE PANEL */}
            {steps == "age" && AgePreference()}

            {/* DRINK PANEL */}
            {steps == "drink" && DrinkPreference()}

            {/* SMOKER PANEL */}
            {steps == "smoke" && SmokerPreference()}

            {/* FOOD PANEL */}
            {steps == "food" && FoodPreference()}

            {/* FRIENDSHIP PANEL */}
            {steps == 'friendship' && FriendshipPreference()}

            {/* BODY TYPE PANEL */}
            {steps == 'bodytype' && BodytypePreference()}

            {/* RELIGION PANEL */}
            {steps == "religion" && ReligiousPreference()}

            {/* PREFERENCE COMPLETED */}
            {steps == "preference-completed" && PreferenceCompleted()}

   </AuthContainer>
  )
}

export default Preferences
