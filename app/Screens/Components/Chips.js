import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Chip from "../../components/Chip";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS, IMAGES } from "../../constants/theme";
import Header from "../../layout/Header";

const Chips = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header titleLeft title={"Chips"} leftIcon={"back"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Light Mode
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Chip
                    style={{ marginRight: 8 }}
                    color={COLORS.success}
                    icon={<FeatherIcon name="check" size={18} color={COLORS.white} />}
                    title={"All good"}
                  />
                  <Chip
                    style={{ marginRight: 8 }}
                    color={COLORS.danger}
                    icon={<FeatherIcon name="x" size={18} color={COLORS.white} />}
                    title={"Error"}
                  />
                  <Chip style={{ marginRight: 8 }} image={IMAGES.user} title={"Profile"} />
                </View>
              </View>
            </View>

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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Dark Mode
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Chip
                    darkMode
                    style={{ marginRight: 8 }}
                    color={COLORS.success}
                    icon={<FeatherIcon name="check" dark size={18} color={COLORS.white} />}
                    title={"All good"}
                  />
                  <Chip
                    darkMode
                    style={{ marginRight: 8 }}
                    color={COLORS.danger}
                    icon={<FeatherIcon name="x" size={18} color={COLORS.white} />}
                    title={"Error"}
                  />
                  <Chip darkMode style={{ marginRight: 8 }} image={IMAGES.user} title={"Profile"} />
                </View>
              </View>
            </View>

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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 15 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Diffrent Sizes
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Chip style={{ marginRight: 8 }} chipLarge icon={<FeatherIcon name="settings" size={16} color={COLORS.white} />} title={"Large"} />
                  <Chip style={{ marginRight: 8 }} icon={<FeatherIcon name="settings" size={16} color={COLORS.white} />} title={"Default"} />
                  <Chip style={{ marginRight: 8 }} chipSmall icon={<FeatherIcon name="settings" size={16} color={COLORS.white} />} title={"Small"} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   card: {
//     padding: 15,
//     borderRadius: SIZES.radius,
//     marginBottom: 15,
//     shadowColor: 'rgba(0,0,0,.6)',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,

//     elevation: 8,
//   },
// });

export default Chips;
