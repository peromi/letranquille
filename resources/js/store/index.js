import {configureStore, createSlice} from "@reduxjs/toolkit"
import showAllSlice from "./showAllSlice"
import userSlice from "./userSlice"
import subscriptionSlice from "./subscriptionSlice"


const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        showAll:showAllSlice.reducer,
        subscriptionPackage:subscriptionSlice.reducer,
    }
})

export default store