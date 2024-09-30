import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { eventAPI } from '../../../apis/event';
import { CreateEventPayload } from '../../../types/event';
import { Contribution } from '../../../types/guest';

interface EventStoreState
 {
  events: {
    data: Event[];
    error: string | null;
    status: requestState
  },
  createEvent: {
    error: string | null;
    status: requestState;
  },
  topContributors: {
    data: Contribution[];
    error: string | null;
    status: requestState
  },
  contributions: {
    data: Contribution[];
    error: string | null;
    status: requestState
  }
}

const initialState: EventStoreState = {
  events: {
    data: [],
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
};

export const getEvents = createAsyncThunk(
  'event/getEvents',
  async () => {
    try {
      const response = await eventAPI.getEvents();
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const createEvent = createAsyncThunk(
  'event/createEvent',
  async (event: CreateEventPayload) => {
    try {
      const response = await eventAPI.createEvent(event);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

export const getTopContributors = createAsyncThunk(
  'event/getTopContributors',
  async (event_id:string) => {
    try {
      const response = await eventAPI.getTopContributors(event_id);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const getContributions = createAsyncThunk(
  'event/getContributions',
  async (event_id:string) => {
    try {
      const response = await eventAPI.getContributions(event_id);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)
  
const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
  },
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
  }  
});

export const authApi = eventSlice.actions;
export default eventSlice.reducer;
