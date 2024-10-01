import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user/slice';
import eventReducer from './modules/event/slice';
import guestReducer from './modules/guest/slice';
import commonReducer from './modules/common/slice';

const rootReducer = combineReducers({
    userState: userReducer,
    eventState: eventReducer,
    guestState: guestReducer,
    commonState: commonReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
