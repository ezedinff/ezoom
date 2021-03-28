import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.appMessages || initialState;

export const selectAppMessages = createSelector(
  [selectDomain],
  appMessagesState => appMessagesState,
);
