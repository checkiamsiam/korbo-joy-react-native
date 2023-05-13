import { IMAGE_BASE } from "@env";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { COLORS, FONTS } from "../../constants/theme";
import { useGetCategoriesQuery } from "../../features/Categories/CategoriesApi";
const Categories = () => {
  const { isLoading: categoriesLoading  } = useGetCategoriesQuery();
  const navigation = useNavigation();
  const { homeCategories } = useSelector((state) => state.categories);
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
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
                {data.name === "More" ? (
                  <MaterialIcons color={COLORS.primary} size={40} name="more-horiz" />
                ) : (
                  <Image
                    style={{
                      width: "100%",
                      height: 60,
                    }}
                    source={{
                      uri: `${IMAGE_BASE}/${data.mobileicon}`,
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
  );
};

export default Categories;
