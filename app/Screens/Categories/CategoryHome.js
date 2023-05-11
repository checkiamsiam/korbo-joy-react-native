import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import AppliancesData from "../../JSON/Appliances.json";
import BookToysData from "../../JSON/BooksToys.json";
import ElectronicsData from "../../JSON/Electronics.json";
import FashionData from "../../JSON/Fashion.json";
import FurnitureData from "../../JSON/Furniture.json";
import GroceryData from "../../JSON/Grocery.json";
import MobilesData from "../../JSON/Mobiles.json";
import { COLORS, FONTS } from "../../constants/theme";
import CategoryHeader from "./CategoryHeader";
import Products from "./Products";

const CategoryHome = ({ navigation, route }) => {
  const { title } = route.params;

  const pageData =
    title === "Fashion"
      ? FashionData
      : title === "Mobiles"
      ? MobilesData
      : title === "Electronics"
      ? ElectronicsData
      : title === "Furniture"
      ? FurnitureData
      : title === "Grocery"
      ? GroceryData
      : title === "Appliances"
      ? AppliancesData
      : title === "Books,Toys"
      ? BookToysData
      : [];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <CategoryHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View>
          {pageData.categories && (
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.borderColor,
                paddingBottom: 5,
              }}
            >
              {pageData.categories.map((d2, i2) => {
                return (
                  <View
                    key={i2}
                    style={{
                      width: "25%",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Items", { type: title })}
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
                        <Image
                          style={{
                            width: "100%",
                            height: 60,
                          }}
                          source={{ uri: d2.image }}
                        />
                      </View>
                      <Text
                        style={{
                          ...FONTS.fontXs,
                          ...FONTS.fontBold,
                          color: COLORS.title,
                          textAlign: "center",
                        }}
                      >
                        {d2.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
            paddingTop: 10,
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
            {title} Products
          </Text>
        </View>
        <Products pageData={pageData.items} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryHome;
