import {createSlice} from "@reduxjs/toolkit"
import ls from 'localstorage-slim'

const db = ls.get('dao', {decrypt:true})
const userSlice = createSlice({
    name: 'userSlice',
    initialState:{
        user:db == null ? null : db.user,
        preference:db == null ? null : db.preference,
        profile:db == null ? null : db.profile,
        token:db == null ? null : db.token,
        subscription:db == null ? null : db.subscription
    },
    reducers:{
        addUser(state, action){
            state.user = action.payload;
        },
        addPreferences(state, action){
            state.preference = action.payload;
        },
        addProfile(state, action){
            state.profile = action.payload;
        },
        addToken(state, action){
            state.token = action.payload;
        },
        addSubscription(state, action){
            state.subscription = action.payload;
        }
    }
})


export const actions = userSlice.actions
export default userSlice