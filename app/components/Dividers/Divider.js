import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const Divider = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: props.color ? props.color : COLORS.borderColor,
          borderStyle: props.dashed ? "dashed" : "solid",
          marginTop: 15,
          marginBottom: 15,
          ...props.style,
        }}
      />
    </>
  );
};

export default Divider;
