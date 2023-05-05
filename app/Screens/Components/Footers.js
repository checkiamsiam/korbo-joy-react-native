import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS } from '../../constants/theme';
import ListStyle1 from '../../components/list/ListStyle1';
import DropShadow from 'react-native-drop-shadow';

const Footers = (props) => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}
      >
        <Header title={'Footer styles'} titleLeft leftIcon={'back'} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <DropShadow
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.15,
                shadowRadius: 5,
              }}
            >
              <View style={GlobalStyleSheet.card}>
                <ListStyle1
                  onPress={() => props.navigation.navigate('TabStyle1')}
                  arrowRight
                  title={'Footer Style 1'}
                />
                <ListStyle1
                  onPress={() => props.navigation.navigate('TabStyle2')}
                  arrowRight
                  title={'Footer Style 2'}
                />
                <ListStyle1
                  onPress={() => props.navigation.navigate('TabStyle3')}
                  arrowRight
                  title={'Footer Style 3'}
                />
                <ListStyle1
                  onPress={() => props.navigation.navigate('TabStyle4')}
                  arrowRight
                  title={'Footer Style 4'}
                />
              </View>
            </DropShadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Footers;
