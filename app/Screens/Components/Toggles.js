import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ToggleStyle1 from "../../components/Toggles/ToggleStyle1";
import ToggleStyle2 from "../../components/Toggles/ToggleStyle2";
import ToggleStyle3 from "../../components/Toggles/ToggleStyle3";
import ToggleStyle4 from "../../components/Toggles/ToggleStyle4";
import Header from "../../layout/Header";

const Toggles = () => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector(
    (state) => state.theme
  );
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Header title={"Toggles"} titleLeft leftIcon={"back"} />
        <ScrollView>
          <View style={{ ...GlobalStyleSheet.container }}>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={{ ...GlobalStyleSheet.card }}>
                <View style={{ paddingBottom: 10, marginBottom: 10 }}>
                  <Text style={{ ...FONTS.h6 }}>Toggle Mobile Styled</Text>
                  <Text style={{ ...FONTS.font }}>
                    These toggles are designed to look like mobile toggles. They
                    can have any color or icon you wish.
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
                  >
                    Toggle Style 1
                  </Text>
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
                  >
                    Toggle Style 2
                  </Text>

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
                  >
                    Toggle Style 3
                  </Text>
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
                  >
                    Toggle Style 4
                  </Text>
                  <ToggleStyle4 />

                  <ToggleStyle4 />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Toggles;
