import React from "react";
import MainContainer from "../containers/MainContainer";
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

const USERDB = "dao";
const DB = "user-m9j234u94";
const subscribe = "subscriptionDb";

const MessageSingle = () => {
    const { subscription } = React.useContext(SocketContext);
    const navigate = useNavigate();
    const params = useParams();

    const [user, setUser] = React.useState(null);

    const [message, setMessage] = React.useState("");
    const [recipient, setRecipient] = React.useState({});

    const [messages, setMessages] = React.useState([]);
    console.log("sub", user);

    const loadData = () => {
        const token = ls.get(DB, { decrypt: true });
        axios
            .get(`/api/get-messages/${params.id}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response.data.messages);
                console.log(response.data.recipient);
                setMessages(response.data.messages);
                setRecipient(response.data.recipient);
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

    const handleSendMessage = () => {
        const token = ls.get(DB, { decrypt: true });

        axios
            .post(
                `/api/send-message`,
                {
                    recipient: params.id,
                    message: message,
                },
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((response) => {
                console.log(response.data.message);

                alert(response.data.message);
                setMessage(null);
                loadData();
            });
    };

    React.useEffect(() => {
        loadData();
    }, []);

    return (
        <MainContainer select="message">
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className="p-3 text-white font-bold border-b-4 border-white">
                    Message
                </button>
            </div>
            <div className="w-full  flex flex-row h-[480px] ">
                {/* profile details */}
                <div className="overflow-y-auto w-[30%] flex flex-col justify-start items-center">
                    {/*

                        <p>{recipient.country}, {recipient.state}</p>
                        <p>{recipient.age}</p> */}

                    <div className="p-3 bg-white shadow-lg rounded-md border-2 border-red-500 self-center m-4">
                        <div
                            className="w-[225px] h-[325px] bg-red-500 rounded-md  "
                            style={{
                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>

                    <h1 className="font-bold text-xl">{recipient.name}</h1>
                    <div className="flex flex-row justify-center items-center mr-1">
                        <h1 className="font-bold text-2xl">{recipient.age}</h1>
                        <p>years</p>
                    </div>
                    <p>
                        {recipient.city}, {recipient.state} {recipient.country}
                    </p>
                </div>
                {/* message */}
                <div className="w-[70%] bg-white h-full relative">
                    <div className=" overflow-y-auto h-full bg-[#f4f4f4] relative p-3">
                        {messages.map((m, index) => {
                            if (m.sender === recipient.id) {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center mb-[12px]"
                                    >
                                        <div
                                            className="w-[34px] h-[34px] rounded-full"
                                            style={{
                                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        ></div>
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <span className="text-sm text-slate-500 ml-2">
                                                {recipient.name}:
                                            </span>
                                            <p>{m.message}</p>
                                        </div>
                                        <p>3pm</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="flex justify-end mb-[12px]">
                                        <div
                                            key={index}
                                            className="flex flex-row gap-x-2 items-center"
                                        >
                                            <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                                <p>{m.message}</p>
                                            </div>
                                            <p>4pm</p>
                                        </div>
                                    </div>
                                );
                            }

                            if (m.recipient !== recipient.id) {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center"
                                    >
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <p>{m.message}</p>
                                        </div>
                                        <p>4pm</p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row gap-x-2 items-center"
                                    >
                                        <div
                                            className="w-[34px] h-[34px] rounded-full"
                                            style={{
                                                backgroundImage: `url('/storage/avatar/${recipient.first_cover}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        ></div>
                                        <div className="mr-12 font-bold p-3 bg-white rounded-full justify-between flex flex-row gap-x-4">
                                            <span className="text-sm text-slate-500 ml-2">
                                                {recipient.name}:
                                            </span>
                                            <p>{m.message}</p>
                                        </div>
                                        <p>3pm</p>
                                    </div>
                                );
                            }
                        })}

                        {/* <div className="bg-white/45 backdrop-blur-sm flex flex-col justify-center items-center" style={{  position:'absolute', top:0, left:0, right:0, bottom:0}}>
                            <h1 className="font-bold text-xl">You can't view messages from {recipient.name}</h1>
                            <p>Upgrade and have an unlimited chats</p>

                            <Link to="/manage-subscription" className="mt-12 p-3 bg-red-600 text-white px-24 rounded-full font-bold">Upgrade to Premium Membership</Link>
                        </div> */}
                    </div>

                    <div className="w-full bottom-0 left-0 right-0    bg-white px-12 p-5 flex flex-row items-center">
                        {/* <button>
                        <i className="fi fi-rr-cross"></i>
                    </button> */}
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={`Send message to ${recipient.name}`}
                            className="flex-1 border-0 outline-0 p-3 m-3"
                        ></textarea>
                        <button
                            className="m-3"
                            onClick={() => {
                                if (message.trim().length > 0) {
                                    handleSendMessage();
                                }
                            }}
                        >
                            <i className="fi fi-rr-paper-plane text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default MessageSingle;
