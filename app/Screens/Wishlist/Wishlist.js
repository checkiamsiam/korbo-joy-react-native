import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Snackbar } from "react-native-paper";
import ItemCard from "../../components/ItemCard";
import { COLORS } from "../../constants/theme";
import Header from "../../layout/Header";
import { StatusBar } from "react-native";

const WishlistData = [
  {
    id: "1",
    image: "https://appzilla.dexignzone.com/wedo/mobiles/products/item2.png",
    title: "Xiaomi 11 Lite NE 5G 128 GB (Jazz Blue, 8 GB RAM)",
    category: "Mobiles",
    price: "$240.50",
    oldPrice: "$350",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "2",
    image: "https://appzilla.dexignzone.com/wedo/electronics/products/item1.png",
    title: "Apple MacBook Air 2023 (M1, 13.3 Inch, 8GB, 256GB, macOS Big Sur, Space Grey)",
    category: "Electronics",
    price: "$1259.85",
    oldPrice: "$1500",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "3",
    image: "https://appzilla.dexignzone.com/wedo/electronics/products/item2.png",
    title: "ASUS TUF Gaming A17 with 90Whr Battery Ryzen 5 Hexa Core AMD R5-4600H",
    category: "Electronics",
    price: "$1059",
    oldPrice: "$1240",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "4",
    image: "https://appzilla.dexignzone.com/wedo/fashion/products/item1.jpg",
    title: "Pink Summer Sweater with Flow",
    category: "Fashion",
    price: "$83.4",
    oldPrice: "$170",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "5",
    image: "https://appzilla.dexignzone.com/wedo/furniture/products/item3.png",
    title: "Royaloak Tivoli Italian King Size Bed with Hydraulic and Headboard Storage",
    category: "Furniture",
    price: "$1150.5",
    oldPrice: "$1350",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "6",
    image: "https://appzilla.dexignzone.com/wedo/furniture/products/item4.png",
    title: "Smart Luxe with SnowTec Cooling Technology",
    category: "Furniture",
    price: "$1325.4",
    oldPrice: "$1500",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "7",
    image: "https://appzilla.dexignzone.com/wedo/mobiles/products/item4.png",
    title: "Apple iPhone 14 Pro Max 128GB Deep Gold",
    category: "Mobiles",
    price: "$1200.5",
    oldPrice: "$1400",
    rating: "4.5",
    isLike: true,
  },
  {
    id: "8",
    image: "https://appzilla.dexignzone.com/wedo/electronics/products/item5.png",
    title: "JBL Tune 710 JBLT710BTBLK Bluetooth Headset with Mic",
    category: "Electronics",
    price: "$260.4",
    oldPrice: "$500",
    rating: "4.5",
    isLike: true,
  },
];

const Wishlist = () => {
  const [productsData, setProductsData] = useState(WishlistData);
  const [itemView, setItemView] = useState("grid");
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [snackText, setSnackText] = useState("Loading...");

  const handleLike = (id) => {
    let temp = productsData.map((data, index) => {
      if (id === data.id) {
        if (data.isLike) {
          setSnackText("Item removed to Favourite.");
        } else {
          setSnackText("Item add to Favourite.");
        }
        setIsSnackbar(true);
        return { ...data, isLike: !data.isLike };
      }
      return data;
    });
    setProductsData(temp);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header leftIcon={"back"} title={"Wishlist"} rightIcon={"grid"} itemView={itemView} setItemView={setItemView} />

      <ScrollView
        contentContainerStyle={{
          paddingTop: 18,
        }}
      >
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
                width: itemView === "list" ? "100%" : "50%",
                paddingHorizontal: 10,
                marginBottom: 8,
              }}
            >
              <ItemCard
                listView={itemView === "list" ? true : false}
                id={data.id}
                isLike={data.isLike}
                handleLike={handleLike}
                title={data.title}
                imageSrc={data.image}
                price={data.price}
                oldPrice={data.oldPrice}
                shopBtn={false}
                category={data.category}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Snackbar
        visible={isSnackbar}
        duration={3000}
        onDismiss={() => setIsSnackbar(false)}
        action={{
          label: "Undo",
          onPress: () => {
            // do something
          },
        }}
      >
        {snackText}
      </Snackbar>
    </SafeAreaView>
  );
};

export default Wishlist;
