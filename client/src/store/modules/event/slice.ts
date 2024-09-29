import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { eventAPI } from '../../../apis/event';

interface EventStoreState
 {
  events: {
    data: Event[];
    error: string | null;
    status: requestState
  },
}

const initialState: EventStoreState = {
  events: {
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
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.events.status = requestState.failed;
        state.events.error = action.error.message || null;
      })
  }  
});

export const authApi = eventSlice.actions;
export default eventSlice.reducer;
