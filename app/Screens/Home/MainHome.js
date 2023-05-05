import React from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IconButton } from "react-native-paper";
import Swiper from "react-native-swiper";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import bg1 from "../../assets/images/background/bg2.png";
import banner1 from "../../assets/images/banner/pic1.png";
import banner2 from "../../assets/images/banner/pic2.png";
import banner3 from "../../assets/images/banner/pic3.png";
import appliances from "../../assets/images/category/appliances.png";
import electronics from "../../assets/images/category/electronics.png";
import fashion from "../../assets/images/category/fashion.png";
import furniture from "../../assets/images/category/furniture.png";
import grocery from "../../assets/images/category/grocery.png";
import mobile from "../../assets/images/category/mobile.png";
import toys from "../../assets/images/category/toys.png";
import offer from "../../assets/images/offer/pic1.png";
import product1 from "../../assets/images/product/pic1.jpg";
import item2 from "../../assets/images/product/pic10.png";
import item3 from "../../assets/images/product/pic11.png";
import item4 from "../../assets/images/product/pic12.png";
import item5 from "../../assets/images/product/pic13.png";
import item6 from "../../assets/images/product/pic14.png";
import item7 from "../../assets/images/product/pic15.png";
import product2 from "../../assets/images/product/pic2.jpg";
import product3 from "../../assets/images/product/pic3.jpg";
import product4 from "../../assets/images/product/pic4.jpg";
import item1 from "../../assets/images/product/pic9.png";
import ProductCardStyle1 from "../../components/ProductCardStyle1";
import ProductCardStyle2 from "../../components/ProductCardStyle2";
import ProductListItem from "../../components/ProductListItem";
import StopWatch from "../../components/StopWatch";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";

const categoryData = [
  {
    image: mobile,
    title: "Mobiles",
  },
  {
    image: electronics,
    title: "Electronics",
  },
  {
    image: fashion,
    title: "Fashion",
  },
  {
    image: furniture,
    title: "Furniture",
  },
  {
    image: grocery,
    title: "Grocery",
  },
  {
    image: appliances,
    title: "Appliances",
  },
  {
    image: toys,
    title: "Books,Toys",
  },
  {
    title: "More",
  },
];

const bannerData = [
  {
    image: banner2,
  },
  {
    image: banner1,
  },
  {
    image: banner3,
  },
];

const SuggestData = [
  {
    image: product1,
    title: "Peter England Causual",
    price: "1,895",
    oldPrice: "2,500",
    offer: "30% off",
  },
  {
    image: product2,
    title: "Zip-Front Track Jacket",
    price: "₹2,599",
    oldPrice: "3,200",
    offer: "40% off",
  },
  {
    image: product3,
    title: "Zip-Front Puffer Jacket",
    price: "₹4,059",
    oldPrice: "5,000",
    offer: "20% off",
  },
  {
    image: product4,
    title: "Peter England Causual",
    price: "₹1,599",
    oldPrice: "2,000",
    offer: "40% off",
  },
];

const ProductData = [
  {
    type: "Electronics",
    image: item1,
    category: "Headphones",
    title: "Up to 80% off",
  },
  {
    type: "Mobiles",
    image: item2,
    category: "Mobile phones",
    title: "From ₹9,999",
  },
  {
    type: "Electronics",
    image: item3,
    category: "Laptops",
    title: "Up to 50% off",
  },
];

const PopularItemsData = [
  {
    imagePath: item4,
    title: "Havells Swing Fan",
    desc: "400mm , Blue tone",
    offer: "20% off",
    price: "₹1,299",
    oldPrice: "1500",
  },
  {
    imagePath: item5,
    title: "OnePlus Nord 2T 5G",
    desc: "8GB RAM, 128GB Storage",
    offer: "50% off",
    price: "₹24,099",
    oldPrice: "30,000",
  },
  {
    imagePath: item6,
    title: "ThinkPad L13 Yoga Gen 3",
    desc: "Dual dore , Red tone",
    offer: "20% off",
    price: "₹85,555",
    oldPrice: "95,000",
  },
];

const TopSelectionData = [
  {
    type: "Electronics",
    image: item7,
    title: "Wired Earphones",
    offer: "upto 50% off",
  },
  {
    type: "Electronics",
    image: item3,
    title: "Best Laptops",
    offer: "upto 50% off",
  },
  {
    type: "Electronics",
    image: item1,
    title: "Headphones",
    offer: "upto 50% off",
  },
  {
    type: "Mobiles",
    image: item2,
    title: "Top Mobiles",
    offer: "upto 50% off",
  },
];

const MainHome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.borderColor,
        }}
      >
        <IconButton
          icon={() => (
            <View
              style={{
                borderWidth: 1,
                borderColor: COLORS.borderColor,
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <FeatherIcon color={COLORS.title} size={18} name="menu" />
            </View>
          )}
          size={25}
          onPress={() => navigation.openDrawer()}
        />
        <Text
          style={{
            ...FONTS.font,
            ...FONTS.fontBold,
            color: COLORS.title,
            flex: 1,
            bottom: 1,
            marginLeft: 5,
          }}
        >
          Home
        </Text>
        <IconButton
          icon={() => <FeatherIcon color={COLORS.title} size={20} name="search" />}
          size={25}
          onPress={() => navigation.navigate("Search")}
        />
        <IconButton
          icon={() => <FeatherIcon color={COLORS.title} size={20} name="heart" />}
          size={25}
          onPress={() => navigation.navigate("Wishlist")}
        />
        <IconButton
          onPress={() => navigation.navigate("Cart")}
          icon={() => (
            <View>
              <FeatherIcon color={COLORS.title} size={20} name="shopping-cart" />
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderRadius: 14,
                  backgroundColor: COLORS.primary,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: -4,
                  right: -6,
                }}
              >
                <Text style={{ ...FONTS.fontXs, fontSize: 10, color: COLORS.white }}>2</Text>
              </View>
            </View>
          )}
          size={25}
        />
      </View>
      <ScrollView>
        <Swiper
          autoplay={true}
          autoplayTimeout={6}
          height={"auto"}
          dotColor={"rgba(255,255,255,.3)"}
          activeDotColor={COLORS.white}
          paginationStyle={{ bottom: 10 }}
        >
          {bannerData.map((data, index) => {
            return (
              <View key={index}>
                <LinearGradient
                  colors={["transparent", "transparent", "rgba(0,0,0,.4)"]}
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: 1,
                  }}
                />
                <Image
                  style={{
                    width: "100%",
                    height: undefined,
                    aspectRatio: 250 / 100,
                  }}
                  source={data.image}
                />
              </View>
            );
          })}
        </Swiper>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          {categoryData.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "25%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    data.title === "More"
                      ? navigation.navigate("Categories")
                      : navigation.navigate("CategoryHome", {
                          title: data.title,
                        });
                    //navigation.navigate('Featured')
                  }}
                  style={{
                    alignItems: "center",
                    marginBottom: 18,
                  }}
                >
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 60,
                      backgroundColor: "#FFF1F6",
                      borderWidth: 1,
                      borderColor: "#FFD9E7",
                      marginBottom: 6,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {data.title === "More" ? (
                      <MaterialIcons color={COLORS.primary} size={40} name="more-horiz" />
                    ) : (
                      <Image
                        style={{
                          width: "100%",
                          height: 60,
                        }}
                        source={data.image}
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      ...FONTS.fontXs,
                      ...FONTS.fontBold,
                      color: COLORS.title,
                    }}
                  >
                    {data.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <ImageBackground
          source={bg1}
          style={{
            height: 60,
            marginTop: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 70,
              height: 60,
              marginLeft: 20,
              marginRight: "12%",
            }}
            source={offer}
          />
          <View style={{ paddingTop: 4 }}>
            <Text
              style={{
                ...FONTS.fontSm,
                ...FONTS.fontBold,
                color: COLORS.white,
              }}
            >
              Sale ends in
            </Text>
            <StopWatch />
          </View>
        </ImageBackground>

        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 18,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              color: COLORS.title,
              flex: 1,
            }}
          >
            Suggest for You
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Items", { type: "Fashion" })}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.fontSm, color: COLORS.title, marginRight: 2 }}>View all</Text>
            <FeatherIcon size={16} color={COLORS.title} name="chevron-right" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.borderColor,
            marginBottom: 25,
          }}
        >
          <ScrollView contentContainerStyle={{ paddingLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
            {SuggestData.map((data, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 150,
                    marginRight: 10,
                    marginBottom: 20,
                  }}
                >
                  <ProductCardStyle1
                    onPress={() => navigation.navigate("Items", { type: "Fashion" })}
                    image={data.image}
                    title={data.title}
                    price={data.price}
                    oldPrice={data.oldPrice}
                    offer={data.offer}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            {ProductData.map((data, index) => (
              <View key={index} style={{ flex: 1, paddingHorizontal: 5 }}>
                <ProductCardStyle2
                  onPress={() => navigation.navigate("Items", { type: data.type })}
                  image={data.image}
                  category={data.category}
                  title={data.title}
                />
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 18,
            paddingBottom: 10,
            borderTopWidth: 1,
            borderColor: COLORS.borderColor,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              color: COLORS.title,
              flex: 1,
            }}
          >
            Popular Items
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.fontSm, color: COLORS.title, marginRight: 2 }}>View all</Text>
            <FeatherIcon size={16} color={COLORS.title} name="chevron-right" />
          </TouchableOpacity>
        </View>
        {PopularItemsData.map((data, index) => (
          <ProductListItem
            onPress={() =>
              navigation.navigate("ProductDetail", {
                item: data,
                category: "Appliances",
              })
            }
            key={index}
            image={data.imagePath}
            title={data.title}
            desc={data.desc}
            price={data.price}
            oldPrice={data.oldPrice}
            offer={data.offer}
          />
        ))}

        <View
          style={{
            ...GlobalStyleSheet.container,
            backgroundColor: "#151423",
            marginTop: 15,
          }}
        >
          <View>
            <Text style={{ ...FONTS.h6, marginBottom: 5, color: COLORS.white }}>Top Selection</Text>
          </View>
          <View style={GlobalStyleSheet.row}>
            {TopSelectionData.map((data, index) => {
              return (
                <View key={index} style={GlobalStyleSheet.col50}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate("Items", { type: data.type })}
                    style={{
                      backgroundColor: COLORS.white,
                      marginBottom: 10,
                      borderRadius: 6,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: undefined,
                        aspectRatio: 100 / 100,
                      }}
                      source={data.image}
                    />
                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.font,
                          ...FONTS.fontBold,
                          color: COLORS.title,
                        }}
                      >
                        {data.title}
                      </Text>
                      <Text style={{ ...FONTS.fontSm, marginTop: 2 }}>{data.offer}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
