import { Skeleton } from "@rneui/themed";
import React from "react";
import { FlatList, View } from "react-native";

const VendorsScreenSkeleton = () => {
  return (
    <FlatList
      data={new Array(15).fill(0)}
      numColumns={3}
      keyExtractor={(item, i) => i}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Skeleton width={100} height={130} />
        </View>
      )}
    />
  );
};

export default VendorsScreenSkeleton;
