import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "../Cart/CartSlice";

const initialState = {
  user: {
    id: null,
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
      state.user.id = payload.id;
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
