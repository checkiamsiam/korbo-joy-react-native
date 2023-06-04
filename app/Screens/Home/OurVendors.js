import { IMAGE_BASE } from "@env";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import VendorCard from "../../components/VendorCard";
import VendorsSkeleton from "../../components/skeletons/HomeVendorsSkeleton";
import { useGetVendorsQuery } from "../../features/VendorFeature/vendorApi";

const OurVendors = () => {
  const { isLoading } = useGetVendorsQuery();
  const navigation = useNavigation();
  const { vendors } = useSelector((state) => state.vendor);
  return (
    <View>
      {!isLoading ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            {vendors.map((data, index) => (
              <View key={index} style={{ flex: 1, paddingHorizontal: 5 }}>
                <VendorCard
                  onPress={() => navigation.navigate("Items", { type: "Vendors", key: { title: data.name, id: data.id } })}
                  imageUrl={`${IMAGE_BASE}/${data?.img}`}
                  title={data.name}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <VendorsSkeleton />
      )}
    </View>
  );
};

export default OurVendors;
