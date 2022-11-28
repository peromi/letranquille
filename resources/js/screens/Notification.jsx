import React from 'react'
import MainContainer from '../containers/MainContainer'
import ls from 'localstorage-slim'
import axios from 'axios'
import Moment from 'react-moment'

const DB = "user-m9j234u94"
const USERDB = "dao"
function Notification() {

    const [data, setData] = React.useState([])

    const loadData = () => {
        const db = ls.get(USERDB, { decrypt: true });
        axios.get("/api/notifications", {
            headers: {
                Accept:'application/json',
                Authorization: 'Bearer ' + db.token
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
            <div className='bg-red-600 px-12 text-white flex flex-row gap-3 p-3'  >
                <i className='fi fi-rr-bell-ring text-2xl font-bold'  ></i>
                <h2 className="text-white">Notification</h2>

            </div>
            {/* <Match /> */}
            {data.length > 0 ? data.map((item)=><div key={item.id} style={{ display:'flex', alignItems: 'center', width:'100%', background:item.read_at == null ? 'rgba(234, 2, 56,0.4)':'grey', padding:8, cursor:'pointer', marginBottom:4 }}>
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

            </div>):(<div className="w-full mt-12 flex flex-col justify-center items-center">
                <i className='fi fi-rr-bell-ring text-2xl font-bold'  ></i>
                <h1>No Notification Yet</h1>
            </div>)}
        </div>
    </MainContainer>
  )
}

export default Notification
