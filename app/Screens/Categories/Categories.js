import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import mobile from '../../assets/images/category/mobile.png';
import electronics from '../../assets/images/category/electronics.png';
import fashion from '../../assets/images/category/fashion.png';
import furniture from '../../assets/images/category/furniture.png';
import grocery from '../../assets/images/category/grocery.png';
import appliances from '../../assets/images/category/appliances.png';
import toys from '../../assets/images/category/toys.png';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import pic1 from '../../assets/images/featured/pic1.png';
import pic2 from '../../assets/images/featured/pic2.png';
import pic3 from '../../assets/images/featured/pic3.png';
import pic4 from '../../assets/images/featured/pic4.png';
import FeaturedCard from '../../components/FeaturedCard';

const categoryData = [
  {
    image: mobile,
    title: 'Mobiles',
  },
  {
    image: electronics,
    title: 'Electronics',
  },
  {
    image: fashion,
    title: 'Fashion',
  },
  {
    image: furniture,
    title: 'Furniture',
  },
  {
    image: grocery,
    title: 'Grocery',
  },
  {
    image: appliances,
    title: 'Appliances',
  },
  {
    image: toys,
    title: 'Books,Toys',
  },
];
const FeaturedData = [
  {
    image: pic1,
    title: 'Cassual',
  },
  {
    image: pic2,
    title: 'Boyfriend',
  },
  {
    image: pic3,
    title: 'Trendy',
  },
  {
    image: pic4,
    title: 'Stylish',
  },
];

const Categories = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <Header
        backAction={() => navigation.navigate('Home')}
        titleLeft
        title={'All Categories'}
        rightIcon2={'search'}
        leftIcon={'back'}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          {categoryData.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CategoryHome', { title: data.title })
                  }
                  style={{
                    alignItems: 'center',
                    marginBottom: 18,
                  }}
                >
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 60,
                      backgroundColor: '#FFF1F6',
                      borderWidth: 1,
                      borderColor: '#FFD9E7',
                      marginBottom: 6,
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      style={{
                        width: '100%',
                        height: 60,
                      }}
                      source={data.image}
                    />
                  </View>
                  <Text
                    style={{
                      ...FONTS.fontXs,
                      ...FONTS.fontBold,
                      color: COLORS.title,
                    }}
                  >
                    {data.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View
          style={{
            ...GlobalStyleSheet.container,
            borderTopWidth: 1,
            borderTopColor: COLORS.borderColor,
          }}
        >
          <Text style={{ ...FONTS.h6, marginBottom: 10 }}>Featured</Text>
          {FeaturedData.map((data, index) => {
            return (
              <FeaturedCard key={index} image={data.image} title={data.title} />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
