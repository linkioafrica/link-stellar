import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetworkArray, Network } from "../typings";

const initialState: NetworkArray = {
  networks: [],
};

export const networkSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setNetwork: (state: NetworkArray, action: PayloadAction<any>) => {
      state.networks = action.payload;
    },
  },
});

export const { setNetwork } = networkSlice.actions;
export default networkSlice.reducer;

export const selectNetwork = (state: Network) => state.network.networks;
