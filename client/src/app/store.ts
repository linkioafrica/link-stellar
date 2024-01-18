import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "../features/launchSlice";
import networkReducer from "../features/networkSlice";
import pageRouteReducer from "../features/pageRouteSlice";
import transactionReducer from "../features/transactionSlice";
import rampingReducer from "../features/rampingSlice";
import linkRateReducer from "../features/linkRateSlice";
// import { b2bApi } from "../services/b2bApi";
import { launchApi } from "../services/launchApi";
import { linkRateApi } from "../services/linkRatesApi";
import { transactionApi } from "../services/transactionApi";

const store = configureStore({
  reducer: {
    [launchApi.reducerPath]: launchApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [linkRateApi.reducerPath]: linkRateApi.reducer,
    // [b2bApi.reducerPath]: b2bApi.reducer,
    launch: launchReducer,
    network: networkReducer,
    pageRoute: pageRouteReducer,
    transaction: transactionReducer,
    ramping: rampingReducer,
    linkRate: linkRateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(
      launchApi.middleware,
      transactionApi.middleware,
      linkRateApi.middleware
      // b2bApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
