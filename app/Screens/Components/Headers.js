import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import HeaderStyle1 from "../../components/Headers/HeaderStyle1";
import HeaderStyle2 from "../../components/Headers/HeaderStyle2";
import HeaderStyle3 from "../../components/Headers/HeaderStyle3";
import Header from "../../layout/Header";

const Headers = (props) => {
  const { colors } = useTheme();
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header title={"Header styles"} bgWhite leftIcon={"back"} />
        <ScrollView>
          <View style={{ paddingVertical: 30 }}>
            <View style={{ marginBottom: 25 }}>
              <HeaderStyle1 title={"Home"} />
            </View>
            <View style={{ marginBottom: 25 }}>
              <HeaderStyle2 title={"Home"} />
            </View>
            <View style={{ marginBottom: 25 }}>
              <View
                style={{
                  backgroundColor: colors.card,
                  shadowColor: "rgba(0,0,0,.6)",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <HeaderStyle3 />
              </View>
            </View>
            <View style={{ marginBottom: 25 }}>
              <Header titleLeft leftIcon={"back"} title={"Home"} rightIcon={"more"} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Headers;
