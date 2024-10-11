import { createSlice } from "@reduxjs/toolkit";

const modeReducer = createSlice({
  name: "mode",
  initialState: {
    isDark: false, // Default is light mode
  },
  reducers: {
    toggleMode(state) {
      state.isDark = !state.isDark; // Toggle between dark and light mode
    },
  },
});

// Export the action
export const { toggleMode } = modeReducer.actions;

// Export the reducer
export default modeReducer.reducer;
