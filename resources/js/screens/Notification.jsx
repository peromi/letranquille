import React from 'react'
import MainContainer from '../containers/MainContainer'
import ls from 'localstorage-slim'
import axios from 'axios'
import Moment from 'react-moment'

const DB = "user-m9j234u94"
function Notification() {

    const [data, setData] = React.useState([])

    const loadData = () => {
        let token = ls.get(DB, {decrypt:true})
        axios.get("/api/notifications", {
            headers: {
                Accept:'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then((response)=>{
            console.log("NOTIFY",response.data)
            setData(response.data.notice)
        }).catch((error)=>{
            console.log(error)
        })
    }

    React.useEffect(()=>{
        loadData()
    },[])
  return (
    <MainContainer>
         <div className=" bg-white h-screen">
            <div className='bg-zinc-100 px-12' style={{ display:'flex', gap:12,  justifyContent:'flex-start', alignItems:'center' }}>
                <i className='fi fi-rr-bell-ring' style={{ fontSize:34, color:'#C62251' }}></i>
                <h2 style={{ color:'#C62251' }}>Notification</h2>

            </div>
            {/* <Match /> */}
            {data.map((item)=><div key={item.id} style={{ display:'flex', alignItems: 'center', width:'100%', background:item.read_at == null ? 'rgba(234, 2, 56,0.4)':'grey', padding:8, cursor:'pointer', marginBottom:4 }}>
                <i className='fi fi-rr-envelope' style={{ fontSize:24, padding:12 }}></i>
                <div style={{ width: '85%',}}>
                    <h2>{item.data.name}</h2>
                    <p>{item.data.message} </p>
                </div>

<div  >
<p> <Moment format="DD MMM YY">
                    {Date(item.data.created_at)}
            </Moment></p>
(<small><Moment format="HH:mm:ss" >
                    {Date(item.data.updated_at)}
            </Moment></small>)
</div>

            </div>)}
        </div>
    </MainContainer>
  )
}

export default Notification
