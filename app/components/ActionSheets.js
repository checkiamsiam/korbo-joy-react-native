import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { setActionSheet } from "../features/ActionSheets/ActionSheetSlice";
import { actionSheetRef } from "../utils/globalRef";
import LoginSheet from "./ActionSheet/LoginSheet";
import OptionBar from "./ActionSheet/OptionBar";
import RegisterSheet from "./ActionSheet/RegisterSheet";
import SuccessSheet from "./ActionSheet/SuccessSheet";

const ActionSheets = () => {
  const dispatch = useDispatch();
  const { COLORS } = useSelector((state) => state.theme);
  const { activeSheet } = useSelector((state) => state.actionSheet);
  const handleClose = () => {
    dispatch(
      setActionSheet({
        activeSheet: "",
        data: {},
      })
    );
  };
  return (
    <RBSheet
      ref={actionSheetRef}
      closeOnDragDown={true}
      onClose={handleClose}
      height={
        activeSheet === "option" ? 270 : activeSheet === "success" ? 220 : activeSheet === "login" ? 360 : activeSheet === "register" ? 430 : 230
      }
      openDuration={100}
      customStyles={{
        wrapper: {},
        container: {
          backgroundColor: COLORS.backgroundColor,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        draggableIcon: {
          marginTop: 5,
          marginBottom: 0,
          height: 5,
          width: 90,
          backgroundColor: COLORS.borderColor,
        },
      }}
    >
      {activeSheet === "option" ? (
        <OptionBar />
      ) : activeSheet === "success" ? (
        <SuccessSheet />
      ) : activeSheet === "login" ? (
        <LoginSheet />
      ) : activeSheet === "register" ? (
        <RegisterSheet />
      ) : (
        <SuccessSheet />
      )}
    </RBSheet>
  );
};

export default ActionSheets;
