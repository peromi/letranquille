import {configureStore, createSlice} from "@reduxjs/toolkit"
import showAllSlice from "./showAllSlice"
import userSlice from "./userSlice"
import subcriptionSlice from "./subscriptionSlice"


const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        showAll:showAllSlice.reducer,
        subcriptionPackage:subcriptionSlice.reducer,
    }
})

export default store