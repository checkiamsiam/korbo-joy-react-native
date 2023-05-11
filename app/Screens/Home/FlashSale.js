import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import ProductCardStyle1 from "../../components/ProductCardStyle1";
import { SuggestData } from "./DummyData";

const FlashSale = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
        {SuggestData.map((data, index) => {
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
                image={data.image}
                title={data.title}
                price={data.price}
                oldPrice={data.oldPrice}
                offer={data.offer}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FlashSale;
