import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS } from "../constants/theme";

const CheckoutItem = ({ image, title, price, oldPrice, quantity, type, onPress }) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        flexDirection: "row",
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
        paddingBottom: 15,
        paddingTop: 15,
      }}
    >
      <Image
        style={{
          height: 90,
          width: 75,
          borderRadius: 8,
          marginRight: 12,
        }}
        source={image}
      />
      <View style={{ flex: 1, paddingVertical: 7 }}>
        <Text
          numberOfLines={1}
          style={{
            ...FONTS.font,
            ...FONTS.fontBold,
            color: COLORS.title,
            marginBottom: 4,
          }}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={{ ...FONTS.fontXs, color: "#BCBCBC" }}>
          {type}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text style={{ ...FONTS.h6 }}>{price}TK</Text>
            <Text
              style={{
                ...FONTS.fontSm,
                textDecorationLine: "line-through",
                marginLeft: 8,
              }}
            >
              {oldPrice} TK
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => itemQuantity > 1 && setItemQuantity(itemQuantity - 1)}
              style={{
                height: 25,
                width: 25,
                borderWidth: 1,
                borderRadius: 6,
                borderColor: COLORS.borderColor,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FeatherIcon size={14} color={COLORS.title} name="minus" />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.fontSm,
                ...FONTS.fontBold,
                color: COLORS.title,
                width: 30,
                textAlign: "center",
              }}
            >
              {itemQuantity}
            </Text>
            <TouchableOpacity
              onPress={() => setItemQuantity(itemQuantity + 1)}
              style={{
                height: 25,
                width: 25,
                borderWidth: 1,
                borderRadius: 6,
                borderColor: COLORS.borderColor,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FeatherIcon size={14} color={COLORS.title} name="plus" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{...FONTS.h6,marginRight:15}}>{price}</Text>
                    <Text style={{...FONTS.fontXs,textDecorationLine:'line-through'}}>{oldPrice}</Text>
                </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default CheckoutItem;
