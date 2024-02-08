import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./rootReducer";

interface DarkModeState {
  value: boolean,
}

const initialState: DarkModeState = {
  value: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state: { value: boolean; }) => {
      state.value = !state.value;
    }
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkMode = (state:RootState) => state.darkMode.value;

export default darkModeSlice.reducer;