import { Skeleton } from "@rneui/themed";
import React from "react";
import { ScrollView, View } from "react-native";
const VendorsSkeleton = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            gap: 10,
          }}
        >
          {Array(6)
            .fill(undefined)
            .map((data, index) => (
              <Skeleton key={index} width={100} height={130} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default VendorsSkeleton;
