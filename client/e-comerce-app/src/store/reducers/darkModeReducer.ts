import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state: boolean) => {
      return !state;
    }
  }
});

export default DarkModeSlice.reducer;
export const { toggleDarkMode } = DarkModeSlice.actions;