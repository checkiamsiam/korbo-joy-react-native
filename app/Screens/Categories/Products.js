import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ProductItem from "../../components/ProductItem";
import { COLORS } from "../../constants/theme";

const Products = ({ products: pData }) => {
  const [limit, setLimit] = useState(8);
  const navigation = useNavigation();
  const products = pData?.slice(0, limit);
  const handleEndReach = () => {
    setLimit((state) => state + 4);
  };
  return (
    <View>
      {pData?.length > 0 ? (
        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 5 }}>
            <FlatList
              data={products}
              onEndReached={handleEndReach}
              numColumns={2}
              keyExtractor={(item, i) => i}
              renderItem={({ item }) => (
                <View style={{ width: "50%", paddingHorizontal: 5 }}>
                  <ProductItem
                    onPress={() =>
                      navigation.navigate("ProductDetail", {
                        item: item,
                      })
                    }
                    imgLength={true}
                    id={item.id}
                    imageSrc={JSON.parse(item.img)[0]}
                    title={item.name}
                    desc={item?.desc}
                    status={item.status}
                    price={item.price}
                    oldPrice={item.salesPrice}
                    rating={item?.rating}
                    reviews={item?.reviews}
                    isLike={item?.isLike}
                  />
                </View>
              )}
            />
          </View>
          {pData.length >= limit && (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 25 }}>
              <ActivityIndicator animating={true} color={COLORS.primary} />
            </View>
          )}
        </View>
      ) : (
        <Text style={{ textAlign: "center" }}>No Product Found</Text>
      )}
    </View>
  );
};

export default Products;
