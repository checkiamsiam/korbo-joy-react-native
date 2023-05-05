import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import DropShadow from "react-native-drop-shadow";
import FeatherIcon from "react-native-vector-icons/Feather";
import Divider from "../../components/Dividers/Divider";
import DividerIcon from "../../components/Dividers/DividerIcon";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";

const DividerElements = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header titleLeft title={"Dividers"} leftIcon={"back"} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Simple Dividers
                  </Text>
                </View>
                <Divider />
                <Divider color={COLORS.danger} />
                <Divider color={COLORS.primary} />
                <Divider color={COLORS.secondary} />
                <Divider color={COLORS.info} />
                <Divider color={COLORS.title} />
              </View>
            </DropShadow>

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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Dashed Dividers
                  </Text>
                </View>
                <Divider dashed />
                <Divider dashed color={COLORS.danger} />
                <Divider dashed color={COLORS.primary} />
                <Divider dashed color={COLORS.secondary} />
                <Divider dashed color={COLORS.info} />
                <Divider dashed color={COLORS.title} />
              </View>
            </DropShadow>

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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Dividers with icon
                  </Text>
                </View>
                <DividerIcon icon={<FeatherIcon name={"x"} color={COLORS.text} size={18} />} />
                <DividerIcon color={COLORS.danger} icon={<FeatherIcon name={"alert-circle"} color={COLORS.danger} size={18} />} />
                <DividerIcon color={COLORS.primary} icon={<FeatherIcon name={"alert-triangle"} color={COLORS.primary} size={18} />} />
                <DividerIcon color={COLORS.secondary} icon={<FeatherIcon name={"sun"} color={COLORS.secondary} size={18} />} />
                <DividerIcon color={COLORS.info} icon={<FeatherIcon name={"truck"} color={COLORS.info} size={18} />} />
                <DividerIcon color={COLORS.title} icon={<FeatherIcon name={"settings"} color={COLORS.title} size={18} />} />
              </View>
            </DropShadow>

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
              <View style={GlobalStyleSheet.card}>
                <View style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      ...FONTS.h6,
                      lineHeight: 18,
                      marginBottom: 2,
                      color: COLORS.title,
                    }}
                  >
                    Dividers with icon
                  </Text>
                </View>
                <DividerIcon dashed icon={<FeatherIcon name={"x"} color={COLORS.text} size={18} />} />
                <DividerIcon dashed color={COLORS.danger} icon={<FeatherIcon name={"alert-circle"} color={COLORS.danger} size={18} />} />
                <DividerIcon dashed color={COLORS.primary} icon={<FeatherIcon name={"alert-triangle"} color={COLORS.primary} size={18} />} />
                <DividerIcon dashed color={COLORS.secondary} icon={<FeatherIcon name={"sun"} color={COLORS.secondary} size={18} />} />
                <DividerIcon dashed color={COLORS.info} icon={<FeatherIcon name={"truck"} color={COLORS.info} size={18} />} />
                <DividerIcon dashed color={COLORS.title} icon={<FeatherIcon name={"settings"} color={COLORS.title} size={18} />} />
              </View>
            </DropShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DividerElements;
