import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import ProductsListSkeleton from "../../components/skeletons/ProductsListSkeleton";
import { useGetJustForYouPdQuery } from "../../features/JustForYou/justForYouApi";

const JustForYou = () => {
  const { COLORS } = useSelector((state) => state.theme);
  const [limit, setLimit] = useState(8);
  const { isLoading } = useGetJustForYouPdQuery(limit, {
    pollingInterval: 60000,
  });
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.justForYou);
  const handleEndReach = () => {
    setLimit((state) => state + 2);
  };
  return (
    <View>
      {!isLoading ? (
        <View style={{ paddingHorizontal: 10 }}>
          {products.length > 0 && (
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
          )}
        </View>
      ) : (
        <ProductsListSkeleton />
      )}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 25 }}>
        <ActivityIndicator animating={true} color={COLORS.primary} />
      </View>
    </View>
  );
};

export default JustForYou;
