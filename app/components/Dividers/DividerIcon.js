import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const DividerIcon = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: props.color ? props.color : COLORS.borderColor,
            borderStyle: props.dashed ? "dashed" : "solid",
            marginTop: 15,
            marginBottom: 15,
            flex: 1,
            ...props.style,
          }}
        />
        {props.icon && <View style={{ paddingHorizontal: 10 }}>{props.icon}</View>}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: props.color ? props.color : COLORS.borderColor,
            borderStyle: props.dashed ? "dashed" : "solid",
            marginTop: 15,
            marginBottom: 15,
            flex: 1,
            ...props.style,
          }}
        />
      </View>
    </>
  );
};

export default DividerIcon;
