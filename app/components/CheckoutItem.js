import { IMAGE_BASE } from "@env";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { COLORS, FONTS } from "../constants/theme";
import { useDeleteFromCartMutation } from "../features/Cart/CartApi";
import { quantityDecrement, quantityIncrement } from "../features/Cart/CartSlice";

const CheckoutItem = ({ image, title, price, oldPrice, quantity, type, id }) => {
  const dispatch = useDispatch();
  const [deleteFromCart, {}] = useDeleteFromCartMutation();

  const remove = (query) => {
    deleteFromCart(query);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
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
        source={{ uri: `${IMAGE_BASE}/${image}` }}
      />
      <View style={{ flex: 1, paddingVertical: 7 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
          <TouchableOpacity onPress={() => remove(id)}>
            <FeatherIcon size={14} color={COLORS.danger} name="trash-2" />
          </TouchableOpacity>
        </View>
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
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(quantityDecrement(id))}
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
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(quantityIncrement(id))}
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
