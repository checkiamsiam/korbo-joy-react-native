import { IMAGE_BASE } from "@env";
import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS } from "../../constants/theme";
import { useGetCategoryProductQuery } from "../../features/Categories/CategoriesApi";
import CategoryHeader from "./CategoryHeader";
import Products from "./Products";

const CategoryHome = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { name, categoryId } = route.params;
  const { allCategories } = useSelector((state) => state.categories);
  const thisCategory = allCategories.find((c) => c.id === categoryId);
  const {} = useGetCategoryProductQuery(categoryId, { refetchOnMountOrArgChange: true });

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
          {thisCategory && (
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
              {thisCategory?.categorySubs.map((d2, i2) => {
                return (
                  <View
                    key={i2}
                    style={{
                      width: "25%",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Items", { type: name })}
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
                          source={{ uri: `${IMAGE_BASE}/${d2.mobileicon}` }}
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
                        {d2.name}
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
            {name} Products
          </Text>
        </View>
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryHome;
