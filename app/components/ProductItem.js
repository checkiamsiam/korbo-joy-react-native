import { IMAGE_BASE } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { showSnack } from "../features/Action/SnackbarSlice";
import { useAddToCartMutation } from "../features/Cart/CartApi";

const ProductItem = ({ id, image, title, desc, price, oldPrice, rating, reviews, status, imgLength, onPress, imageSrc, isLike, handleItemLike }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const handleAddToCart = async () => {
    if (!isLoading) {
      await addToCart({
        id: id,
        userId: user.id,
        orderType: "userOrder",
        userType: "user",
      });
      dispatch(
        showSnack({
          text: `Product added to cart successfully!  +1x`,
          actionLabel: "View",
          navigateTo: "Cart",
        })
      );
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 8,
        marginBottom: 10,
      }}
    >
      <View>
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: imgLength ? 1 / 1.3 : 1 / 1,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          source={imageSrc ? { uri: `${IMAGE_BASE}/${imageSrc}` } : image}
        />
        <LinearGradient
          colors={["rgba(0,0,0,.3)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            transform: [
              {
                rotateY: "180deg",
              },
            ],
          }}
        />
        {status === "Offer" ||
          (status === "'FlashSales" && (
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 15,
                backgroundColor: status === "Offer" ? COLORS.primary : COLORS.secondary,
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.fontXs, color: COLORS.white }}>{status}</Text>
            </View>
          ))}
        <TouchableOpacity
          onPress={handleAddToCart}
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            top: 10,
            right: 10,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FeatherIcon color={COLORS.primaryLight} size={24} name="shopping-cart" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}
      >
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
        {desc && (
          <Text numberOfLines={1} style={{ ...FONTS.fontXs, marginBottom: 3 }}>
            {desc}
          </Text>
        )}
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
          }}
        >
          <Text style={{ ...FONTS.h6 }}>{price} TK</Text>
          <Text
            style={{
              ...FONTS.fontSm,
              textDecorationLine: "line-through",
              marginLeft: 8,
              marginTop: 2,
            }}
          >
            {oldPrice} TK
          </Text>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text style={{ ...FONTS.font, ...FONTS.fontMedium, color: COLORS.title }}>{rating}</Text>
          <FontAwesome style={{ marginLeft: 3, marginRight: 10 }} color={"#FFA800"} size={14} name="star" />
          <Text style={{ ...FONTS.fontSm }}>({reviews} Reviews)</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
