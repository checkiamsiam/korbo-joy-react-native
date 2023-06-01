import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  text: "",
  actionLabel: "",
  navigateTo: "",
};

const snackbarSlice = createSlice({
  name: "actionSheet",
  initialState,
  reducers: {
    showSnack(state, { payload }) {
      state.visible = true;
      state.text = payload.text;
      state.actionLabel = payload.actionLabel;
      state.navigateTo = payload.navigateTo;
    },
    hideSnack(state) {
      state.visible = false;
      state.text = "";
      state.actionLabel = "";
      state.navigateTo = "";
    },
  },
});

const snackbarReducer = snackbarSlice.reducer;

export const { hideSnack, showSnack } = snackbarSlice.actions;

export default snackbarReducer;
