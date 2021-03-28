import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signupSaga } from './saga';
import { SignupFormObjType, SignupState } from './types';

export const initialState: SignupState = {
  loading: false,
};

const slice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signUpAction(state, action: PayloadAction<SignupFormObjType>) {
      state.loading = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: signupActions } = slice;

export const useSignupSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signupSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSignupSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
