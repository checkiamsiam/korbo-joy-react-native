import { Skeleton } from "@rneui/themed";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import { useAddToCartMutation } from "../../features/Cart/CartApi";
import { useGetProductDetailQuery } from "../../features/Product/productApi";
import Header from "../../layout/Header";
import ProductDetailSlider from "./ProductDetailSlider";

// const productImage = [pic1, pic1, pic1];

const ProductDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const {
    isLoading,
    isSuccess,
    data: productDetails,
  } = useGetProductDetailQuery(item.id, { refetchOnMountOrArgChange: true });
  const { COLORS, FONTS, SIZES, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  const { user } = useSelector((state) => state.auth);
  const [addToCart, {}] = useAddToCartMutation();
  const handleAddToCart = async () => {
    await addToCart({
      id: productDetails.id,
      userId: user.id,
      orderType: "userOrder",
      userType: "user",
    });
    navigation.navigate("Cart");
  };

  // const productColors = ["#A29698", "#80C6A9", "#8E84CA", "#E5907D"];

  // const [isLike, setIsLike] = useState(false);
  // const [isSnackbar, setIsSnackbar] = useState(false);
  // const [snackText, setSnackText] = useState("Loading...");

  // var ratingArry = [];
  // for (var i = 0; i < 4; i++) {
  //   ratingArry.push(i);
  // }

  // const [activeColor, setActiveColor] = useState(productColors[0]);

  // const handleLike = () => {
  //   if (isLike) {
  //     setSnackText("Item removed to Favourite.");
  //   } else {
  //     setSnackText("Item add to Favourite.");
  //   }
  //   setIsSnackbar(true);
  //   setIsLike(!isLike);
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Header transparent={true} leftIcon={"back"} />
        <View>
          {!isLoading && isSuccess ? (
            <ProductDetailSlider images={[productDetails.img]} />
          ) : (
            <Skeleton width={SIZES.width} height={SIZES.width} />
          )}
          {/* <TouchableOpacity
            onPress={() => handleLike()}
            activeOpacity={0.95}
            style={{
              height: 60,
              width: 60,
              backgroundColor: COLORS.primaryLight,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: -30,
              right: 30,
            }}
          >
            {isLike ? <FontAwesome name="heart" color={COLORS.primary} size={22} /> : <FontAwesome name="heart-o" color={COLORS.primary} size={22} />}
          </TouchableOpacity> */}
        </View>
        <View style={GlobalStyleSheet.container}>
          <View
            style={{
              alignItems: "flex-start",
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
              paddingBottom: 12,
            }}
          >
            {!isLoading && isSuccess ? (
              <View
                style={{
                  backgroundColor: COLORS.primaryLight,
                  paddingHorizontal: 14,
                  paddingVertical: 6,
                  borderRadius: SIZES.radius,
                  marginBottom: 14,
                  marginTop: 10,
                }}
              >
                <Text style={{ ...FONTS.fontLg, color: COLORS.primary }}>
                  {productDetails?.category?.name}
                </Text>
              </View>
            ) : (
              <Skeleton
                width={90}
                height={25}
                style={{
                  borderRadius: SIZES.radius,
                  marginBottom: 14,
                  marginTop: 10,
                }}
              />
            )}

            {!isLoading && isSuccess ? (
              <Text style={{ ...FONTS.h6, marginBottom: 3 }}>
                {productDetails?.name}
              </Text>
            ) : (
              <Skeleton
                width={200}
                height={25}
                style={{ borderRadius: SIZES.radius, marginBottom: 10 }}
              />
            )}
            {!isLoading && isSuccess ? (
              productDetails?.shortDescription && (
                <Text style={{ ...FONTS.font, color: COLORS.text }}>
                  {productDetails?.shortDescription}
                </Text>
              )
            ) : (
              <Skeleton
                width={SIZES.width - 28}
                height={50}
                style={{ borderRadius: SIZES.radius, marginBottom: 3 }}
              />
            )}
            {/* <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 4,
                  }}
                >
                  {ratingArry.map((data, index) => {
                    return <Octicons key={index} size={16} style={{ marginRight: 5 }} color={"#FFA800"} name="star-fill" />;
                  })}
                </View>
                <Text style={FONTS.font}>(256 Reviews)</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {productColors.map((data, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setActiveColor(data)}
                      key={index}
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        marginLeft: 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {activeColor === data && (
                        <View
                          style={{
                            height: 24,
                            width: 24,
                            borderRadius: 24,
                            borderWidth: 2,
                            borderColor: COLORS.primary,
                            position: "absolute",
                          }}
                        />
                      )}
                      <View
                        style={{
                          height: 16,
                          width: 16,
                          borderRadius: 16,
                          backgroundColor: data,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View> */}
          </View>

          {!isLoading && isSuccess ? (
            <View
              style={{
                paddingTop: 15,
                borderBottomWidth: 1,
                borderColor: COLORS.borderColor,
                paddingBottom: 12,
              }}
            >
              <Text style={{ ...FONTS.h6, marginBottom: 5 }}>
                Specifications
              </Text>
              {productDetails?.categoryBrand?.name && (
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                    Brand
                  </Text>
                  <Text style={FONTS.font}>
                    {productDetails?.categoryBrand?.name}
                  </Text>
                </View>
              )}
              {productDetails?.categorySub?.name && (
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                    Sub Category
                  </Text>
                  <Text style={FONTS.font}>
                    {productDetails?.categorySub?.name}
                  </Text>
                </View>
              )}
              {productDetails?.status && (
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                    Status
                  </Text>
                  <Text style={FONTS.font}>{productDetails?.status}</Text>
                </View>
              )}
              {productDetails?.productType && (
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                    Product Type
                  </Text>
                  <Text style={FONTS.font}>{productDetails?.productType}</Text>
                </View>
              )}
              {productDetails?.qty && (
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>
                    Available Quantity
                  </Text>
                  <Text style={FONTS.font}>{productDetails?.qty}</Text>
                </View>
              )}
            </View>
          ) : (
            <View
              style={{
                paddingTop: 15,
                borderBottomWidth: 1,
                borderColor: COLORS.borderColor,
                paddingBottom: 12,
              }}
            >
              <Skeleton
                width={120}
                height={20}
                style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
                <Skeleton
                  width={100}
                  height={18}
                  style={{ borderRadius: SIZES.radius, marginBottom: 5 }}
                />
              </View>
            </View>
          )}
          {productDetails?.fullDescription && (
            <View
              style={{
                paddingTop: 12,
              }}
            >
              <Text style={{ ...FONTS.h6, marginBottom: 2 }}>Description</Text>
              <Text style={{ ...FONTS.font, color: COLORS.text }}>
                {productDetails?.fullDescription}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: COLORS.borderColor,
          backgroundColor: COLORS.backgroundColor,
        }}
      >
        {!isLoading && isSuccess ? (
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.h3, lineHeight: 30 }}>
              {productDetails?.price} TK
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  ...FONTS.font,
                  textDecorationLine: "line-through",
                  marginRight: productDetails?.salesPrice ? 8 : 0,
                }}
              >
                {productDetails?.salesPrice} TK
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Skeleton
              width={100}
              height={25}
              style={{ borderRadius: SIZES.radius, marginBottom: 6 }}
            />
            <View style={{ flexDirection: "row" }}>
              <Skeleton
                width={70}
                height={20}
                style={{ borderRadius: SIZES.radius }}
              />
            </View>
          </View>
        )}

        {!isLoading && isSuccess ? (
          <CustomButton onPress={handleAddToCart} title="ADD TO CART" />
        ) : (
          <Skeleton
            width={140}
            height={50}
            style={{ borderRadius: SIZES.radius, marginBottom: 6 }}
          />
        )}
      </View>
      {/* <Snackbar
        visible={isSnackbar}
        duration={3000}
        onDismiss={() => setIsSnackbar(false)}
        action={{
          label: "Wishlist",
          onPress: () => {
            navigation.navigate("Wishlist");
          },
        }}
      >
        {snackText}
      </Snackbar> */}
    </SafeAreaView>
  );
};

export default ProductDetail;
