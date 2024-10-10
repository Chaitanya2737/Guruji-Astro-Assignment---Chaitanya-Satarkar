import { createSlice } from "@reduxjs/toolkit";

const modeReducer = createSlice({
    name :"mode",
    initialState:{
        isDark : false
    },
    reducers : {
        mode(state){
            state.isDark = !state.isDark
        }
    }
})

export default modeReducer.reducer