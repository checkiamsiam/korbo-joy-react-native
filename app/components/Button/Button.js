import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const Button = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onPress && props.onPress()}
      style={[
        {
          ...props.style,
          backgroundColor: props.color ? props.color : COLORS.primary,
          paddingHorizontal: 18,
          paddingVertical: 12,
          borderRadius: props.btnSquare
            ? 0
            : props.btnRounded
            ? 30
            : SIZES.radius,
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={[
          { ...FONTS.h6, color: COLORS.white },
          props.textColor && { color: props.textColor },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
