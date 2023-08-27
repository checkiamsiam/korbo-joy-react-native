import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import ButtonSm from "../Button/ButtonSm";

const OptionBar = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 35,
          paddingVertical: 20,
        }}
      >
        <Ionicons
          name="information-circle-sharp"
          style={{ marginBottom: 8 }}
          color={"#704FFE"}
          size={60}
        />
        <Text style={{ ...FONTS.h5, color: COLORS.title }}>Are you sure?</Text>
        <Text
          style={{ ...FONTS.font, color: COLORS.text, textAlign: "center" }}
        >
          You can continue with your previous actions. Easy to attach these to
          success calls.
        </Text>
        <View style={{ flexDirection: "row", marginTop: 18 }}>
          <ButtonSm
            title={"Cancel"}
            style={{ marginRight: 10 }}
            color={"#f75a5b"}
          />
          <ButtonSm title={"Continue"} color={"#704FFE"} />
        </View>
      </View>
    </>
  );
};

export default OptionBar;
