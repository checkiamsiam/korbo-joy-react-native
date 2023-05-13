import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import ProductItem from "../../components/ProductItem";

const Products = ({ pageData }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 5,
        }}
      >
        {pageData.map((data, index) => (
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
              imageSrc={data?.image}
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
    </View>
  );
};

export default Products;
