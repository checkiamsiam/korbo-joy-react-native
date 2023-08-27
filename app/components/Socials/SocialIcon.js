import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const SocialIcon = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <TouchableOpacity
        style={[
          {
            height: 40,
            width: 40,
            backgroundColor: props.color ? props.color : COLORS.primary,
            borderRadius: props.square ? 0 : props.rounded ? 30 : SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 4,
          },
          props.btnSm && {
            height: 35,
            width: 35,
          },
          props.btnLg && {
            height: 45,
            width: 45,
          },
        ]}
      >
        {props.icon}
      </TouchableOpacity>
    </>
  );
};

export default SocialIcon;
