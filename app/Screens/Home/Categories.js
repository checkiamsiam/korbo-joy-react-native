import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import CategoriesSkeleton from "../../components/skeletons/CategoriesSkeleton";
import { useGetCategoriesQuery } from "../../features/Categories/CategoriesApi";
import { selectHomeCategories } from "../../features/Categories/CategoriesSlice";
const Categories = () => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const { isLoading: categoriesLoading } = useGetCategoriesQuery(null, {
    pollingInterval: 60000,
  });

  const navigation = useNavigation();
  const homeCategories = useSelector(selectHomeCategories);

  return (
    <View style={{ marginTop: 20 }}>
      {!categoriesLoading ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {homeCategories.map((data, index) => {
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
                    data.name === "More"
                      ? navigation.navigate("Categories")
                      : navigation.navigate("CategoryHome", {
                          name: data.name,
                          categoryId: data.id,
                        });
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
                      backgroundColor: COLORS.primaryLight,
                      borderWidth: 1,
                      borderColor: COLORS.primary,
                      marginBottom: 6,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {data.name === "More" ? (
                      <MaterialIcons
                        color={COLORS.primary}
                        size={40}
                        name="more-horiz"
                      />
                    ) : (
                      <Image
                        style={{
                          width: "100%",
                          height: 60,
                        }}
                        source={{
                          uri: `${data.mobileicon}`,
                        }}
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
                    {data.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ) : (
        <CategoriesSkeleton />
      )}
    </View>
  );
};

export default Categories;
