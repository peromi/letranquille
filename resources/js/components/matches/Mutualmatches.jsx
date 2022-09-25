import React from "react";
import { data } from "../../constants";
import UserProfile from "../profile/UserProfile";
import Peer from "simple-peer";
import Filteroverlay from "./Filteroverlay";
import { SocketContext } from "../../context/SocketContext";
import { useNavigate, Link } from "react-router-dom";

function Mutualmatches({ profiles, user, reload,currentuser, action }) {
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
                        <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900/75 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-[40%]  flex flex-col justify-center border-1 divide-red-600 bg-white drop-shadow-xl items-center">
                        <div className="w-full flex justify-end   pr-1">
                            <button
                                onClick={action}
                                className="rotate-45 font-bold text-2xl   text-red-600 float-right"
                            >
                                +
                            </button>
                        </div>
                        <div className="w-full h-full px-3 flex flex-col items-center">
                            <h1 className="text-2xl font-bold text-center mb-6">
                                Upgrade Your Account
                            </h1>
                            <p className="text-lg">
                                <span className="capitalize font-bold">{currentuser.user.name}</span> you don't have
                                access to <span className="font-bold">Mutual Matches</span>
                            </p>

                            <p>
                                Simply upgrade to boost your chances with "Cupid
                                Matching" for serious daters!
                            </p>

                            <h1 className="font-bold text-lg mt-8">
                                Mutual Matches
                            </h1>
                            <p>You both match each other's criteria</p>

                            <button className="px-12 p-2 bg-red-800 text-white mt-4 mb-3">Upgrade to Platinum</button>
                        </div>
                    </div>
                </div>
                    ))}

            {subscription === null && (
                <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900/75 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-[40%]  flex flex-col justify-center border-1 divide-red-600 bg-white drop-shadow-xl items-center">
                        <div className="w-full flex justify-end   pr-1">
                            <button
                                onClick={action}
                                className="rotate-45 font-bold text-2xl   text-red-600 float-right"
                            >
                                +
                            </button>
                        </div>
                        <div className="w-full h-full px-3 flex flex-col items-center">
                            <h1 className="text-2xl font-bold text-center mb-6">
                                Upgrade Your Account
                            </h1>
                            <p className="text-lg">
                                <span className="capitalize font-bold">{currentuser.user.name}</span> you don't have
                                access to <span className="font-bold">Mutual Matches</span>
                            </p>

                            <p>
                                Simply upgrade to boost your chances with "Cupid
                                Matching" for serious daters!
                            </p>

                            <h1 className="font-bold text-lg mt-8">
                                Mutual Matches
                            </h1>
                            <p>You both match each other's criteria</p>

                            <button className="px-12 p-2 bg-red-800 text-white mt-4 mb-3">Upgrade to Platinum</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mutualmatches;
