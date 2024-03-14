import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marketAnalysis: { name: "", email: "" },
  swotAnalysis: { name: "", email: "" },
  cutomerMix: { name: "", email: "" },
  esg: { name: "", email: "" },
  revenue: { name: "", email: "" },
  baselineOperational: { name: "", email: "" },
  mission: { name: "", email: "" },
  keyPerformance: { name: "", email: "" },
  hiring: { name: "", email: "" },
};

export const discoverySlice = createSlice({
  name: "discovery",
  initialState,
  reducers: {
    setMarketAnalysis: (state, payload) => {
      state.marketAnalysis = payload;
    },
  },
});

export const { setMarketAnalysis } = discoverySlice.actions;

export default discoverySlice.reducer;
