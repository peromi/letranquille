import React from 'react'
import ls from 'localstorage-slim'
import axios from 'axios'
import ActivityProfile from './ActivityProfile'


const DB = "user-m9j234u94"
function BlockedList() {
    const [blocked, setBlocked] = React.useState([])

    const loadData = () =>{
        const token = ls.get(DB, {decrypt:true})
        axios.get('/api/block-list',{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            console.log(response.data)
            setBlocked(response.data.blocked)
        })
    }

    React.useEffect(()=>{
        loadData()
    },[])
  return (
    <div style={{ columnCount:4, justifyContent:'center', gap:15, alignItems:'center', flexWrap:'wrap'  }}>
        {blocked.map((data)=> <ActivityProfile key={data.id} profile={data} />)}
    </div>
  )

}

export default BlockedList
