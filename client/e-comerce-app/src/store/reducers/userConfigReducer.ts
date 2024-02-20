import { createSlice } from "@reduxjs/toolkit";
import { userInterface } from "@src/interfaces";

const initialState = null as null | userInterface ;

export const UserConfigSlice = createSlice({
  name: "userConfig",
  initialState,
  reducers: {
    setUserConfig: (state) => state,
  }
});

export default UserConfigSlice.reducer;
export const { setUserConfig } = UserConfigSlice.actions;