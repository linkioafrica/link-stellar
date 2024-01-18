import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transactions, Transaction } from "../typings";

const initialState: Transactions = {
  amount: 0,
  currency: "",
  network: "",
  networkAddress: "",
  linkTag: "",
  flowType: "",
  flowContent: {},
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setAmount: (state: Transactions, action: PayloadAction<Transactions>) => {
      const { amount } = action.payload;
      state.amount = amount;
    },
    setCurrency: (state: Transactions, action: PayloadAction<Transactions>) => {
      const { currency } = action.payload;
      state.currency = currency;
    },
    setTransactionNetwork: (
      state: Transactions,
      action: PayloadAction<Transactions>
    ) => {
      const { network } = action.payload;
      state.network = network;
    },
    setNetworkAddress: (
      state: Transactions,
      action: PayloadAction<Transactions>
    ) => {
      const { networkAddress } = action.payload;
      state.networkAddress = networkAddress;
    },
    setLinkTag: (state: Transactions, action: PayloadAction<Transactions>) => {
      const { linkTag } = action.payload;
      state.linkTag = linkTag;
    },
    setFlowType: (state: Transactions, action: PayloadAction<Transactions>) => {
      const { flowType } = action.payload;
      state.linkTag = flowType;
    },
    setFlowContent: (
      state: Transactions,
      action: PayloadAction<Transactions>
    ) => {
      const { flowContent } = action.payload;
      state.flowContent = flowContent;
    },
    clear: (state: Transactions) => {
      state.amount = 0;
      state.currency = "";
      state.network = "";
      state.networkAddress = "";
      state.linkTag = "";
      state.flowContent = {};
    },
  },
});

export const {
  setAmount,
  setCurrency,
  setLinkTag,
  setTransactionNetwork,
  setNetworkAddress,
  setFlowContent,
  setFlowType,
} = transactionSlice.actions;
export default transactionSlice.reducer;

export const selectAmount = (state: Transaction) => state.transaction.amount;
export const selectCurrency = (state: Transaction) =>
  state.transaction.currency;
export const selectTransactionNetwork = (state: Transaction) =>
  state.transaction.network;
export const selectNetworkAddress = (state: Transaction) =>
  state.transaction.networkAddress;
export const selectLinkTag = (state: Transaction) => state.transaction.linkTag;
export const selectFlowType = (state: Transaction) =>
  state.transaction.flowType;
export const selectFlowContent = (state: Transaction) =>
  state.transaction.flowContent;
export const selectTransactionDetails = (state: Transaction) =>
  state.transaction;
