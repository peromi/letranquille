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
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VideoReceivecall from "../components/videocall/VideoReceivecall";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import woman from "../assets/images/awoman.jpg";
import lady from "../assets/images/lady.jpg";

const DB = "user-m9j234u94";
const USERDB = "dao";
function Messages() {
    const navigate = useNavigate();
    const {
        sendpeer,
        answerpeer,
        id,
        me,
        myVideo,
        userVideo,
        call,
        callAccepted,
        callEnded,
        stream,
        incoming,
    } = React.useContext(SocketContext);
    const [tab, setTab] = React.useState(0);
    const [user, setUser] = React.useState(null);

    const [received, setReceived] = React.useState([]);
    const [sent, setSent] = React.useState([]);
    const [favorite, setFavorite] = React.useState([]);
    const [trashed, setTrashed] = React.useState([]);
    let params = useParams();

    React.useEffect(() => {
        let db = ls.get(USERDB, { decrypt: true });
        if (db != null) {
            console.log(db.user.user);
            setUser(db.user.user);
        }
    }, [params]);
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
            <div className="h-screen w-full">
                {tab === 0 && (
                    <div>
                        {received.length > 0 ? (
                            <div></div>
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
                                    Your favorites have not sent any message to you
                                </h1>
                                <p className="">

                                </p>
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
                            <div></div>
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
                                <p className="">
                                    No trashed message
                                </p>
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
