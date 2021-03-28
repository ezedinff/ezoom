import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.signup || initialState;

export const selectSignup = createSelector([selectSlice], state => state);
