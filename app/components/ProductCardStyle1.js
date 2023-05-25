import { IMAGE_BASE } from "@env";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const ProductCardStyle1 = ({ image, title, price, oldPrice, offer, onPress }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 8,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 80 / 100,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{
          uri: `${IMAGE_BASE}/${image}`,
        }}
      />
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.font,
            fontSize: 11,
            ...FONTS.fontBold,
            color: COLORS.title,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -3,
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              ...FONTS.fontBold,
              color: COLORS.success,
            }}
          >
            {offer}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              textDecorationLine: "line-through",
              marginLeft: offer ? 5 : 0,
              marginRight: price ? 5 : 0,
            }}
          >
            {oldPrice} {oldPrice && "TK"}
          </Text>
          <Text
            style={{
              ...FONTS.font,
              fontSize: 10,
              ...FONTS.fontBold,
              color: COLORS.title,
            }}
          >
            {price} {price && "TK"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardStyle1;
