import { IMAGE_BASE } from "@env";
import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import pic1 from "../../assets/images/featured/pic1.png";
import pic2 from "../../assets/images/featured/pic2.png";
import pic3 from "../../assets/images/featured/pic3.png";
import pic4 from "../../assets/images/featured/pic4.png";
import Header from "../../layout/Header";

const FeaturedData = [
  {
    image: pic1,
    title: "Cassual",
  },
  {
    image: pic2,
    title: "Boyfriend",
  },
  {
    image: pic3,
    title: "Trendy",
  },
  {
    image: pic4,
    title: "Stylish",
  },
];

const Categories = ({ navigation }) => {
  const { allCategories } = useSelector((state) => state.categories);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header backAction={() => navigation.navigate("Home")} titleLeft title={"All Categories"} rightIcon2={"search"} leftIcon={"back"} />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          {allCategories.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  width: "25%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("CategoryHome", { name: data.name, categoryId: data.id })}
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
                      backgroundColor: COLORS.primaryLight,
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      marginBottom: 6,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: 60,
                      }}
                      source={{
                        uri: `${IMAGE_BASE}/${data.mobileicon}`,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      ...FONTS.fontXs,
                      ...FONTS.fontBold,
                      color: COLORS.title,
                    }}
                  >
                    {data.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        {/* <View
          style={{
            ...GlobalStyleSheet.container,
            borderTopWidth: 1,
            borderTopColor: COLORS.borderColor,
          }}
        >
          <Text style={{ ...FONTS.h6, marginBottom: 10 }}>Featured</Text>
          {FeaturedData.map((data, index) => {
            return <FeaturedCard key={index} image={data.image} title={data.title} />;
          })}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
