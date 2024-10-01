import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { requestState } from '../../../utils/enums';
import { userApi } from '../../../apis/user';
import Cookies from 'js-cookie';
import {
    PasswordForgetPayload,
    User,
    UserLoginPayload,
    UserLoginRespone,
    UserRegisterPayload,
    UserRegisterResponse,
} from '../../../types/user';
import { Contribution } from '../../../types/guest';

interface UserState {
    user: {
        data: User | null;
        error: string | null;
        status: requestState;
    };
    login: {
        error: string | null;
        status: requestState;
    };
    register: {
        error: string | null;
        status: requestState;
    };
    forgetPassword: {
        error: string | null;
        status: requestState;
    };
    contributions: {
        data: Contribution[];
        status: requestState;
        error: string | null;
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
    },
    forgetPassword: {
        error: null,
        status: requestState.idle,
    },
    contributions: {
        data: [],
        status: requestState.idle,
        error: null,
    },
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user: UserRegisterPayload, { rejectWithValue } ) => {
        try {
            const response = await userApi.registerUser(user);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user: UserLoginPayload, { rejectWithValue }) => {
        try {
            const response = await userApi.loginUser(user);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error.message);
        }
    }
);

export const forgetPassword = createAsyncThunk(
    'user/forgetPassword',
    async (payload: PasswordForgetPayload, { rejectWithValue }) => {
        try {
            const response = await userApi.forgetPassword(payload);
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error?.response.data?.detail);
        }
    }
)

export const getMyContributions = createAsyncThunk(
    'user/getMyContributions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await userApi.getMyContributions();
            return response.data;
        } catch (error: any) {
            throw rejectWithValue(error?.response.data?.detail);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<UserLoginRespone>) => {
                    state.login.status = requestState.success;
                    Cookies.set(
                        'refresh_token',
                        JSON.stringify(action.payload.refresh)
                    );
                    Cookies.set('access_token', action.payload.access);
                }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.login.status = requestState.failed;
                state.login.error = action.error.message || null;
                Cookies.remove('token');
                Cookies.remove('refresh_token');
            })
            .addCase(forgetPassword.pending, (state) => {
                state.forgetPassword.status = requestState.loading;
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.forgetPassword.status = requestState.success;
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.forgetPassword.status = requestState.failed;
                state.forgetPassword.error = action.error.message || null;
            })
            .addCase(getMyContributions.pending, (state) => {
                state.contributions.status = requestState.loading;
            })
            .addCase(getMyContributions.fulfilled, (state, action) => {
                state.contributions.status = requestState.success;
                state.contributions.data = action.payload;
            })
            .addCase(getMyContributions.rejected, (state, action) => {
                state.contributions.status = requestState.failed;
                state.contributions.error = action.error.message || null;
            })
    },
});

export const authApi = userSlice.actions;
export default userSlice.reducer;
