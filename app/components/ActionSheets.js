import React from "react";
import { Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setActionSheet } from "../features/Action/ActionSheetSlice";
import { actionSheetRef } from "../utils/globalRef";

const ActionSheets = () => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { activeSheet, data } = useSelector((state) => state.actionSheet);
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
      height={activeSheet === "success" ? 220 : 230}
      openDuration={100}
      customStyles={{
        wrapper: {},
        container: {
          backgroundColor: COLORS.white,
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
      {activeSheet === "success" && (
        <>
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 35,
              paddingVertical: 20,
            }}
          >
            <Ionicons name="checkmark-circle" style={{ marginBottom: 8 }} color={COLORS.success} size={60} />
            <Text style={{ ...FONTS.h5, color: COLORS.title }}>{data.title}</Text>
            <Text style={{ ...FONTS.font, color: COLORS.text, textAlign: "center" }}>{data.subTitle}</Text>
          </View>
        </>
      )}
    </RBSheet>
  );
};

export default ActionSheets;
