import React from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchBar from '../../components/SearchBar';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import BestItems from './BestItems';
import PopularItems from './PopularItems';
import SaleItems from './SaleItems';
import { StatusBar } from 'react-native';

const renderScene = SceneMap({
  Popular: PopularItems,
  BestProducts: BestItems,
  FlashSale: SaleItems,
});

const Products = (props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Popular', title: 'Popular' },
    { key: 'BestProducts', title: 'Best Products' },
    { key: 'FlashSale', title: 'Flash Sale' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
      <Header
        leftIcon={'back'}
        title={'Products'}
        rightIcon={'more'}
        borderNone
      />
      <View
        style={[
          GlobalStyleSheet.container,
          { paddingTop: 5, paddingBottom: 10 },
        ]}
      >
        <SearchBar />
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor={COLORS.title}
            indicatorStyle={{ backgroundColor: COLORS.primary }}
            labelStyle={{
              ...FONTS.fontLg,
              ...FONTS.fontBold,
              textTransform: 'capitalize',
            }}
            scrollEnabled={true}
            style={{
              backgroundColor: 'transparent',
              elevation: 0,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.borderColor,
            }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default Products;
