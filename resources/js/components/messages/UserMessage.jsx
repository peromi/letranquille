import React from 'react'
import { data } from '../../constants'
import "../../../css/usermessage.scss"
import { useNavigate } from 'react-router-dom'

function UserMessage() {
    const navigate = useNavigate()
  return (
    <div className='usermessage' onClick={()=>{
        navigate('/messages/234')
    }}>
        <div className='online_user'>
            <img src={data.profile} />
        </div>
        <div className='user_last_message'>
            <p className='user_name_'>Jackson Pearl</p>
            <p>last message here..</p>
        </div>
        <div className='user_chat_control'>
                <div>
                    <small>10:00am</small>
                    <span>12</span>
                </div>
                <button><i className='fi  fi-rr-menu-dots-vertical'></i></button>
        </div>
    </div>
  )
}

export default UserMessage
