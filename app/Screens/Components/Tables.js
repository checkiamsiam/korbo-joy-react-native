import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import ClassicTable from '../../components/Tables/ClassicTable';
import TableOddEven from '../../components/Tables/TableOddEven';
import { COLORS } from '../../constants/theme';

const Tables = () => {
  return (
    <>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}
      >
        <Header title={'Tables'} titleLeft leftIcon={'back'} />
        <ScrollView>
          <View style={{ ...GlobalStyleSheet.container }}>
            <ClassicTable />
            <TableOddEven />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Tables;
