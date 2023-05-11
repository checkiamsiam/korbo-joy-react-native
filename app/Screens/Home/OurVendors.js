import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import ProductCardStyle2 from "../../components/ProductCardStyle2";
import { ProductData } from "./DummyData";

const OurVendors = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          {ProductData.map((data, index) => (
            <View key={index} style={{ flex: 1, paddingHorizontal: 5 }}>
              <ProductCardStyle2
                onPress={() => navigation.navigate("Items", { type: data.type })}
                image={data.image}
                category={data.category}
                title={data.title}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OurVendors;
