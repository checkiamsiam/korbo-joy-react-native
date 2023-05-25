import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

const ProductListItem = ({ image, title, desc, price, oldPrice, offer, imageUrl, onPress }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
        paddingVertical: 12,
        marginHorizontal: 15,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          height: 75,
          width: 75,
          marginRight: 15,
        }}
        source={imageUrl ? { uri: imageUrl } : image}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            ...FONTS.font,
            fontSize: 13,
            ...FONTS.fontBold,
            color: COLORS.title,
          }}
        >
          {title}
        </Text>
        <Text style={{ ...FONTS.font, fontSize: 11, ...FONTS.fontMedium }}>{desc}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              style={{
                ...FONTS.fontXs,
                ...FONTS.fontBold,
                color: COLORS.success,
              }}
            >
              {offer}
            </Text>
            <Text
              style={{
                ...FONTS.fontXs,
                textDecorationLine: "line-through",
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              {oldPrice}
            </Text>
            <Text
              style={{
                ...FONTS.fontXs,
                ...FONTS.fontBold,
                color: COLORS.title,
              }}
            >
              {price}
            </Text>
          </View>
          <TouchableOpacity
            onPress={onPress}
            style={{
              height: 35,
              width: 35,
              borderRadius: 35,
              backgroundColor: COLORS.primaryLight,
              alignItems: "center",
              justifyContent: "center",
              paddingRight: 1,
            }}
          >
            <FeatherIcon size={15} color={COLORS.primary} name="shopping-cart" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListItem;
