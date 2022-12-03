import {createSlice} from "@reduxjs/toolkit"


const subscriptionSlice = createSlice({
    name: 'subscriptionPackage',
    initialState:{
        package: {}
    },
    reducers:{
        addPackage(state, action){
            state.package = action.payload
        },
        removePackage(state, action){
            state.package = {}
        },
        changePackage(state, action){
            state.package = action.payload
        }
    }
})


export const actions = subscriptionSlice.actions
export default subscriptionSlice