import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PageRoute = {
  pageRoute: {
    transaction_types: [];
  };
};

const initialState: any = {
  transaction_types: [],
};

export const pageRouteSlice = createSlice({
  name: "pageRoute",
  initialState,
  reducers: {
    setRoute: (state: any, action: PayloadAction<any>) => {
      state.transaction_types = action.payload;
    },
  },
});

export const { setRoute } = pageRouteSlice.actions;
export default pageRouteSlice.reducer;

export const selectPageRoute = (state: PageRoute) =>
  state.pageRoute.transaction_types;
