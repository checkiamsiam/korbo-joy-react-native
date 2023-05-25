import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const CouponItem = ({ off, desc, category }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FAF1F8",
          borderRadius: 8,
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: 70,
            marginLeft: -10,
            borderRightWidth: 1,
            borderColor: COLORS.borderColor,
            marginRight: 15,
            borderStyle: "dashed",
          }}
        >
          <Text style={{ ...FONTS.h5, color: COLORS.secondary, top: 2 }}>{off}</Text>
          <Text style={{ ...FONTS.font, color: COLORS.secondary, top: -3 }}>Off</Text>
        </View>
        <View>
          <Text style={{ ...FONTS.font, marginBottom: 3 }}>{category}</Text>
          <Text
            style={{
              ...FONTS.font,
              color: COLORS.title,
              ...FONTS.fontBold,
              marginBottom: -1,
            }}
          >
            {desc}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CouponItem;
