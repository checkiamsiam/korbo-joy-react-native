import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import DefaultPagination from '../../components/Paginations/DefaultPagination';
import RoundedPagination from '../../components/Paginations/RoundedPagination';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';

const Paginations = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor , paddingTop: StatusBar.currentHeight }}
      >
        <Header title={'Paginations'} titleLeft leftIcon={'back'} />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.15,
              shadowRadius: 5,
            }}
          >
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Default Pagination
                  </Text>
                </View>

                <DefaultPagination />
              </View>
              </View>

            <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.15,
              shadowRadius: 5,
            }}
          >
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Rounded Pagination
                  </Text>
                </View>

                <RoundedPagination />
              </View>
              </View>

            <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.15,
              shadowRadius: 5,
            }}
          >
              <View style={GlobalStyleSheet.card}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingBottom: 8,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ ...FONTS.h6, color: COLORS.title }}>
                    Pagination Sizes
                  </Text>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <DefaultPagination paginationLg />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <DefaultPagination />
                </View>
                <View style={{ marginBottom: 15 }}>
                  <DefaultPagination paginationSm />
                </View>
              </View>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Paginations;
