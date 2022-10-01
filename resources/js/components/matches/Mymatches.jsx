import React from "react";
import { data } from "../../constants";
import UserProfile from "../profile/UserProfile";
import Filteroverlay from "./Filteroverlay";
import { SocketContext } from "../../context/SocketContext";
import woman from "../../assets/images/awoman.jpg";
import lady from "../../assets/images/lady.jpg";

function Mymatches({ profiles, user, reload }) {
    const [filter, setFilter] = React.useState(false);

    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    background: "transparent",
                    border: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* <img src={data.group} /> */}
                {/* <div
                    style={{
                        display: "flex",
                        gap: 23,
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#C62251",
                    }}
                >
                    <i class="fi fi-rr-users-alt" style={{ fontSize: 24 }}></i>
                    <h2 className="font-bold">Matches</h2>
                </div> */}
                <div>
                    {/* <button onClick={() =>{
            setFilter(!filter)
        }} style={{background:'transparent', border:0, cursor:'pointer', display:'flex', justifyContent:'center', gap:21, alignItems:'center', fontSize:20, color:'#C62251', fontWeight:'bold' }}>
            <i class="fi fi-rr-settings-sliders" ></i>
            <p>Filter</p>
            </button> */}
                </div>
            </div>
            {/* <p style={{ fontSize: 18, marginTop: 12, fontWeight: "bold" }}>
                These are the People who have similar personalities
            </p> */}

            {/* Matched Profiles */}
            {profiles.length > 0 ? <div className="grid grid-cols-5 gap-4 pt-2">

                {profiles.map((profile, index) => (
                    <UserProfile
                        profile={profile}
                        liked={user}
                        key={index}
                        reload={reload}
                    />)
                    )}
            </div>:<div className="flex flex-col justify-center w-full items-center">
                        <h1 className="font-bold text-2xl mt-2">
                            You do not have any match
                        </h1>
                        <p className="md:w-[30%]">
                            Are you browsing through profiles on the site and
                            see someone you're interested in? If you can't send
                            a message yet, "Like" them instead!
                        </p>
                        <img
                            src={woman}
                            width="200"
                            className="rounded-full my-6"
                        />

                        <i class="fi fi-sr-heart text-red-600 text-2xl"></i>
                        <p>
                            Click on the <strong>Heart</strong> to like someone
                        </p>

                        <p>
                            Make the first move! Like someone who fits your
                            match criteria. It's FREE!
                        </p>


                    </div>}

            {/* Overlay Filter */}

            {/* {filter && <Filteroverlay handleclose={()=>{
                    setFilter(!filter);
                }} />} */}
        </div>
    );
}

export default Mymatches;
