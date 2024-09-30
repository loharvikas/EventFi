import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../..';

const selectCommonState = (state: RootState) => state.commonState;

export const selectAlert = createSelector(
    [selectCommonState],
    (commonState) => commonState.alert
);
