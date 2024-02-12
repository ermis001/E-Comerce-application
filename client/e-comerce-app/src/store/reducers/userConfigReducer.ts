import { createSlice } from "@reduxjs/toolkit";

const initialState: null | object = null;

export const UserConfigSlice = createSlice({
  name: "userConfig",
  initialState,
  reducers: {
    setUserConfig: (state) => state,
  }
});

export default UserConfigSlice.reducer;
export const { setUserConfig } = UserConfigSlice.actions;