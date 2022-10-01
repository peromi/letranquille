import React from 'react'
import ls from 'localstorage-slim'
import ActivityProfile from './ActivityProfile'
import { Link } from "react-router-dom";
import axios from "axios";
import MainContainer from "../../containers/MainContainer";
import woman from "../../assets/images/awoman.jpg";
import lady from "../../assets/images/lady.jpg";


const DB = "user-m9j234u94"
function BlockedList() {
    const [blocked, setBlocked] = React.useState([])
    const [tab, setTab] = React.useState(0)

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
    <MainContainer>
    <div className="bg-red-800 w-full px-12  flex gap-x-6">
        <button className={tab===0 ?"p-3 text-white font-bold border-b-4 border-white":"p-3 text-white font-bold border-b-4 border-transparent"} onClick={()=>setTab(0)}>Blocked List</button>

    </div>
    <div className="h-screen w-full">
       {tab === 0 && <div>

        {blocked.length > 0 ? (
            <div
                style={{
                    columnCount: 4,
                    justifyContent: "center",
                    gap: 15,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {blocked.map((data) => (
                    <ActivityProfile key={data.id} profile={data} />
                ))}
            </div>
        ) : (
            <div className="flex flex-col justify-center w-full items-center">
                <h1 className="font-bold text-2xl mt-2">
                You haven't blocked anyone yet
                </h1>
                <p className="md:w-[50%]">
                If you have received an offensive message or received a message from someone that you do not like you can create a "Block" to stop that person from contacting you.
                </p>
                <img
                    src={woman}
                    width="200"
                    className="rounded-full my-6"
                />

<i class="fi fi-sr-more text-red-600 text-2xl"></i>
<p>
To add someone to your block list, click on <strong>Block</strong> in the "More" menu
</p>

<p>
Continue your search for someone special....
</p>

<Link
    to="/matches"
    className="bg-red-600 text-white p-3 px-12 mt-4 hover:bg-red-800"
>
    View Matches Now
</Link>


            </div>
        )}
        </div>}



    </div>
</MainContainer>
  )

}

export default BlockedList
