import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { CreateEventPayload } from '../../../types/event';
import {
    AddContributionPayload,
    CreateGuestPayload,
    Guest,
} from '../../../types/guest';
import { guestAPI } from '../../../apis/guest';

interface GuestStoreState {
    guests: {
        data: Guest[];
        error: string | null;
        status: requestState;
    };
    createGuest: {
        error: string | null;
        status: requestState;
    };
    addContribution: {
        error: string | null;
        status: requestState;
    };
}

const initialState: GuestStoreState = {
    guests: {
        data: [],
        status: requestState.idle,
        error: null,
    },
    createGuest: {
        error: null,
        status: requestState.idle,
    },
    addContribution: {
        error: null,
        status: requestState.idle,
    },
};

export const getGuests = createAsyncThunk(
    'guest/getGuests',
    async (event_id: string) => {
        try {
            const response = await guestAPI.getGuests(event_id);
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
);

export const createGuest = createAsyncThunk(
    'guest/createGuest',
    async ({
        payload,
        event_id,
    }: {
        payload: CreateGuestPayload;
        event_id: string;
    }) => {
        try {
            const response = await guestAPI.createGuest(event_id, payload);
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
);

export const addContribution = createAsyncThunk(
    'guest/addContribution',
    async ({
        payload,
        event_id,
        guest_id,
    }: {
        payload: AddContributionPayload;
        event_id: string;
        guest_id: string;
    }) => {
        try {
            const response = await guestAPI.addContribution(
                event_id,
                guest_id,
                payload
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
);

const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGuests.pending, (state) => {
                state.guests.status = requestState.loading;
            })
            .addCase(getGuests.fulfilled, (state, action) => {
                state.guests.status = requestState.success;
                state.guests.data = action.payload;
            })
            .addCase(getGuests.rejected, (state, action) => {
                state.guests.status = requestState.failed;

                state.guests.error = action.error.message || null;
            })
            .addCase(createGuest.pending, (state) => {
                state.createGuest.status = requestState.loading;
                state.createGuest.error = null;
            })
            .addCase(createGuest.fulfilled, (state, action) => {
                state.createGuest.status = requestState.success;
                state.guests.data.push(action.payload);
                state.createGuest.error = null;
            })
            .addCase(createGuest.rejected, (state, action) => {
                state.createGuest.status = requestState.failed;
                state.createGuest.error = action.error.message || null;
            })
            .addCase(addContribution.pending, (state) => {
                state.addContribution.status = requestState.loading;
                state.addContribution.error = null;
            })
            .addCase(addContribution.fulfilled, (state, action) => {
                state.addContribution.status = requestState.success;
                state.addContribution.error = null;
            })
            .addCase(addContribution.rejected, (state, action) => {
                state.addContribution.status = requestState.failed;
                state.addContribution.error = action.error.message || null;
            });
    },
});

export const authApi = guestSlice.actions;
export default guestSlice.reducer;
