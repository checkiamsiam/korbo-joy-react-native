import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import ProductCardStyle1 from "../../components/ProductCardStyle1";
import FlashSaleSkeleton from "../../components/skeletons/FlashSaleSkeleton";
import { useGetFlashSalePdQuery } from "../../features/FlashSale/FlashSaleApi";

const FlashSale = () => {
  const { isLoading } = useGetFlashSalePdQuery(null, {
    pollingInterval: 60000,
  });
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.flashSale);
  return (
    <View>
      {!isLoading ? (
        <ScrollView
          contentContainerStyle={{ paddingLeft: 15 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {products.slice(0, 4).map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 150,
                  marginRight: 10,
                }}
              >
                <ProductCardStyle1
                  onPress={() =>
                    navigation.navigate("ProductDetail", {
                      item: data,
                    })
                  }
                  image={data.img}
                  title={data.name}
                  price={data.price}
                  oldPrice={data?.salesPrice}
                  offer={data?.offerAmount}
                />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <FlashSaleSkeleton />
      )}
    </View>
  );
};

export default FlashSale;
