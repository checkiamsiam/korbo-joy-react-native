import { IMAGE_BASE } from "@env";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import VendorCard from "../../components/VendorCard";
import VendorsScreenSkeleton from "../../components/skeletons/VendorsScreenSkeleton";
import Header from "../../layout/Header";

const VendorsScreen = ({ navigation }) => {
  const { vendors } = useSelector((state) => state.vendor);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [limit, setLimit] = useState(8);
  const handleEndReach = () => {
    setLimit((state) => state + 2);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header backAction={() => navigation.navigate("Home")} titleLeft title={"All Vendors"} rightIcon2={"search"} leftIcon={"back"} />
      <ScrollView>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          {vendors ? (
            <FlatList
              data={vendors}
              onEndReached={handleEndReach}
              numColumns={3}
              keyExtractor={(item, i) => i}
              renderItem={({ item }) => (
                <View style={{ padding: 10 }}>
                  <VendorCard
                    onPress={() => navigation.navigate("Items", { type: "Vendors", key: { title: item.name, id: item.id } })}
                    imageUrl={`${IMAGE_BASE}/${item?.img}`}
                    title={item.name}
                  />
                </View>
              )}
            />
          ) : (
            <VendorsScreenSkeleton />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VendorsScreen;
