import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const SubCategoriesSection = ({ SubCategories }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {SubCategories.map((d2, i2) => {
          return (
            <View
              key={i2}
              style={{
                paddingLeft: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Items", {
                    type: "Sub Category",
                    key: {
                      title: d2.name,
                      id: d2.id,
                    },
                  })
                }
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
                    source={{ uri: `${d2.mobileicon}` }}
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
      </ScrollView>
    </View>
  );
};

export default SubCategoriesSection;
