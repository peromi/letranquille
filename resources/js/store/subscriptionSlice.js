import {createSlice} from "@reduxjs/toolkit"


const subscriptionSlice = createSlice({
    name: 'subscriptionPackage',
    initialState:{
        item: { 
        }
    },
    reducers:{
        addPackage(state, action){
            state.item = action.payload
        },
        removePackage(state, action){
            state.item = { 
            }
        },
        changePackage(state, action){
            state.item = action.payload
        }
    }
})


export const actions = subscriptionSlice.actions
export default subscriptionSlice