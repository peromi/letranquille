import { Divider } from "@material-ui/core";
import React from "react";
import "../../../css/userprofile.scss";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../constants";
import "animate.css";
import { SocketContext } from "../../context/SocketContext";
import ls from "localstorage-slim";
import axios from "axios";
import { toast } from "react-toastify";

const DATABASE_KEY = "user-m9j234u94";
const USERDB = "dao";

function UserProfile({ profile, liked, reload }) {
    const { likeprofile } = React.useContext(SocketContext);
    const navigate = useNavigate();
    let check_liked = liked.find((user) => user.profile_id === profile.id);
    console.log(check_liked)
    console.log("LIKED",liked)

    const loadProfile = () => {
        let db = ls.get(USERDB, { decrypt: true });

        if (db !== null) {
            console.log("DATA", db.user.user);

            likeprofile({
                to: profile.id,
                message: "liked your profile",
                name: db.user.user.name,
            });
        } else {
        }
    };

    const handleLiked = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        axios.post("/api/likes",
                {
                    profile: profile.id,
                },
                {
                    headers: {
                        'Accept': "application/json",
                        'Authorization': "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                toast.success(response.data.message);
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            });
    };

    const handleUnlike = () => {
        const token = ls.get(DATABASE_KEY, { decrypt: true });
        axios.delete("/api/likes-delete/" + check_liked.id, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                toast.success(response.data.message);
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div
            className=" ring-1 ring-slate-900/5 hover:ring-1 hover:ring-red-600 transition-all duration-500 ease hover:drop-shadow-2xl rounded-xl bg-white animate__animated animate__slideInUp"

        >
            <div className="flex flex-col p-2">
                <div className="bg-yellow-200 relative overflow-hidden rounded-xl">
                    <img className="" src={data.profile} />

                    <div className="absolute bottom-0 right-0 left-0 " style={{ background:'linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1)' }}>

                        <h2 className="capitalize font-bold flex justify-between p-1 text-white">
                            {profile.name},{" "}
                            <span>
                                {Math.abs(
                                    new Date().getFullYear() -
                                        new Date(profile.birthday).getFullYear()
                                )}
                            </span>
                        </h2>
                        <div className="text-white flex items-center font-bold gap-x-3 ">
                            <i class="fi fi-sr-marker ml-2"></i>
                            <h4 className="text-sm">
                                {profile.address.split(",")[0]},{" "}
                                {profile.address.split(",")[1].split(" ")[1]}
                            </h4>
                            <p className="text-sm">5 miles away</p>
                        </div>
                        <p className="bg-red-600 text-sm p-1 font-bold text-white text-center w-full">85% Match</p>
                    </div>
                </div>
                <div
    className="flex justify-between items-center"
                >
                    <p className="font-bold text-[15px] capitalize">
                        Seeking: {profile.lookingfor} {profile.min} -{" "}
                        {profile.max}
                    </p>
                    <i
                        class="fa-solid fa-circle"
                        style={{ fontSize: 8, color: "green" }}
                    ></i>
                </div>
                {/* BIO */}
                <p  className="mb-1">
                    {profile.bio}
                </p>

<div style={{ height:1, width:'100%', background:"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)" }}></div>

                <div
                    className="flex justify-between mt-2 font-bold"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 23,
                        }}
                    >
                        {check_liked !== undefined ? (
                            <button
                                style={{
                                    border: 0,
                                    background: "transparent",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    handleUnlike()
                                    reload()
                                }}
                            >
                                <i
                                    class="fi fi-sr-heart"
                                    style={{ ...styles.icon, color: "red" }}
                                ></i>
                            </button>
                        ) : (
                            <button
                                style={{
                                    border: 0,
                                    background: "transparent",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    loadProfile();
                                    handleLiked();
                                    reload()
                                }}
                            >
                                <i
                                    class="fi fi-rr-heart"
                                    style={styles.icon}
                                ></i>
                            </button>
                        )}
                        <Link to={`/messages/${profile.id}`}>
                            <i
                                class="fi fi-rr-paper-plane"
                                style={styles.icon}
                            ></i>
                        </Link>
                    </div>
                    <div className="flex items-center px-3 rounded-full ring-1 ring-slate-900/5 gap-x-2 bg-zinc-100 hover:bg-red-600 hover:text-white p-2">
                        <p>{profile.gallery.length}</p>
                        <Divider orientation="vertical" />
                        <Link to={`/profile/${profile.id}`}>View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

const styles = {
    icon: {
        fontSize: 21,
    },
    buttonActive: { backgroundColor: "#FFF0F3" },
    button: {
        color: "#C62251",
        background: "#f4f4f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 34,
    },
};
