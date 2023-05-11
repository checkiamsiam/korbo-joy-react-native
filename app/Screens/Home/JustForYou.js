import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { ProductData2 } from "./DummyData";

const JustForYou = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 5,
      }}
    >
      {ProductData2.map((data, index) => (
        <View key={index} style={{ width: "50%", paddingHorizontal: 5 }}>
          <ProductItem
            onPress={() =>
              navigation.navigate("ProductDetail", {
                item: data,
                category: "Fashion",
              })
            }
            imgLength={true}
            id={data?.id}
            image={data?.imagePath}
            title={data?.title}
            desc={data?.desc}
            status={data?.status}
            price={data?.price}
            oldPrice={data?.oldPrice}
            rating={data?.rating}
            reviews={data?.reviews}
            isLike={data?.isLike}
          />
        </View>
      ))}
    </View>
  );
};

export default JustForYou;
