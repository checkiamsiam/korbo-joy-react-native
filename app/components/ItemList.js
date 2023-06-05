import { IMAGE_BASE } from "@env";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";
import { showSnack } from "../features/Action/SnackbarSlice";
import { useAddToCartMutation } from "../features/Cart/CartApi";

const ItemList = ({
  id,
  title,
  price,
  oldPrice,
  offer,
  rating,
  review,
  image,
  handleLike,
  isLike,
}) => {
  const navigation = useNavigation();
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);

  // var ratingArry = [];
  // for(var i = 0; i < rating; i++){
  //     ratingArry.push(i);
  // }
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
      onPress={() =>
        navigation.navigate("ProductDetail", {
          item: {
            id: id,
          },
        })
      }
      style={{
        flexDirection: "row",
        marginBottom: 30,
        alignItems: "center",
      }}
    >
      <View style={{ marginRight: 15 }}>
        <Image
          source={{
            uri: `${IMAGE_BASE}/${image}`,
          }}
          style={{
            width: 93,
            height: 115,
            borderRadius: SIZES.radius,
          }}
        />
        {/* <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
          }}s
          onPress={() => handleLike(id)}
        >
          {isLike ? (
            <FontAwesome name="heart" color={COLORS.primary} size={22} />
          ) : (
            <FontAwesome name="heart-o" color={COLORS.white} size={22} />
          )}
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          onPress={handleAddToCart}
        >
          <FeatherIcon color={COLORS.primary} size={22} name="shopping-cart" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginRight: 5,
              alignItems: "center",
            }}
          >
            {/* {ratingArry.map((data, index) => {
              return <Octicons key={index} size={15} style={{ marginRight: 5 }} color={"#FFA800"} name="star-fill" />;
            })} */}
            <Text
              style={{ ...FONTS.font, color: COLORS.title, ...FONTS.fontBold }}
            >
              {rating}
            </Text>
            <Octicons
              size={14}
              style={{ marginRight: 5, marginLeft: 3 }}
              color={"#FFA800"}
              name="star-fill"
            />
          </View>
          <Text style={{ color: COLORS.text }}>({review || 20} Reviews)</Text>
        </View>
        <Text style={{ ...FONTS.h6, fontSize: 15 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={[FONTS.h5, { marginRight: 6 }]}>{price} TK</Text>
          <Text style={[FONTS.fontXs, { textDecorationLine: "line-through" }]}>
            {oldPrice} TK
          </Text>
          <Text
            style={[
              FONTS.font,
              FONTS.fontBold,
              {
                color: COLORS.primary,
                marginLeft: 10,
                marginBottom: 4,
              },
            ]}
          >
            {offer}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;
