import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONTS } from "../../constants/theme";
import { categoryData } from "./DummyData";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
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
  );
};

export default Categories;
