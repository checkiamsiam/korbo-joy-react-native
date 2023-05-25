import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import ItemCard from "../../components/ItemCard";
import ShopItem from "../../components/ShopItem";
import Header from "../../layout/Header";

const TopCollection = [
  {
    id: "1",
    image: require("../../assets/images/shop/pic1.png"),
    title: "Casual Maroon Outfits ",
    category: "CLOTHS",
    price: "$34.51",
    oldPrice: "$40.00",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "2",
    image: require("../../assets/images/shop/pic2.png"),
    title: "Casual Maroon Outfits ",
    category: "CLOTHS",
    price: "$34.51",
    oldPrice: "$40.00",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "3",
    image: require("../../assets/images/shop/pic3.png"),
    title: "Casual Maroon Outfits ",
    category: "CLOTHS",
    price: "$34.51",
    oldPrice: "$40.00",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "4",
    image: require("../../assets/images/shop/pic4.png"),
    title: "Casual Maroon Outfits ",
    category: "CLOTHS",
    price: "$34.51",
    oldPrice: "$40.00",
    rating: "4.5",
    isLike: false,
  },
];

const TrendingData = [
  {
    id: "1",
    image: require("../../assets/images/shop/pic5.png"),
    title: "Black Long Suits with White Stripes",
    category: "SUITS",
    price: "$28.4",
    oldPrice: "$170",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "2",
    image: require("../../assets/images/shop/pic6.png"),
    title: "Pink Summer Sweater with Flow",
    category: "SWEATER",
    price: "$83.4",
    oldPrice: "$170",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "3",
    image: require("../../assets/images/shop/pic5.png"),
    title: "Black Long Suits with White Stripes",
    category: "SUITS",
    price: "$28.4",
    oldPrice: "$170",
    rating: "4.5",
    isLike: false,
  },
  {
    id: "4",
    image: require("../../assets/images/shop/pic6.png"),
    title: "Pink Summer Sweater with Flow",
    category: "SWEATER",
    price: "$83.4",
    oldPrice: "$170",
    rating: "4.5",
    isLike: false,
  },
];

const Home = (props) => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector((state) => state.theme);
  const [productsData, setProductsData] = useState(TrendingData);
  const [productsData2, setProductsData2] = useState(TopCollection);

  const handleLike = (id) => {
    let temp = productsData.map((data, index) => {
      if (id === data.id) {
        return { ...data, isLike: !data.isLike };
      }
      return data;
    });
    setProductsData(temp);
  };

  const handleLike2 = (id) => {
    let temp = productsData2.map((data, index) => {
      if (id === data.id) {
        return { ...data, isLike: !data.isLike };
      }
      return data;
    });
    setProductsData2(temp);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
      <Header main={true} title={"Home"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={GlobalStyleSheet.container}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.h4, color: COLORS.secondary }}>Top Collections</Text>
              <Text style={{ ...FONTS.font }}>Based trending products</Text>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FeatherIcon name="search" color={COLORS.secondary} size={26} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          contentContainerStyle={{ paddingLeft: 15 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productsData2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ShopItem item={item} handleLike={handleLike2} />}
        />

        <View
          style={{
            ...GlobalStyleSheet.container,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h4, flex: 1, color: COLORS.secondary }}>On Trending</Text>
          <TouchableOpacity>
            <Text
              style={{
                ...FONTS.font,
                ...FONTS.fontBold,
                color: COLORS.primary,
              }}
            >
              View more
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 8,
            marginBottom: 15,
          }}
        >
          {productsData.map((data, index) => (
            <View
              key={index}
              style={{
                width: "50%",
                paddingHorizontal: 8,
              }}
            >
              <ItemCard
                id={data.id}
                isLike={data.isLike}
                handleLike={handleLike}
                title={data.title}
                image={data.image}
                price={data.price}
                oldPrice={data.oldPrice}
                rating={data.rating}
                category={data.category}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
