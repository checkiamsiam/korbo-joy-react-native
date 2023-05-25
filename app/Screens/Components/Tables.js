import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { useSelector } from "react-redux";
import ClassicTable from "../../components/Tables/ClassicTable";
import TableOddEven from "../../components/Tables/TableOddEven";
import Header from "../../layout/Header";

const Tables = () => {
  const { COLORS, GlobalStyleSheet } = useSelector((state) => state.theme);
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor, paddingTop: StatusBar.currentHeight }}>
        <Header title={"Tables"} titleLeft leftIcon={"back"} />
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
