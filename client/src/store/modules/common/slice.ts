import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../index';

interface CommonState {
    alert: {
        message: string;
        type: 'success' | 'info' | 'failure';
        open: boolean;
    }
}

const initialState: CommonState = {
  alert: {
    message: '',
    type: 'success',
    open: false,
  },
};

const commonSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{ message: string; type: 'success' | 'info' | 'failure' }>
    ) => {
      state.alert.message = action.payload.message;
      state.alert.type = action.payload.type;
      state.alert.open = true;
    },
    closeAlert: (state) => {
      state.alert.open = false;
      state.alert.message = ''; 
    },
  },
});

export const { showAlert, closeAlert } = commonSlice.actions;

export default commonSlice.reducer;

