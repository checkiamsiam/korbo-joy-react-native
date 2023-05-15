import { IMAGE_BASE } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useGetProductDetailQuery } from "../../features/Product/productApi";
import Header from "../../layout/Header";

// const productImage = [pic1, pic1, pic1];

const ProductDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const {} = useGetProductDetailQuery(item.id, { refetchOnMountOrArgChange: true });
  const { productDetails } = useSelector((state) => state.product);

  console.log(productDetails);

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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Header transparent={true} leftIcon={"back"} />
        <View>
          <Swiper
            style={{ height: SIZES.width }}
            dotStyle={{
              height: 10,
              width: 10,
              borderWidth: 2,
              borderColor: COLORS.white,
              borderRadius: 10,
            }}
            activeDotStyle={{
              height: 10,
              width: 10,
              backgroundColor: COLORS.white,
              borderRadius: 10,
            }}
          >
            {JSON.parse(productDetails.img).map((data, index) => {
              return (
                <View key={index}>
                  <Image
                    source={{ uri: `${IMAGE_BASE}/${data}` }}
                    style={{
                      width: "100%",
                      height: undefined,
                      aspectRatio: 1 / 1,
                    }}
                  />
                  <LinearGradient
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      top: 0,
                      left: 0,
                    }}
                    colors={["rgba(0,0,0,.3)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]}
                  />
                </View>
              );
            })}
          </Swiper>
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
              <Text style={{ ...FONTS.fontLg, color: COLORS.primary }}>{productDetails?.category?.name}</Text>
            </View>
            <Text style={{ ...FONTS.h6, marginBottom: 3 }}>{productDetails?.name}</Text>
            {productDetails?.shortDescription && <Text style={{ ...FONTS.font, color: COLORS.text }}>{productDetails?.shortDescription}</Text>}
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
          <View
            style={{
              paddingTop: 15,
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
              paddingBottom: 12,
            }}
          >
            <Text style={{ ...FONTS.h6, marginBottom: 5 }}>Specifications</Text>
            {productDetails?.categoryBrand?.name && (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Brand</Text>
                <Text style={FONTS.font}>{productDetails?.categoryBrand?.name}</Text>
              </View>
            )}
            {productDetails?.categorySub?.name && (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Sub Category</Text>
                <Text style={FONTS.font}>{productDetails?.categorySub?.name}</Text>
              </View>
            )}
            {productDetails?.status && (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Status</Text>
                <Text style={FONTS.font}>{productDetails?.status}</Text>
              </View>
            )}
            {productDetails?.productType && (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Product Type</Text>
                <Text style={FONTS.font}>{productDetails?.productType}</Text>
              </View>
            )}
            {productDetails?.qty && (
              <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Text style={{ ...FONTS.font, color: COLORS.title, flex: 1 }}>Available Quantity</Text>
                <Text style={FONTS.font}>{productDetails?.qty}</Text>
              </View>
            )}
          </View>
          {productDetails?.fullDescription && (
            <View
              style={{
                paddingTop: 12,
              }}
            >
              <Text style={{ ...FONTS.h6, marginBottom: 2 }}>Description</Text>
              <Text style={{ ...FONTS.font, color: COLORS.text }}>{productDetails?.fullDescription}</Text>
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
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h3, lineHeight: 30 }}>{productDetails?.price} TK</Text>
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
            {/* <Text
              style={{
                ...FONTS.font,
                color: COLORS.primary,
                ...FONTS.fontBold,
              }}
            >
              20% OFF
            </Text> */}
          </View>
        </View>
        <CustomButton onPress={() => navigation.navigate("Cart")} title="ADD TO CART" />
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
