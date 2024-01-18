import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type linkRate = {
  usdcRate: {};
};

const initialState: any = {
  usdcRate: {},
};

export const linkRateSlice = createSlice({
  name: "linkRate",
  initialState,
  reducers: {
    setUsdcRate: (state: linkRate, action: PayloadAction<any>) => {
      const { usdcRate } = action.payload;
      state.usdcRate = usdcRate;
    },
    clearRates: (state: linkRate) => {
      state.usdcRate = {};
    },
  },
});

export const { setUsdcRate, clearRates } = linkRateSlice.actions;
export default linkRateSlice.reducer;

export const selectLinkUsdcRate = (state: any) => state.linkRate.usdcRate;
