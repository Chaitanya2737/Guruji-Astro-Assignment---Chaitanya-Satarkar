import { createSlice } from "@reduxjs/toolkit";

const formReducer = createSlice({
    name: "userData",
    initialState: [],
    reducers: {
        setUserData(state, action) {
            state.push(action.payload);
        }
    }
});

export const { setUserData } = formReducer.actions;
export default formReducer.reducer;
