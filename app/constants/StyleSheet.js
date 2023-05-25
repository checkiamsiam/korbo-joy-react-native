import { DARK_COLOR, DARK_FONTS, LIGHT_COLOR, LIGHT_FONTS, SIZES } from "./theme";

export const GlobalStyleSheetLight = {
  container: {
    padding: 15,
  },
  formControl: {
    backgroundColor: LIGHT_COLOR.input,
    height: 50,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: LIGHT_COLOR.borderColor,
    paddingHorizontal: 12,
  },
  activeInput: {
    borderWidth: 2,
    borderColor: LIGHT_COLOR.primary,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: LIGHT_COLOR.danger,
  },
  label: {
    ...LIGHT_FONTS.font,
    color: LIGHT_COLOR.label,
    marginBottom: 8,
  },
  errorInputText: {
    ...LIGHT_FONTS.font,
    color: LIGHT_COLOR.danger,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  col50: {
    width: "50%",
    paddingHorizontal: 5,
  },
  col33: {
    width: "33.33%",
    paddingHorizontal: 5,
  },
  card: {
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: LIGHT_COLOR.borderColor,
    backgroundColor: LIGHT_COLOR.white,
  },
};

export const GlobalStyleSheetDark = {
  container: {
    padding: 15,
  },
  formControl: {
    backgroundColor: DARK_COLOR.input,
    height: 50,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: DARK_COLOR.borderColor,
    paddingHorizontal: 12,
  },
  activeInput: {
    borderWidth: 2,
    borderColor: DARK_COLOR.primary,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: DARK_COLOR.danger,
  },
  label: {
    ...DARK_FONTS.font,
    color: DARK_COLOR.label,
    marginBottom: 8,
  },
  errorInputText: {
    ...DARK_FONTS.font,
    color: DARK_COLOR.danger,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  col50: {
    width: "50%",
    paddingHorizontal: 5,
  },
  col33: {
    width: "33.33%",
    paddingHorizontal: 5,
  },
  card: {
    padding: 15,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: DARK_COLOR.borderColor,
    backgroundColor: DARK_COLOR.white,
  },
};
