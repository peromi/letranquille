import React from "react";
import { data } from "../../constants";
import UserProfile from "../profile/UserProfile";
import Peer from "simple-peer";
import Filteroverlay from "./Filteroverlay";
import { SocketContext } from "../../context/SocketContext";
import { useNavigate, Link } from "react-router-dom";

function Mutualmatches({ profiles, user, reload, action }) {
    const navigate = useNavigate();
    const { subscription } = React.useContext(SocketContext);

    const [first, setfirst] = React.useState("");
    const [filter, setFilter] = React.useState(false);

    React.useEffect(() => {}, []);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* <img src={data.group} /> */}
                <div
                    style={{
                        display: "flex",
                        gap: 23,
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#C62251",
                    }}
                >
                    <i class="fi fi-rr-users-alt" style={{ fontSize: 24 }}></i>
                    <h2 className="font-bold">Mutual Matches</h2>
                </div>
                <div>
                    {/* <button onClick={()=>{
    setFilter(!filter)
}} style={{background:'transparent', border:0, cursor:'pointer', display:'flex', justifyContent:'center', gap:21, alignItems:'center', fontSize:20, color:'#C62251', fontWeight:'bold' }}>
    <i class="fi fi-rr-settings-sliders" ></i>
    <p>Filter</p>
    </button> */}
                </div>
            </div>
            <p style={{ fontSize: 18, marginTop: 12, fontWeight: "bold" }}>
                These are the People who have similar personalities
            </p>

            {/* Matched Profiles */}
            <div className="grid grid-cols-5 gap-4 pt-2">
                {/* Profile */}
                {profiles.map((profile, index) => (
                    <UserProfile
                        profile={profile}
                        liked={user}
                        key={index}
                        reload={reload}
                    />
                ))}
            </div>

            {/* Overlay Filter */}

            {/* {filter && <Filteroverlay handleclose={()=>{
            setFilter(!filter);
        }} />} */}

            {(subscription !== null && subscription.plan_type !== "gold") ||
                (subscription !== null &&
                    subscription.plan_type !== "platinum" && (
                        <div className="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-xl flex justify-center items-center">
                            <div className="w-[30%] p-3">items</div>
                        </div>
                    ))}

            {subscription === null && (
                <div className="fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-[30%]  flex flex-col justify-center bg-red-600 drop-shadow-xl items-center">
                        <div className="w-full flex justify-end bg-yellow-300 px-4">
                            <button
                                onClick={action}
                                className="rotate-45 font-bold text-2xl   text-white float-right"
                            >
                                +
                            </button>
                        </div>
                        <div className="w-full h-full">
                            <h1 className="text-2xl font-bold text-center">
                                Upgrade Your Account
                            </h1>
                            <p className="text-lg">
                                {user.firstname} {user.lastname} you don't have
                                access to Mutual Matches
                            </p>

                            <p>
                                Simply upgrade to boost your chances with "Cupid
                                Matching" for serious daters!
                            </p>

                            <h1 className="font-bold text-lg">
                                Mutual Matches
                            </h1>
                            <p>You both match each other's criteria</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mutualmatches;
