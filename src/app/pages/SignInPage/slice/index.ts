import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signinSaga } from './saga';
import { SigninState } from './types';

export const initialState: SigninState = {
  loggingIn: false,
};

const slice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    signInAction(state, action: PayloadAction<any>) {
      return { ...state, loggingIn: true };
    },
    setLoggingIn(state, action: PayloadAction<boolean>) {
      state.loggingIn = action.payload;
    },
  },
});

export const { actions: signinActions } = slice;

export const useSigninSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signinSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSigninSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
