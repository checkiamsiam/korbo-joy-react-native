import { Skeleton } from "@rneui/themed";
import React from "react";
import { ScrollView, View } from "react-native";
const FlashSaleSkeleton = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingLeft: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Array(4)
          .fill(undefined)
          .map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 150,
                  marginRight: 10,
                }}
              >
                <Skeleton key={index} width={150} height={230} />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default FlashSaleSkeleton;
