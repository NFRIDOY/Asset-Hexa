import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../features/blogSlice";
import { authApiSlice } from "../features/authApiSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      blogApi.middleware,
      authApiSlice.middleware,
    ]),
  devTools: true,
});
