import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload: { user } }) => {},
    logout: (state) => {},
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
