import { createSlice } from "@reduxjs/toolkit";

const localStorageValue: string | null = localStorage.getItem("darkMode");
const initialState: boolean = localStorageValue === "true" ? true : false;

export const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state: boolean) => {
      localStorage.setItem("darkMode", `${!state}`);
      return !state;
    }
  }
});

export default DarkModeSlice.reducer;
export const { toggleDarkMode } = DarkModeSlice.actions;