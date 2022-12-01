import {configureStore, createSlice} from "@reduxjs/toolkit"
import showAllSlice from "./showAllSlice"
import userSlice from "./userSlice"


const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        showAll:showAllSlice.reducer,
    }
})

export default store