import { createSlice } from "@reduxjs/toolkit";
import { DARK_COLOR, DARK_FONTS, LIGHT_COLOR, LIGHT_FONTS, SIZES } from "../../constants/theme";

const initialState = {
  mode: "light",
  FONTS: LIGHT_FONTS,
  COLORS: LIGHT_COLOR,
  SIZES: SIZES,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.FONTS = state.mode === "light" ? LIGHT_FONTS : DARK_FONTS;
      state.COLORS = state.mode === "light" ? LIGHT_COLOR : DARK_COLOR;
    },
  },
});

const themeReducer = themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;

export default themeReducer;
