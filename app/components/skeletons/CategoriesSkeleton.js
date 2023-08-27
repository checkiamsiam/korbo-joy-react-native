import { Skeleton } from "@rneui/themed";
import React from "react";
import { View } from "react-native";

const CategoriesSkeleton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
      }}
    >
      {Array(8)
        .fill(undefined)
        .map((j, i) => {
          return (
            <View
              key={i}
              style={{
                width: "25%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 28,
                }}
              >
                <Skeleton circle={true} width={60} height={60} />
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default CategoriesSkeleton;
