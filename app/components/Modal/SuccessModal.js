import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

const SuccessModal = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 30,
          paddingVertical: 20,
          paddingBottom: 30,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          marginHorizontal: 30,
          maxWidth: 340,
        }}
      >
        <Ionicons name="checkmark-circle" style={{ marginBottom: 8 }} color={COLORS.success} size={60} />
        <Text style={{ ...FONTS.h5, color: COLORS.title }}>Success</Text>
        <Text style={{ ...FONTS.font, color: COLORS.text, textAlign: "center" }}>
          You can continue with your previous actions. Easy to attach these to success calls.
        </Text>
      </View>
    </>
  );
};

export default SuccessModal;
