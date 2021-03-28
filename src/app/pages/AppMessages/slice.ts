import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { AppMessageType, ContainerState } from './types';

// The initial state of the AppMessages container
export const initialState: ContainerState = {
  alert: {
    message: null,
    permanent: false,
    severity: 'info',
  },
  redirectTo: null,
};

const appMessagesSlice = createSlice({
  name: 'appMessages',
  initialState,
  reducers: {
    setAppAlert(state, action: PayloadAction<AppMessageType>) {
      state.alert = action.payload;
    },

    setRedirectTo(state, action: PayloadAction<string | null>) {
      state.redirectTo = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appMessagesSlice;
