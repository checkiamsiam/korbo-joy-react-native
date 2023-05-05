import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import ToggleStyle1 from "../../components/Toggles/ToggleStyle1";
import ToggleStyle2 from "../../components/Toggles/ToggleStyle2";
import ToggleStyle3 from "../../components/Toggles/ToggleStyle3";
import ToggleStyle4 from "../../components/Toggles/ToggleStyle4";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";
import { StatusBar } from "react-native";

const Toggles = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor , paddingTop: StatusBar.currentHeight }}>
        <Header title={"Toggles"} titleLeft leftIcon={"back"} />
        <ScrollView>
          <View style={{ ...GlobalStyleSheet.container }}>
            <DropShadow
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={{ ...GlobalStyleSheet.card }}>
                <View style={{ paddingBottom: 10, marginBottom: 10 }}>
                  <Text style={{ ...FONTS.h6 }}>Toggle Mobile Styled</Text>
                  <Text style={{ ...FONTS.font }}>
                    These toggles are designed to look like mobile toggles. They can have any color or icon you wish.
                  </Text>
                </View>

                <View
                  style={{
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.borderColor,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.title,
                      ...FONTS.fontBold,
                    }}
                  />
                  Toggle Style 1
                  <ToggleStyle1 />
                </View>
                <View
                  style={{
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.borderColor,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.title,
                      ...FONTS.fontBold,
                    }}
                  />

                  <ToggleStyle2 />

                  <ToggleStyle2 />
                </View>
                <View
                  style={{
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.borderColor,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.title,
                      ...FONTS.fontBold,
                    }}
                  />
                  Toggle Style 3
                  <ToggleStyle3 />
                </View>
                <View
                  style={{
                    paddingVertical: 14,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.borderColor,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.font,
                      color: COLORS.title,
                      ...FONTS.fontBold,
                    }}
                  />

                  <ToggleStyle4 />

                  <ToggleStyle4 />
                </View>
              </View>
            </DropShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Toggles;
