import React from "react";
import "../../../css/messagechatbox.scss";
import { db } from "../../context/Db";
import { SocketContext } from "../../context/SocketContext";

function MessageChatBox({ receiver, userdata }) {


    const [preview, setPreview] = React.useState("");
    const [imagefile, setImagefile] = React.useState("");
    const { sendMessage, me, setChatmessage, chatmessage, status, setStatus } =
        React.useContext(SocketContext);
    const [message, setMessage] = React.useState("");
    const handleSendMessage = () => {
        if (message.length > 0 || imagefile.length > 0) {
            if (status.status === 401) {
                let chat = {
                    sender: userdata.id,
                    receiver: receiver.id,
                    message: message,
                    image: imagefile,
                    status: "not sent",
                    time: Date.now(),
                };
                db.chats.add(chat);
                console.log("not sent")
            } else {
                let chat = {
                    sender: userdata.id,
                    receiver: receiver.id,
                    message: message,
                    image: imagefile,
                    status: "sent",
                    time: Date.now(),
                };

                db.chats.add(chat);
                console.log("sent")
            }
            sendMessage({
                message: message,
                from: userdata.id,
                to: receiver.id,
                image: imagefile,
                time: Date.now(),
            });

            console.log(status);

            setImagefile("");
            setMessage("");
        }

        // if(status == 401){
        //     let chat = {
        //         senderid:userdata.id, receiverid:parseInt(receiver),message:message,  image:imagefile, status:'not sent', timestamp:Date.now()
        //     }
        //     db.chats.add(chat).then(async()=>{
        //         let chats =  db.chats.toArray();
        //         setChatmessage(chats)
        //     })

        // }else{
        //     let chat = {
        //         senderid:userdata.id, receiverid:parseInt(receiver),message:message,  image:imagefile, status:'sent', timestamp:Date.now()
        //     }
        //     // localStorage.setItem("chat", JSON.stringify(chat))
        //     db.chats.add(chat).then(async()=>{
        //         let chats =  db.chats.toArray();
        //         setChatmessage(chats)
        //     })
        // }

        // setChatmessage([...chatmessage, {message:message,from:me, to:parseInt(user), time:Date.now()}])

    };

    return (
        <>
            <input
                style={{ display: "none" }}
                id="upload"
                type="file"
                onChange={(e) => {
                    let reader = new FileReader();
                    let img = e.target.files[0];
                    setPreview(img);
                    reader.readAsDataURL(img);
                    reader.onload = () => {
                        setImagefile(reader.result)
                    };
                }}
            />
            {imagefile.match("image") && (
                <div className="preview">
                    <img
                        src={URL.createObjectURL(preview)}
                        style={{ width: 65, backgroundSize: "contain" }}
                    />
                    <button
                        onClick={() => {
                            setImagefile("");
                            setPreview("");
                        }}
                    >
                        <i className="fi  fi-rr-cross"></i>
                    </button>
                </div>
            )}
            {imagefile.match("video") && (
                <div className="preview">
                    <video
                        src={URL.createObjectURL(preview)}
                        style={{ width: 65, backgroundSize: "contain" }}
                    />
                    <button
                        onClick={() => {
                            setImagefile("");
                            setPreview("");
                        }}
                    >
                        <i className="fi  fi-rr-cross"></i>
                    </button>
                </div>
            )}

            {imagefile.match("audio") && (
                <div className="preview">
                    <audio style={{ width: 65, backgroundSize: "contain" }}>
                        <source src={URL.createObjectURL(preview)}></source>
                    </audio>
                    <button
                        onClick={() => {
                            setImagefile("");
                            setPreview("");
                        }}
                    >
                        <i className="fi  fi-rr-cross"></i>
                    </button>
                </div>
            )}
            <div className="chat-box">
                <button
                    onClick={() => {
                        document.getElementById("upload").click();
                    }}
                >
                    <i className="fi fi-rr-clip"></i>
                </button>
                <button>
                    <i className="fi fi-rr-grin-alt"></i>
                </button>
                <div className="message">
                    <input
                        type="text"
                        placeholder="Enter Message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <button>
                        <i className="fi fi-rr-microphone"></i>
                    </button>
                </div>
                <button className="sender" onClick={handleSendMessage}>
                    <i className="fi fi-rr-paper-plane"></i>
                </button>
            </div>
        </>
    );
}

export default MessageChatBox;
