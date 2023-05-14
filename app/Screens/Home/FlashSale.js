import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import ProductCardStyle1 from "../../components/ProductCardStyle1";
import { useGetFlashSalePdQuery } from "../../features/FlashSale/FlashSaleApi";

const FlashSale = () => {
  const { isLoading } = useGetFlashSalePdQuery();
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.flashSale);
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
        {products.map((data, index) => {
          return (
            <View
              key={index}
              style={{
                width: 150,
                marginRight: 10,
              }}
            >
              <ProductCardStyle1
                onPress={() => navigation.navigate("Items", { type: "Fashion" })}
                image={JSON.parse(data.img)[0]}
                title={data.name}
                price={data.price}
                oldPrice={data?.salesPrice}
                offer={data?.offerAmount}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FlashSale;