import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';

export type rootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;