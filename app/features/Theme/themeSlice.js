import { createSlice } from "@reduxjs/toolkit";
import {
  GlobalStyleSheetDark,
  GlobalStyleSheetLight,
} from "../../constants/StyleSheet";
import {
  DARK_COLOR,
  DARK_FONTS,
  LIGHT_COLOR,
  LIGHT_FONTS,
  SIZES,
} from "../../constants/theme";

const initialState = {
  mode: "light",
  FONTS: LIGHT_FONTS,
  COLORS: LIGHT_COLOR,
  SIZES: SIZES,
  GlobalStyleSheet: GlobalStyleSheetLight,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.FONTS = state.mode === "light" ? LIGHT_FONTS : DARK_FONTS;
      state.COLORS = state.mode === "light" ? LIGHT_COLOR : DARK_COLOR;
      state.GlobalStyleSheet =
        state.mode === "light" ? GlobalStyleSheetLight : GlobalStyleSheetDark;
    },
  },
});

console.log("object");

const themeReducer = themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;

export default themeReducer;
