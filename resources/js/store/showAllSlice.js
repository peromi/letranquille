import {createSlice} from "@reduxjs/toolkit"

const showAllSlice = createSlice({
    name: 'showAllSlice',
    initialState:{
        page:1,
    },
    reducers:{
        previousPage(state, action){
           state.page--;
           console.log(state.page)
        },
        nextPage(state, action){
            state.page++;
            console.log(state.page)
        },
        paginate(state, action){
            state.page = action.payload;
            console.log(state.page)
        }
    }
})


export const actions = showAllSlice.actions
export default showAllSlice