import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import discoverySlice from "../features/discoverySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    discoveryCoaching: discoverySlice,
  },
});
