import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import ItemList from "../../components/ItemList";
import { useGetFlashSalePdQuery } from "../../features/FlashSale/FlashSaleApi";

const FlashSaleItems = (props) => {
  const { isLoading } = useGetFlashSalePdQuery();
  const { GlobalStyleSheet } = useSelector((state) => state.theme);
  const { products } = useSelector((state) => state.flashSale);

  return (
    <View>
      <ScrollView>
        <View style={[GlobalStyleSheet.container, { paddingTop: 20 }]}>
          {products.map((data, index) => {
            return (
              <ItemList
                key={index}
                id={data.id}
                title={data.name}
                price={data.price}
                oldPrice={data.salesPrice}
                offer={data.offer}
                image={JSON.parse(data.img)[0]}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FlashSaleItems;
