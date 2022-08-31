import React from 'react'
import ActivityProfile from './ActivityProfile'
import ls from 'localstorage-slim'
import axios from 'axios'

const DB = "user-m9j234u94"
const Likes =()=> {

    const [likes, setLikes] = React.useState([])

    const loadData = () =>{
        const token = ls.get(DB, {decrypt:true})
        axios.get('/api/liked-me',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data)
            setLikes(response.data.likes)
        })
    }

    React.useEffect(()=>{
        loadData()
    },[])
  return (
    <div style={{ columnCount:4, justifyContent:'center', gap:15, alignItems:'center', flexWrap:'wrap'  }}>
        {likes.map((data)=> <ActivityProfile key={data.id} profile={data} />)}
    </div>
  )
}

export default Likes
