import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ClassicTable = () => {
  const { COLORS, FONTS, GlobalStyleSheet } = useSelector((state) => state.theme);
  const styles = createStyles(COLORS, FONTS);
  const TableData = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 20,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 20,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 20,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 20,
    },
  ];

  return (
    <>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 5, // This is required for Android
        }}
      >
        <View style={{ ...GlobalStyleSheet.card, padding: 5 }}>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
            }}
          >
            <Text style={{ ...styles.theadItem, flex: 0.6, paddingLeft: 15 }}>Name</Text>
            <Text style={{ ...styles.theadItem }}>Email</Text>
            <Text
              style={{
                ...styles.theadItem,
                flex: 0.5,
                textAlign: "right",
                paddingRight: 15,
              }}
            >
              Age
            </Text>
          </View>
          {TableData.map((data, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  flexDirection: "row",
                }}
              >
                <Text style={{ ...styles.tbodyItem, flex: 0.6, paddingLeft: 15 }}>{data.name}</Text>
                <Text numberOfLines={1} style={{ ...styles.tbodyItem }}>
                  {data.email}
                </Text>
                <Text
                  style={{
                    ...styles.tbodyItem,
                    flex: 0.5,
                    textAlign: "right",
                    paddingRight: 15,
                  }}
                >
                  {data.age}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

const createStyles = (COLORS, FONTS) => {
  return StyleSheet.create({
    theadItem: {
      flex: 1,
      alignSelf: "stretch",
      paddingHorizontal: 10,
      paddingVertical: 12,
      ...FONTS.font,
    },
    tbodyItem: {
      flex: 1,
      alignSelf: "stretch",
      paddingHorizontal: 10,
      paddingVertical: 12,
      ...FONTS.font,
      ...FONTS.fontBold,
      color: COLORS.title,
    },
  });
};

export default ClassicTable;
