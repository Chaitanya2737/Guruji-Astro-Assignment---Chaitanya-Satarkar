import { createSlice } from "@reduxjs/toolkit";

const formReducer = createSlice({
    name: "userData",
    initialState: {
        name: "",
        mobile: 0,
        email:"",
        addressLineOne: "",
        addressLineSecond: "",
        city: "",
        zipCode: 0
    },
    reducers: {
        setUserData(state, action) {
            return { ...state, ...action.payload }; 
        }
    }
});


export const { setUserData } = formReducer.actions;

export default formReducer.reducer;
