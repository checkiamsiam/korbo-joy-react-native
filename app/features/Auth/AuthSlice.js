import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: {
    name: "",
    number: null,
  },
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.token;
      state.user.name = payload.name;
      state.user.number = payload.number;
    },
    logout: (state) => {
      state.token = null;
      state.user.name = "";
      state.user.number = null;
    },
  },
});

const authReducer = authSlice.reducer;
export const { setUser, logout } = authSlice.actions;

export default authReducer;
