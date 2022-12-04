import React from "react";
import MainContainer from "../containers/MainContainer";
import "../../css/message.scss";
import { data as dp } from "../constants";
import UserMessage from "../components/messages/UserMessage";
import MessageBoard from "../components/messages/MessageBoard";
import MessageChatBox from "../components/messages/MessageChatBox";
import VideoCall from "../components/videocall/VideoCall";
import axios from "axios";
import ls from "localstorage-slim";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VideoReceivecall from "../components/videocall/VideoReceivecall";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";
import {useSelector, useDispatch} from 'react-redux'
import { actions } from '../store/userSlice'

const DB = "user-m9j234u94";
const USERDB = "dao";
function Messages() {
    const navigate = useNavigate();
    const profile = useSelector((state)=>state.user.profile)
    const subscription = useSelector((state)=>state.user.subscription)
    const token = useSelector((state)=>state.user.token)

    const [tab, setTab] = React.useState(0);
    const [user, setUser] = React.useState(null);

    const [received, setReceived] = React.useState([]);
    const [sent, setSent] = React.useState([]);
    const [favorite, setFavorite] = React.useState([]);
    const [trashed, setTrashed] = React.useState([]);
    let params = useParams();

    const receivedMessages = () => {
         
        axios
            .get(`/api/get-received-messages`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.messages);
                setReceived(response.data.messages);
            })
            .catch((error) => {
                // console.log(error)
                // alert(error.response.data.message)

                if (error.response.status == 401) {
                    ls.remove(USERDB);
                    ls.remove(DB);

                    navigate("/login", { replace: true });

                    alert(error.response.data.message);
                }
            });
    };

    const sentMessages = () => {
       
        axios
            .get(`/api/get-sent-messages`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.messages);
                setSent(response.data.messages);
            })
            .catch((error) => {
                // console.log(error)
                // alert(error.response.data.message)

                if (error.response.status == 401) {
                    ls.remove(USERDB);
                    ls.remove(DB);

                    navigate("/login", { replace: true });

                    alert(error.response.data.message);
                }
            });
    };

    const favoriteMessages = () => {
         
        axios
            .get(`/api/get-favorite-messages`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.messages);
                setFavorite(response.data.messages);
            })
            .catch((error) => {
                // console.log(error)
                // alert(error.response.data.message)

                if (error.response.status == 401) {
                    ls.remove(USERDB);
                    ls.remove(DB);

                    navigate("/login", { replace: true });

                    alert(error.response.data.message);
                }
            });
    };

    React.useEffect(() => {
        let db = ls.get(USERDB, { decrypt: true });
        if (db != null) {
            console.log(db.user.user);
            setUser(db.user.user);
        }
        receivedMessages();
        sentMessages();
        favoriteMessages();
    }, []);
    const [messages, setMessages] = React.useState([]);

    // const loadLastMessage = () =>{
    //     const token = ls.get(DB, {decrypt:true})
    //     axios.get("/api/last-messages", {
    //         headers: {
    //             Accept:'application/json',
    //             Authorization: 'Bearer ' + token
    //         }
    //     }).then((response)=>{
    //         console.log(response.data.lastmessage)
    //         setMessages(response.data.lastmessage)
    //     })
    // }

    return (
        <MainContainer select="message">
            <p>{subscription}</p>
            <div className="bg-red-600 w-full px-12  flex gap-x-6">
                <button
                    className={
                        tab === 0
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(0)}
                >
                    Received
                </button>
                <button
                    className={
                        tab === 1
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(1)}
                >
                    Favorites
                </button>
                <button
                    className={
                        tab === 2
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(2)}
                >
                    Sent
                </button>
                <button
                    className={
                        tab === 3
                            ? "p-3 text-white font-bold border-b-4 border-white"
                            : "p-3 text-white font-bold border-b-4 border-transparent"
                    }
                    onClick={() => setTab(3)}
                >
                    Trash
                </button>
            </div>
            <div className="w-full">
                {tab === 0 && (
                    <div>
                        {received.length > 0 ? (
                            <div className="px-20 p-8 flex flex-col gap-3">
                            {received.map((m, index) => (

                                <div key={index} className="mb-[18px]">
                                <Link to={`/messages-single/${m.sender}`}  className="flex flex-row gap-x-2 items-center mb-[12px]">
                                    <div
                                        className="w-[34px] h-[34px] rounded-full"
                                        style={{
                                            backgroundImage: `url('/storage/avatar/${m.first_photo}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    ></div>
                                    <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">

                                    <span className="text-sm text-slate-500 ml-2">{m.name}:</span>
                                        <p>{m.message}</p>

                                    </div>
                                    <p>4pm</p>
                                </Link></div>
                            ))}
                        </div>
                        ) : (
                            <div className="flex flex-col justify-center w-full items-center">
                                <h1 className="font-bold text-2xl mt-2">
                                    You have not received any message
                                </h1>
                                <p className="">
                                    No one has sent you a message
                                </p>
                                <i className="fi-rr-comment-alt text-8xl my-4"></i>

                                {/* <p>
                        Simply click a member's star to favorite them
                        </p> */}
                            </div>
                        )}
                    </div>
                )}
                {tab === 1 && (
                    <div>
                        {favorite.length > 0 ? (
                            <div></div>
                        ) : (
                            <div className="flex flex-col justify-center w-full items-center">
                                <h1 className="font-bold text-2xl mt-2">
                                    Your favorites have not sent any message to
                                    you
                                </h1>
                                <p className=""></p>
                                <i className="fi-rr-comment-alt text-8xl my-4"></i>

                                {/* <p>
                        Simply click a member's star to favorite them
                        </p> */}
                            </div>
                        )}
                    </div>
                )}
                {tab === 2 && (
                    <div>
                        {sent.length > 0 ? (
                            <div className="px-20 p-8">
                                {sent.map((m, index) => (
                                    <Link to={`/messages-single/${m.recipient}`} key={index} className="flex flex-row gap-x-2 items-center">
                                        <div
                                            className="w-[34px] h-[34px] rounded-full"
                                            style={{
                                                backgroundImage: `url('/storage/avatar/${m.first_photo}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        ></div>
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">

                                        <span className="text-sm text-slate-500 ml-2">{m.name}:</span>
                                            <p>{m.message}</p>

                                        </div>
                                        <p>4pm</p>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center w-full items-center">
                                <h1 className="font-bold text-2xl mt-2">
                                    You have not sent any message
                                </h1>
                                <p className="">
                                    You have sent any message to anyone
                                </p>
                                <i className="fi-rr-comment-alt text-8xl my-4"></i>

                                {/* <p>
                        Simply click a member's star to favorite them
                        </p> */}
                            </div>
                        )}
                    </div>
                )}
                {tab === 3 && (
                    <div>
                        {trashed.length > 0 ? (
                            <div></div>
                        ) : (
                            <div className="flex flex-col justify-center w-full items-center">
                                <h1 className="font-bold text-2xl mt-2">
                                    Your trash is empty
                                </h1>
                                <p className="">No trashed message</p>
                                <i className="fi-rr-comment-alt text-8xl my-4"></i>

                                {/* <p>
                        Simply click a member's star to favorite them
                        </p> */}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </MainContainer>
    );
}

export default Messages;
