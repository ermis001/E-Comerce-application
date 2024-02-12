import { configureStore } from "@reduxjs/toolkit";
import { DarkModeSlice } from "./darkModeReducer";
import { UserConfigSlice } from "./userConfigReducer";
import { AccessTokenSlice } from "./accessTokenReducer";

const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice.reducer,
    userConfig: UserConfigSlice.reducer,
    accessToken: AccessTokenSlice.reducer,
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;