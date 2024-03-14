import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { name: "", email: "" },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, payload) => {
      state.userData = payload;
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
