import axios from 'axios'
import React from 'react'
import { Routes, useNavigate, Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';

const DATABASE_KEY = "user-m9j234u94";
const REG_STEPS = "stepper";
function Dashboard() {
    const navigate = useNavigate()
    const [user, setUser] = React.useState({});

    React.useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(DATABASE_KEY));


        if(data === null){
            navigate('/login', {replace:true})
            console.log(data)
        }else{

                    axios.get('/api/dashboard',{headers:{
                        'Accept':'application/json',
                        'Authorization':'Bearer '+data
                    }}).then((response)=>{
                        console.log(response.data)

                    setUser(response.data.user)

                    if(response.data.avatar == null){
                        localStorage.removeItem(REG_STEPS);
                        localStorage.setItem(
                            REG_STEPS,
                            JSON.stringify({ step: 6, title: "photo" })
                        );

                        navigate('/onboarding', {replace:true})
                    }

                    if(response.data.location == null){
                        localStorage.removeItem(REG_STEPS);
                        localStorage.setItem(
                            REG_STEPS,
                            JSON.stringify({ step: 7, title: "location" })
                        );

                        navigate('/onboarding', {replace:true})
                    }




                    }).catch(err=>{
                        console.log(err)
                        alert(err)
                         navigate('/login', {replace:true})
                    })
                   }




    },[])
  return (
    <div>
       <Routes>
                    <Route  path="/matches" element={<Matches />} />
                    <Route exact path="/activities" element={<Activities />} />
                    <Route exact path="/explore" element={<Explore />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/messages/:id" element={<Messages />} />
                    <Route exact path="/profile" element={<ProfilePanel />} />
                    <Route exact path="/notification" element={<Notification />} />
                    <Route exact path="/notification/:id" element={<Notification />} />
                    <Route exact path="/preference-settings" element={<PreferenceSettings />} />
       </Routes>
    </div>
  )
}

export default Dashboard
