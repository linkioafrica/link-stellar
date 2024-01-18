import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthData, DataSelection } from '../typings';

const initialState: AuthData = {
  business_id: '',
  host: '',
  accessCodes: [],
  transaction_types: [],
  test_mode: false,
  entity_linkTag: '',
  secKey: '',
  holds_ngnc: true,
  ramping: true,
  kyc_required: false,
};

export const launchSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {
    initiate: (state: AuthData, action: PayloadAction<any>) => {
      const {
        business_id,
        accessCodes,
        entity_linkTag,
        transaction_types,
        test_mode,
        secret_key,
        holds_ngnc,
        ramping,
        user_kyc,
      } = action.payload;
      state.business_id = business_id;
      state.accessCodes = accessCodes;
      state.transaction_types = transaction_types;
      state.test_mode = test_mode;
      state.entity_linkTag = entity_linkTag;
      state.secKey = secret_key;
      state.holds_ngnc = holds_ngnc;
      state.ramping = ramping;
      state.kyc_required = user_kyc;
    },
    setHost: (state: AuthData, action: PayloadAction<any>) => {
      const { host } = action.payload;
      state.host = host;
    },
    terminate: (state: AuthData) => {
      state.business_id = '';
      state.accessCodes = [];
      state.transaction_types = [];
      state.test_mode = false;
      state.entity_linkTag = '';
      state.host = '';
      state.secKey = '';
      state.holds_ngnc = false;
      state.ramping = false;
      state.kyc_required = true;
    },
  },
});

export const { initiate, setHost, terminate } = launchSlice.actions;
export default launchSlice.reducer;

export const selectId = (state: DataSelection) => state.launch.business_id;
export const selectAccessCodes = (state: DataSelection) =>
  state.launch.accessCodes;
export const selectTransactionTypes = (state: DataSelection) =>
  state.launch.transaction_types;
export const selectTestMode = (state: DataSelection) => state.launch.test_mode;
export const selectEntityLinkTag = (state: DataSelection) =>
  state.launch.entity_linkTag;
export const selectHoldsNgnc = (state: DataSelection) =>
  state.launch.holds_ngnc;
export const selectRamping = (state: DataSelection) => state.launch.ramping;
export const selectKycRequired = (state: DataSelection) =>
  state.launch.kyc_required;
