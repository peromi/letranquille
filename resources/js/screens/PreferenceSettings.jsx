import React from 'react'
import '../../css/preferenceedit.scss'
import MainContainer from '../containers/MainContainer'

import ls from 'localstorage-slim'
import { SocketContext } from '../context/SocketContext'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Button, Checkbox, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";


import 'animate.css';


const USERDB = 'dao'
const DB = "user-m9j234u94"
function PreferenceSettings() {
    const {id} = React.useContext(SocketContext)

    const [value, setValue] = React.useState('')

    const [preferenceAge, setPreferenceAge] = React.useState('')
    const [preferenceFood, setPreferenceFood] = React.useState('')
    const [preferenceDrink, setPreferenceDrink] = React.useState('')
    const [preferenceRelationship, setPreferenceRelationship] = React.useState('')
    const [preferenceReligion, setPreferenceReligion] = React.useState('')
    const [preferenceSmoke, setPreferenceSmoke] = React.useState('')
    const [preferenceBodytype, setPreferenceBodytype] = React.useState('')
    const [toggle, setToggle] = React.useState(false)

    const [setting, setSetting] = React.useState('')
    const [anyReligion, setAnyReligion]  = React.useState(false)

    const handleToggle =()=>{
        if(toggle == true){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const handleChange = (e)=>{
        setValue(e.target.value)
        setAnyReligion(false);
    }

    function valuetext(value) {
        return `${value}yrs`;
    }
    const [age, setAge] = React.useState([20, 28])

    const loadPreference = () =>{

        const token = ls.get(DB, {decrypt:true});
            axios.get('/api/all-preferences',{
                headers:{
                    'Accept':'application/json',
                    'Authorization': 'Bearer '+token
                }
            }).then((response)=>{
                console.log(response.data)
                setPreferenceAge(response.data.preference.preference_age)
                setPreferenceFood(response.data.preference.preference_food)
                setPreferenceSmoke(response.data.preference.preference_smoke)
                setPreferenceRelationship(response.data.preference.preference_relationship)
                setPreferenceDrink(response.data.preference.preference_drink)
                setPreferenceBodytype(response.data.preference.preference_bodytype)
                setPreferenceReligion(response.data.preference.preference_religion)


            }).catch((error)=>{
               //  toast.error(error)
               console.log(error)



            })
    }

    React.useEffect(()=>{

        loadPreference()
    },[])
  return (
    <MainContainer>
    <div style={{padding:35, marginTop:124, marginLeft:34, marginRight:34, background:'white',   }}>
       <div style={{ display:'flex', gap:12, marginBottom:23, justifyContent:'flex-start', alignItems:'center' }}>
           <i className='fi fi-rr-apps-add' style={{ fontSize:34, color:'#C62251' }}></i>
           <h2 style={{ color:'#C62251' }}>Preference Settings</h2>


       </div>
       {/* <Match /> */}

       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-rr-utensils' style={{ fontSize:24, fontWeight:'bold' }}></i>
            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Food Preference</h3>
                <p style={styles.pink}>{preferenceFood.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('food')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>
       {/* Drinking habit */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-rr-beer' style={{ fontSize:24, fontWeight:'bold' }}></i>
            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Drinking Habit</h3>
                <p style={styles.pink}>{preferenceDrink.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('drink')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>
       {/* Type of relationship */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-sr-heart' style={{ fontSize:24, fontWeight:'bold' }}></i>
            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Type of Relationship</h3>
                <p style={styles.pink}>{preferenceRelationship.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('relationship')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>

       {/* Body Type */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-rr-user' style={{ fontSize:24, fontWeight:'bold' }}></i>
            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Body Type</h3>
                <p style={styles.pink}>{preferenceBodytype.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('bodytype')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>
       {/* Smoking habit */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fa-regular fa-smoking' style={{  fontWeight:'bold' }}></i>

            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Smoking Habit</h3>
                <p style={styles.pink}>{preferenceSmoke.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('smoke')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>
       {/* Age */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-rr-calendar' style={{ fontSize:24, fontWeight:'bold' }}></i>

            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Age</h3>
                <p style={styles.pink}>{preferenceAge.min} - {preferenceAge.max} years</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('age')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>
       {/* Height */}
       {/* <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-rr-user-add' style={{ fontSize:24, fontWeight:'bold' }}></i>

            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Height</h3>
                <p>From 6feet</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8 }}>
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div> */}

       {/* Religion */}
       <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:18, paddingBottom:18 }}>
            <i className='fi fi-sr-home' style={{fontSize:24,  fontWeight:'bold' }}></i>

            <div style={{ width:'100%', marginLeft:12 }}>
                <h3>Religion</h3>
                <p style={styles.pink}>{preferenceReligion.type}</p>
            </div>
            <button style={{ border:0, background:'transparent', display:'flex', gap:8, cursor:'pointer' }} onClick={()=>{
                setSetting('religion')
            }} >
            <i className='fi fi-rr-pencil' style={{   }}></i>
            <p>Edit</p>
            </button>
       </div>



   </div>
   {/* FOOD SETTINGS */}
  {setting == "food" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-rr-utensils' style={{ fontSize:24, fontWeight:'bold' }}></i> Food Preference</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="food" value={value} onChange={handleChange}>
            <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
            <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
            <FormControlLabel value="non vegetarian" control={<Radio />} label="Non Vegetarian" />
            <FormControlLabel value="doesn't matter" control={<Radio />} label="Doesn't Matter" />

        </RadioGroup>
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

const token = ls.get(DB, {decrypt:true});
            axios.put('/api/my-preference',{
                food:value
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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Drinking Habit */}
{setting == "drink" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-rr-beer' style={{ fontSize:24, fontWeight:'bold' }}></i> Drinking Habit</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="food" value={value} onChange={handleChange}>
            <FormControlLabel value="drinker" control={<Radio />} label="Drinker" />
            <FormControlLabel value="non drinker" control={<Radio />} label="Non Drinker" />
            <FormControlLabel value="occasional drinker" control={<Radio />} label="Ocassional Drinker" />
            <FormControlLabel value="doesn't matter" control={<Radio />} label="Doesn't Matter" />

        </RadioGroup>
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

const token = ls.get(DB, {decrypt:true});
            axios.put('/api/my-preference',{
                drink:value
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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Relationship */}
{setting == "relationship" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-sr-heart' style={{ fontSize:24, fontWeight:'bold' }}></i> Type of Relationship</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="food" value={value} onChange={handleChange}>
            <FormControlLabel value="long term" control={<Radio />} label="Long Term" />
            <FormControlLabel value="short term" control={<Radio />} label="Short Term" />
            <FormControlLabel value="hook ups" control={<Radio />} label="Hook Ups" />
            <FormControlLabel value="new friends" control={<Radio />} label="New Friends" />

        </RadioGroup>
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

const token = ls.get(DB, {decrypt:true});
            axios.put('/api/my-preference',{
                relationship:value
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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Body Type*/}
{setting == "bodytype" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-sr-user' style={{ fontSize:24, fontWeight:'bold' }}></i> Body Type</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="food" value={value} onChange={handleChange}>
            <FormControlLabel value="slim" control={<Radio />} label="Slim" />
            <FormControlLabel value="average" control={<Radio />} label="Average" />
            <FormControlLabel value="curvy" control={<Radio />} label="Curvy" />
            <FormControlLabel value="muscular" control={<Radio />} label="Muscular" />
            <FormControlLabel value="doesn't matter" control={<Radio />} label="Doesn't Matter" />

        </RadioGroup>
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

const token = ls.get(DB, {decrypt:true});
            axios.put('/api/my-preference',{
                bodytype:value
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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Smoking*/}
{setting == "smoke" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fa-regular fa-smoking' style={{fontSize:21,  fontWeight:'bold' }}></i> Smoking Habit</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="food" value={value} onChange={handleChange}>
            <FormControlLabel value="smoker" control={<Radio />} label="Smoker" />
            <FormControlLabel value="non smoker" control={<Radio />} label="Non Smoker" />
            <FormControlLabel value="occasional smoker" control={<Radio />} label="Occasional Smoker" />
            <FormControlLabel value="doesn't matter" control={<Radio />} label="Doesn't Matter" />

        </RadioGroup>
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

            const token = ls.get(DB, {decrypt:true});

            axios.put('/api/my-preference',{
                smoke:value
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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Religion*/}
{setting == "religion" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-sr-home' style={{fontSize:21,  fontWeight:'bold' }}></i> Religion</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <RadioGroup   name="christian" value={value} onChange={handleChange}>
                <FormControlLabel value="christianity" control={<Radio />} label="Christianity" />
                <FormControlLabel value="islam" control={<Radio />} label="Islam" />
                <FormControlLabel value="jewish" control={<Radio />} label="Jewish" />
                <FormControlLabel value="buddism" control={<Radio />} label="Buddism" />

                <FormControlLabel value="hinduism" control={<Radio />} label="Hinduism" />
                <FormControlLabel value="jainism" control={<Radio />} label="Jainism" />
                <FormControlLabel value="sikhism" control={<Radio />} label="Sikhism" />
                <FormControlLabel value="atheist" control={<Radio />} label="Atheist" />
        </RadioGroup>
        <FormControlLabel value={anyReligion}  onChange={(e)=>{

            setValue(e.target.checked)
            setAnyReligion(e.target.checked)
            if(e.target.checked){
                setValue("any religion")
            }else{
                setValue("")
           }


            }
        } control={<Checkbox checked={anyReligion} />} label="Any religion will work" />
        <Button variant='contained' color='primary' style={{ marginTop:23 }} onClick={()=>{

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
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* AGE */}
{setting == "age" && <div className='container_shadow animate__animated animate__fadeIn'>

<div  className="inner_container animate__animated animate__slideInUp">
<div className='nav'>
            <h1> <i className='fi fi-rr-calendar' style={{fontSize:21,  fontWeight:'bold' }}></i> Age</h1>
            <button onClick={()=>{
                setSetting('')
            }}><i className='fi fi-rr-cross'></i></button>
        </div>
        <Grid container spacing={2} direction="row">
                    <Grid item>18</Grid>
                    <Grid item xs>
                        <Slider
                            max={80}
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
                    {age[0]}yrs - {age[1]}yrs
                </p>
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
                loadPreference()
            }).catch((error)=>{
               //  toast.error(error)
               console.log(error)
            })
            setSetting('')
        }}>Save</Button>

</div>


</div>}

{/* Backdrop */}


</MainContainer>
  )
}

export default PreferenceSettings
const styles ={
    pink:{
        color:'#C62251',
        fontWeight:'bold',
        textTransform:'capitalize',
    }
}
