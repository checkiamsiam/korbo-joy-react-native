import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const SuccessSheet = () => {
  const { data } = useSelector((state) => state.actionSheet);
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
          name="checkmark-circle"
          style={{ marginBottom: 8 }}
          color={COLORS.success}
          size={60}
        />
        <Text style={{ ...FONTS.h5, color: COLORS.title }}>{data.title}</Text>
        <Text
          style={{ ...FONTS.font, color: COLORS.text, textAlign: "center" }}
        >
          {data.subTitle}
        </Text>
      </View>
    </>
  );
};

export default SuccessSheet;
