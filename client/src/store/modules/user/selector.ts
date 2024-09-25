import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const selectUserState = (state: RootState) => state.userState;

export const selectUser = createSelector(
  [selectUserState],
  (userState) => userState.user
);