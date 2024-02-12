import { createSlice } from "@reduxjs/toolkit";

const localStorageValue: string | null = localStorage.getItem("authToken");
const initialState: string = localStorageValue || "";

export const AccessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state: string) => state,
  }
})

export default AccessTokenSlice.reducer;
export const { setAccessToken } = AccessTokenSlice.actions;