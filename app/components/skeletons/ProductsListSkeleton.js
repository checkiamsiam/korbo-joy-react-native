import { Skeleton } from "@rneui/themed";
import React from "react";
import { FlatList, View } from "react-native";
const ProductsListSkeleton = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={Array(6).fill(undefined)}
        numColumns={2}
        keyExtractor={(item, i) => i}
        renderItem={({ item }) => (
          <View style={{ width: "50%", paddingHorizontal: 5, paddingVertical: 5 }}>
            <Skeleton width={175} height={290} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductsListSkeleton;
