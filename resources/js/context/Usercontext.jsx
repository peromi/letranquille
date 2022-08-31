import React, { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";
import ls from 'localstorage-slim';


export const UserContext = createContext();
const DATABASE_KEY = "user-m9j234u94";
const MAINDB = "dao";
export const UserContextProvider = (props) =>{
    const [user, dispatchUser] = useReducer(UserReducer, {
        user:null,
        profile:null,
        avatar:null,
        token:null
    });

    const loaddata = React.useCallback(()=>{
        let db = ls.get(MAINDB,{decrypt:true})

        if(db != null){

            dispatchUser({type:'ADD', payload:{
                user: db.user,
                profile:db.profile,
                avatar: db.avatar,
                token: db.token
            }})


        }else{
            loadNewData()
        }
    },[user])
    React.useEffect(()=>{
       loaddata();
    },[])




    const loadNewData = ()=>{
        const token = ls.get(DATABASE_KEY);
        if (token == null) {
            return;
        }

        axios.get("/api/matches",{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        }).then((response)=>{
                // console.log(response.data.user.profile)
                dispatchUser({type:'ADD', payload:{
                    user: response.data.user,
                    profile:response.data.user.profile,
                    avatar: response.data.user.avatar,
                    token: token
                }})


                ls.set(MAINDB, {user:response.data.user, profile:response.data.user.profile, avatar:response.data.user.avatar, token:response.data.token},{encrypt:true})


        }).catch(error=>{
            toast.error(error.response)
        })
    }





    return (
        <UserContext.Provider value={{ user, dispatchUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
