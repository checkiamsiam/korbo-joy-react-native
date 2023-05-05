import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const DeliveryMap = (props) => {
  return (
    <View style={{ height: 200 }}>
      <MapView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default DeliveryMap;
