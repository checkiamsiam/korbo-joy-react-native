import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import pic1 from "../../assets/images/featured/pic1.png";
import pic2 from "../../assets/images/featured/pic2.png";
import pic3 from "../../assets/images/featured/pic3.png";
import pic4 from "../../assets/images/featured/pic4.png";
import FeaturedCard from "../../components/FeaturedCard";
import Header from "../../layout/Header";

const FeaturedData = [
  {
    image: pic1,
    title: "Cassual",
  },
  {
    image: pic2,
    title: "Boyfriend",
  },
  {
    image: pic3,
    title: "Trendy",
  },
  {
    image: pic4,
    title: "Stylish",
  },
];

const Featured = () => {
  const { COLORS, GlobalStyleSheet } = useSelector((state) => state.theme);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
      <Header leftIcon={"back"} title={"Featured"} rightIcon={"more"} />
      <ScrollView>
        <View style={GlobalStyleSheet.container}>
          {FeaturedData.map((data, index) => {
            return <FeaturedCard key={index} image={data.image} title={data.title} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Featured;
