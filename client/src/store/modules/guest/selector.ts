import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const selectGuestState = (state: RootState) => state.guestState;

export const selectGuests = createSelector(
  [selectGuestState],
  (guestState) => guestState.guests
);

export const selectAddContribution = createSelector(
  [selectGuestState],
  (guestState) => guestState.addContribution
);

export const selectCreateGuest = createSelector(
  [selectGuestState],
  (guestState) => guestState.createGuest
  
);