import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const ButtonSm = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity
      style={[
        {
          ...props.style,
          backgroundColor: props.color ? props.color : COLORS.primary,
          paddingHorizontal: 10,
          paddingVertical: 8,
          alignItems: "center",
          borderRadius: props.btnSquare
            ? 0
            : props.btnRounded
            ? 20
            : SIZES.radius_sm,
        },
      ]}
    >
      <Text
        style={{ ...FONTS.fontSm, ...FONTS.fontPoppins, color: COLORS.white }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSm;
