import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { eventAPI } from '../../../apis/event';
import { CreateEventPayload, EventStat, UpdateEventPayload } from '../../../types/event';
import { Contribution } from '../../../types/guest';
import { Event } from '../../../types/event';

interface EventStoreState {
    events: {
        data: Event[];
        error: string | null;
        status: requestState;
    };
    eventDetail: {
        data: Event | null;
        error: string | null;
        status: requestState;
    };
    createEvent: {
        error: string | null;
        status: requestState;
    };
    updateEvent: {
        status: requestState;
        error: string | null;
    };
    deleteEvent: {
        status: requestState;
        error: string | null;
    };
    topContributors: {
        data: Contribution[];
        error: string | null;
        status: requestState;
    };
    contributions: {
        data: Contribution[];
        error: string | null;
        status: requestState;
    };
    stat: {
        data: EventStat;
        error: string | null;
        status: requestState;
    }
}

const initialState: EventStoreState = {
    events: {
        data: [],
        status: requestState.idle,
        error: null,
    },
    eventDetail: {
        data: null,
        status: requestState.idle,
        error: null,
    },
    updateEvent: {
        status: requestState.idle,
        error: null,
    },
    deleteEvent: {
        status: requestState.idle,
        error: null,
    },
    createEvent: {
        error: null,
        status: requestState.idle,
    },
    topContributors: {
        data: [],
        status: requestState.idle,
        error: null,
    },
    contributions: {
        data: [],
        status: requestState.idle,
        error: null,
    },
    stat: {
        data: {
            total_contribution: 0,
            average_contribution: 0,
        },
        status: requestState.idle,
        error: null,
    }
};

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async (_, { rejectWithValue }) => {
        try {
            const response = await eventAPI.getEvents();
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.response.data.errors);
        }
    }
);

export const getEventDetail = createAsyncThunk(
    'event/getEventDetail',
    async (event_id: string, { rejectWithValue }) => {
        try {
            const response = await eventAPI.getEventDetail(event_id);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const createEvent = createAsyncThunk(
    'event/createEvent',
    async (event: CreateEventPayload, { rejectWithValue }) => {
        try {
            const response = await eventAPI.createEvent(event);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const getTopContributors = createAsyncThunk(
    'event/getTopContributors',
    async (event_id: string, { rejectWithValue }) => {
        try {
            const response = await eventAPI.getTopContributors(event_id);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const getContributions = createAsyncThunk(
    'event/getContributions',
    async (event_id: string, { rejectWithValue }) => {
        try {
            const response = await eventAPI.getContributions(event_id);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const updateEvent = createAsyncThunk(
    'event/updateEvent',
    async (event: UpdateEventPayload, { rejectWithValue }) => {
        try {
            const response = await eventAPI.updateEvent(event);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const deleteEvent = createAsyncThunk(
    'event/deleteEvent',
    async (event_id: string, { rejectWithValue }) => {
        try {
            const response = await eventAPI.deleteEvent(event_id);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const getEventStat = createAsyncThunk(
    'event/getEventStat',
    async (event_id: string, { rejectWithValue }) => {
        try {
            const response = await eventAPI.getEventStat(event_id);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.events.status = requestState.loading;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.events.status = requestState.success;
                state.events.data = action.payload;
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.events.status = requestState.failed;

                state.events.error = action.error.message || null;
            })
            .addCase(getEventDetail.pending, (state) => {
                state.eventDetail.status = requestState.loading;
                state.eventDetail.error = null;
            })
            .addCase(getEventDetail.fulfilled, (state, action) => {
                state.eventDetail.status = requestState.success;
                state.eventDetail.data = action.payload;
                state.eventDetail.error = null;
            })
            .addCase(getEventDetail.rejected, (state, action) => {
                state.eventDetail.status = requestState.failed;
                state.eventDetail.error = action.error.message || null;
            })

            .addCase(createEvent.pending, (state) => {
                state.createEvent.status = requestState.loading;
                state.createEvent.error = null;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.createEvent.status = requestState.success;
                state.events.data.push(action.payload);
                state.createEvent.error = null;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.createEvent.status = requestState.failed;
                state.createEvent.error = action.error.message || null;
            })
            .addCase(updateEvent.pending, (state) => {
                state.updateEvent.status = requestState.loading;
                state.updateEvent.error = null;
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                state.updateEvent.status = requestState.success;
                state.eventDetail.data = action.payload;
                state.updateEvent.error = null;
            })
            
            .addCase(updateEvent.rejected, (state, action) => {
                state.updateEvent.status = requestState.failed;
                state.updateEvent.error = action.error.message || null;
            })
            .addCase(deleteEvent.pending, (state) => {
                state.deleteEvent.status = requestState.loading;
                state.deleteEvent.error = null;
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.deleteEvent.status = requestState.success;
                state.eventDetail.data = null;
                state.events.data = state.events.data.filter((event) => event.id !== action.payload.id);
                state.deleteEvent.error = null;
            })
            
            .addCase(deleteEvent.rejected, (state, action) => {
                state.deleteEvent.status = requestState.failed;
                state.deleteEvent.error = action.error.message || null;
            })
            .addCase(getTopContributors.pending, (state) => {
                state.topContributors.status = requestState.loading;
                state.topContributors.error = null;
            })
            .addCase(getTopContributors.fulfilled, (state, action) => {
                state.topContributors.status = requestState.success;
                state.topContributors.data = action.payload;
                state.topContributors.error = null;
            })
            .addCase(getTopContributors.rejected, (state, action) => {
                state.topContributors.status = requestState.failed;
                state.topContributors.error = action.error.message || null;
            })
            .addCase(getContributions.pending, (state) => {
                state.contributions.status = requestState.loading;
                state.contributions.error = null;
            })
            .addCase(getContributions.fulfilled, (state, action) => {
                state.contributions.status = requestState.success;
                state.contributions.data = action.payload;
                state.contributions.error = null;
            })
            .addCase(getContributions.rejected, (state, action) => {
                state.contributions.status = requestState.failed;
                state.contributions.error = action.error.message || null;
            })
            .addCase(getEventStat.pending, (state) => {
                state.stat.status = requestState.loading;
                state.stat.error = null;
            })
            .addCase(getEventStat.fulfilled, (state, action) => {
                state.stat.status = requestState.success;
                state.stat.data = action.payload;
                state.stat.error = null;
            })
            .addCase(getEventStat.rejected, (state, action) => {
                state.stat.status = requestState.failed;
                state.stat.error = action.error.message || null;
            })
    },
});

export const authApi = eventSlice.actions;
export default eventSlice.reducer;
