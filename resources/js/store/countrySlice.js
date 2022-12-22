import { createSlice } from "@reduxjs/toolkit";

import ls from 'localstorage-slim'

const db = ls.get('country', {decrypt:true})
const countrySlice = createSlice({
    name:'countrySlice',
    initialState:{
        currency:db == null ? null : db
    },
    reducers:{
        
        addCurrency(state, action){
            state.currency = action.payload 
        }
    }
})

export const actions = countrySlice.actions
export default countrySlice