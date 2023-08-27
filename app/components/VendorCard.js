import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const VendorCard = ({ image, title, category, imageUrl, onPress }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.borderColor,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 100,
          aspectRatio: 100 / 100,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
        source={imageUrl ? { uri: imageUrl } : image}
      />
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 8,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{ ...FONTS.fontSm, ...FONTS.fontBold, color: COLORS.title }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VendorCard;
