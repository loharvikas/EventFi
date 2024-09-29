import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user/slice';
import eventReducer from './modules/event/slice';

const rootReducer = combineReducers({
  userState: userReducer,
  eventState: eventReducer,
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
