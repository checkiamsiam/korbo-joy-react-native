import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { IMAGES } from "../../constants/theme";

const HeaderStyle3 = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <>
      <View
        style={{
          height: 70,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={IMAGES.user}
            style={{
              height: 45,
              width: 45,
              borderRadius: 45,
              marginRight: 12,
            }}
          />
          <View>
            <Text
              style={{
                ...FONTS.fontXs,
                ...FONTS.fontBold,
                color: COLORS.text,
                marginBottom: 2,
              }}
            >
              Hello, John
            </Text>
            <Text
              style={{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.title }}
            >
              Thursday, 10 Sep
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 45,
            width: 45,
            borderWidth: 1,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            borderColor: COLORS.borderColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              height: 10,
              width: 10,
              top: 11,
              right: 12,
              borderRadius: 8,
              backgroundColor: COLORS.primary,
              borderWidth: 2,
              borderColor: COLORS.white,
            }}
          />
          <FeatherIcon name="bell" color={COLORS.title} size={20} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderStyle3;
