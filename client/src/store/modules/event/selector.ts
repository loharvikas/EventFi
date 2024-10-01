import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const selectEventState = (state: RootState) => state.eventState;

export const selectEvents = createSelector(
    [selectEventState],
    (eventState) => eventState.events
);

export const selectTopEventContributors = createSelector(
    [selectEventState],
    (eventState) => eventState.topContributors
);

export const selectEventContributions = createSelector(
    [selectEventState],
    (eventState) => eventState.contributions
);

export const selectEventDetail = createSelector(
    [selectEventState],
    (eventState) => eventState.eventDetail
);
