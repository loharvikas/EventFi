import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const selectEventState = (state: RootState) => state.eventState;

export const selectEvents = createSelector(
  [selectEventState],
  (eventState) => eventState.events
);