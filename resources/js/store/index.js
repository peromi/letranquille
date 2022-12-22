import {configureStore, createSlice} from "@reduxjs/toolkit"
import showAllSlice from "./showAllSlice"
import userSlice from "./userSlice"
import subscriptionSlice from "./subscriptionSlice"
import countrySlice from "./countrySlice"


const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        showAll:showAllSlice.reducer,
        subscriptionPackage:subscriptionSlice.reducer,
        country: countrySlice.reducer,
    }
})

export default store