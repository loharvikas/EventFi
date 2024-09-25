import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { userApi } from '../../../apis/user';
import Cookies from 'js-cookie';
import { User, UserLoginPayload, UserLoginRespone, UserRegisterPayload, UserRegisterResponse } from '../../../types/user';

interface UserState
 {
  user: {
    data: User | null;
    error: string | null;
    status: requestState
  },
  login: {
    error: string | null;
    status: requestState;

  },
  register: {
    error: string | null;
    status: requestState;
  }
}

const initialState: UserState = {
  user: {
    data: null,
    status: requestState.idle,
    error: null,
  },
  login: {
    error: null,
    status: requestState.idle,
  },
  register: {
    error: null,
    status: requestState.idle,
  }
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: UserRegisterPayload) => {
    try {
      const response = await userApi.registerUser(user);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user: UserLoginPayload, { rejectWithValue }) => {
    try {
      const response = await userApi.loginUser(user);
      console.log('--SDASDas---', response)
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);
  
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.register.status = requestState.loading;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.status = requestState.success;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.status = requestState.failed;
        state.register.error = action.error.message || null;
      })
      .addCase(loginUser.pending, (state) => {
        state.login.status = requestState.loading;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserLoginRespone>) => {
        state.login.status = requestState.success;
        console.log('---ACCTION---', action.payload)
        Cookies.set('refresh_token', JSON.stringify(action.payload.refresh));
        Cookies.set('access_token', action.payload.access);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.status = requestState.failed;
        state.login.error = action.error.message || null;
        Cookies.remove('token');
        Cookies.remove('refresh_token');
      })
  }  
});

export const authApi = userSlice.actions;
export default userSlice.reducer;
