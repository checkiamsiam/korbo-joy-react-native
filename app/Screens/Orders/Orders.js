import React from 'react';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import AllCart from './AllCart';
import Canceled from './Canceled';
import Completed from './Completed';
import OnDelivery from './OnDelivery';

const renderScene = SceneMap({
  All: AllCart,
  OnDelivery: OnDelivery,
  Completed: Completed,
  Canceled: Canceled,
});

const Orders = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'All', title: 'All' },
    { key: 'OnDelivery', title: 'On Delivery' },
    { key: 'Completed', title: 'Completed' },
    { key: 'Canceled', title: 'Canceled' },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <Header
        titleLeft
        leftIcon={'back'}
        title={'Orders'}
        rightIcon={'more'}
        rightIcon2={'search'}
      />
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
            tabStyle={{ width: 120 }}
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

export default Orders;
