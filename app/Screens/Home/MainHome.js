import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants/theme";
import { useGetUserCartQuery } from "../../features/Cart/CartApi";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import HomeBanner from "./HomeBanner";
import HomeHeader from "./HomeHeader";
import JustForYou from "./JustForYou";
import OurVendors from "./OurVendors";
import SectionHeader from "./SectionHeader";

const MainHome = ({ navigation }) => {
  const { user, token } = useSelector((state) => state.auth);
  const {} = useGetUserCartQuery(user?.id, { skip: !token });
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

        <SectionHeader title="Flash Sale" action={true} actionTitle="View all" actionFunc={() => navigation.navigate("Items", { type: "Fashion" })} />

        <FlashSale />
        <SectionHeader title="Just For You" />
        <JustForYou />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainHome;
