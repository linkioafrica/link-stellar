import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RampingData, RampingDataSelection } from '../typings';

const initialState: RampingData = {
  amount: '',
  network: '',
  wallet_address: '',
  account_name: '',
  account_number: '',
  bank_name: '',
  refcode: '',
  fee: '',
};

export const rampingSlice = createSlice({
  name: 'ramping',
  initialState,
  reducers: {
    initiateRamping: (state: RampingData, action: PayloadAction<any>) => {
      const { amount, network, wallet_address } = action.payload;
      state.amount = amount;
      state.network = network;
      state.wallet_address = wallet_address;
    },
    setBankData: (state: RampingData, action: PayloadAction<any>) => {
      const { accountName, accountNumber, bankName, refCode, fee } =
        action.payload;
      state.account_name = accountName;
      state.account_number = accountNumber;
      state.bank_name = bankName;
      state.refcode = refCode;
      state.fee = fee;
    },
    cleanup: (state: RampingData) => {
      state.amount = '';
      state.network = '';
      state.wallet_address = '';
      state.account_name = '';
      state.account_number = '';
      state.bank_name = '';
      state.fee = '';
    },
  },
});

export const { initiateRamping, setBankData, cleanup } = rampingSlice.actions;
export default rampingSlice.reducer;

export const selectAmount = (state: RampingDataSelection) =>
  state.ramping.amount;
export const selectRampingNetwork = (state: RampingDataSelection) =>
  state.ramping.network;
export const selectWalletAddress = (state: RampingDataSelection) =>
  state.ramping.wallet_address;
export const selectAccountName = (state: RampingDataSelection) =>
  state.ramping.account_name;
export const selectAccountNumber = (state: RampingDataSelection) =>
  state.ramping.account_number;
export const selectBankName = (state: RampingDataSelection) =>
  state.ramping.bank_name;
export const selectRefCode = (state: RampingDataSelection) =>
  state.ramping.refcode;
export const selectFee = (state: RampingDataSelection) => state.ramping.fee;
export const selectRampingData = (state: RampingDataSelection) => state.ramping;
