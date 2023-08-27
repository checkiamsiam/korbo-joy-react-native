import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import PricingStyle1 from "../../components/Pricing/PricingStyle1";
import PricingStyle2 from "../../components/Pricing/PricingStyle2";
import PricingStyle3 from "../../components/Pricing/PricingStyle3";
import Header from "../../layout/Header";

const Pricings = () => {
  const { COLORS, GlobalStyleSheet } = useSelector((state) => state.theme);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.backgroundColor,
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <Header title={"Pricings"} titleLeft leftIcon={"back"} />
        <ScrollView>
          <View
            style={{
              ...GlobalStyleSheet.container,
              alignItems: "center",
              paddingVertical: 30,
            }}
          >
            <View style={{ marginBottom: 20 }}>
              <PricingStyle1 />
            </View>
            <View style={{ marginBottom: 30 }}>
              <PricingStyle2 />
            </View>
            <View style={{ marginBottom: 20 }}>
              <PricingStyle3 />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pricings;
