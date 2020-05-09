import { createSlice } from '@reduxjs/toolkit';
import { rootState } from './store';

interface ILoginState {
  token: string
}

const initialState: ILoginState = {
  token: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      debugger;
      state.token = action.payload;
    },
    logout: state => {
      state.token = '';
    }
  },
});

export const { login, logout } = loginSlice.actions;

export const selectToken = (state:rootState) => state.login.token;

export default loginSlice.reducer;
