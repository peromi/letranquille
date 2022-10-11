import React from "react";
import MainContainer from "../containers/MainContainer";
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

const MessageSingle = () => {
    const navigate = useNavigate()
    const params = useParams()
  return (
    <MainContainer select="message">
        <div>
            <p>Single message {params.id}</p>
        </div>
    </MainContainer>
  )
}

export default MessageSingle
