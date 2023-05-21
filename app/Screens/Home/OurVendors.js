import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import VendorCard from "../../components/VendorCard";
import VendorsSkeleton from "./skeletons/VendorsSkeleton";

const OurVendors = () => {
  const navigation = useNavigation();
  const { vendors } = useSelector((state) => state.vendor);
  return (
    <View>
      {vendors ? (
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
                  onPress={() => navigation.navigate("Items", { type: data.type })}
                  image={data.image}
                  category={data.category}
                  title={data.title}
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
