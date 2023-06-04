import React from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";

const CartItem = ({
  productId,
  image,
  title,
  price,
  quantity,
  size,
  status,
  desc,
}) => {
  const { COLORS, FONTS } = useSelector((state) => state.theme);
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, paddingRight: 15 }}>
          <Text
            style={{ ...FONTS.font, color: COLORS.primary, marginBottom: 6 }}
          >
            {productId}
          </Text>
          <Text style={{ ...FONTS.h6 }}>{title}</Text>
        </View>
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 8,
            marginBottom: 10,
          }}
          source={image}
        />
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
      >
        <Text style={{ ...FONTS.font, ...FONTS.fontBold, flex: 1 }}>
          {size}
        </Text>
        <Text style={{ ...FONTS.font, ...FONTS.fontBold }}>{quantity}</Text>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.title,
            width: 100,
            textAlign: "right",
          }}
        >
          {price}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <View>
          <View
            style={{
              position: "absolute",
              height: 33,
              width: "100%",
              borderWidth: 1,
              bottom: -1,
              borderColor:
                status === "completed"
                  ? COLORS.success
                  : status === "canceled"
                  ? COLORS.danger
                  : status === "on delivery"
                  ? COLORS.info
                  : COLORS.primary,
              borderRadius: 6,
              opacity: 0.3,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 12,
              paddingVertical: 6,
            }}
          >
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 8,
                marginRight: 12,
                backgroundColor:
                  status === "completed"
                    ? COLORS.success
                    : status === "canceled"
                    ? COLORS.danger
                    : status === "on delivery"
                    ? COLORS.info
                    : COLORS.primary,
              }}
            />
            <Text
              style={{
                ...FONTS.font,
                ...FONTS.fontBold,
                color:
                  status === "completed"
                    ? COLORS.success
                    : status === "canceled"
                    ? COLORS.danger
                    : status === "on delivery"
                    ? COLORS.info
                    : COLORS.primary,
                textTransform: "uppercase",
              }}
            >
              {status}
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...FONTS.font,
            color: COLORS.title,
            flex: 1,
            marginLeft: 30,
          }}
        >
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
