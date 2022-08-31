import React from 'react'
import "../../../css/messageboard.scss"
import { SocketContext } from '../../context/SocketContext'
import {db} from '../../context/Db'
import { useLiveQuery } from "dexie-react-hooks";
import Moment from 'react-moment'

function MessageBoard({user, receiver}) {
    const {chatmessage, me} = React.useContext(SocketContext)
    const [messages, setMessages] = React.useState(null)
    const data = useLiveQuery(
        async()=> {
          return await db.chats.filter(function(chat){
                return chat.sender === user.id && chat.receiver === receiver.id || chat.sender === receiver.id && chat.receiver === user.id;
            }).toArray()
        }
    )

    // if(!data)return null;
    // console.log(data)
    // setMessages(data)


    const loadMessage = async()=>{
      await db.chats.filter(function(chat){
          return chat.sender === user.id && chat.receiver === receiver.id || chat.sender === receiver.id && chat.receiver === user.id;
      }).toArray().then((data)=>{
          console.log(data)
          setMessages(data)
      })


    }

React.useEffect(()=>{
    // loadMessage()
},[])

  return (
    <div className='message_container'>
        <ul id='chatbox'>

            {data?.map((chat)=> chat.receiver === user.id ? <li key={chat.id} className='receiver'>
                {chat.image.match("image") && <div className='imageContainer' style={{   }}>
                    <img src={chat.image} style={{ width:300 }} /></div>}

                {chat.image.match('video') && <div className='imageContainer' style={{   }}>
                    <video  style={{ width:300 }} controls autoPlay src={chat.image}></video>
                </div>}
                {chat.image.match('audio') && <div className='imageContainer' style={{   }}>
                    <audio  style={{ width:300}} controls autoPlay >
                        <source src={chat.image}></source>
                    </audio>
                </div>}
                {chat.image.match('application') && <div>
                    <a href={chat.image} target="_blank">File received</a>
                        </div>}


                        <div className='body'>
                    <p>{chat.message}</p>
                    <small className='time'><Moment fromNow>{new Date(chat.time)}</Moment>

                    </small>
                    <small> <Moment format="DD MMM YY">
                    {new Date(chat.time)}
            </Moment></small>

                </div>            </li>: <li key={chat.id} className='sender'>
            {chat.image.match("image") && <div className='imageContainer' style={{   }}>
                    <img src={chat.image} style={{ width:300 }} /></div>}

                {chat.image.match('video') && <div className='imageContainer' style={{   }}>
                    <video  style={{ width:300 }} controls autoPlay src={chat.image}></video>
                </div>}
                {chat.image.match('audio') && <div className='imageContainer' style={{   }}>
                    <audio  style={{ width:300}} controls autoPlay >
                        <source src={chat.image}></source>
                    </audio>
                </div>}
                {chat.image.match('application') && <div>
                    <a href={chat.image} target="_blank">File received</a>
                        </div>}


                <div className='body'>
                    <p>{chat.message}</p>
                    <small className='time'><Moment fromNow>{new Date(chat.time)}</Moment>

                    </small>
                    <small> <Moment format="DD MMM YY">
                    {new Date(chat.time)}
            </Moment></small>
                </div>
            </li> )}

            {/* <li className='sender'>
                <p>Message here and nice</p>
                <p className='time'>12:00pm</p>
            </li> */}

        </ul>
    </div>
  )
}

export default MessageBoard
