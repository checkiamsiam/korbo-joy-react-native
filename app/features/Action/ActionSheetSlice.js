import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  activeSheet: "",
  data: {},
};

const actionSheetSlice = createSlice({
  name: "actionSheet",
  initialState,
  reducers: {
    setActionSheet(state, { payload }) {
      state.activeSheet = payload.activeSheet;
      state.data = payload.data;
    },
    setLoadingScreen(state) {
      state.loading = true;
    },
    removeLoadingScreen(state) {
      state.loading = false;
    },
  },
});

const actionSheetReducer = actionSheetSlice.reducer;

export const { setActionSheet, removeLoadingScreen, setLoadingScreen } =
  actionSheetSlice.actions;

export default actionSheetReducer;
