import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import HomeBanner from "./HomeBanner";
import HomeHeader from "./HomeHeader";
import JustForYou from "./JustForYou";
import OurVendors from "./OurVendors";
import SectionHeader from "./SectionHeader";

const MainHome = ({ navigation }) => {
  const { COLORS } = useSelector((state) => state.theme);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <HomeHeader />
      <ScrollView>
        <Categories />
        <HomeBanner />
        <SectionHeader title="Our Vendors" />
        <OurVendors />
        <SectionHeader
          title="Flash Sale"
          action={true}
          actionTitle="View all"
          actionFunc={() =>
            navigation.navigate("Items", {
              type: "Flash Sale",
              key: {
                title: "Flash Sale",
              },
            })
          }
        />
        <FlashSale />
        <SectionHeader title="Just For You" />
        <JustForYou />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
