import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import { COLORS } from "../../constants/theme";
import { useGetJustForYouPdQuery } from "../../features/JustForYou/justForYouApi";

const JustForYou = () => {
  const [limit, setLimit] = useState(2);
  const { isLoading } = useGetJustForYouPdQuery(limit);
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.justForYou);
  const handleEndReach = () => {
    setLimit((state) => state + 2);
  };
  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 5 }}>
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
                      category: "Fashion",
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 25 }}>
        <ActivityIndicator animating={true} color={COLORS.primary} />
      </View>
    </View>
  );
};

export default JustForYou;
