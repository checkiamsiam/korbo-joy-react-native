import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const RoundedPagination = () => {
  const [active, setActive] = useState(2);
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={[styles.pagItem, { backgroundColor: COLORS.white }]}>
          <FontAwesome name={"angle-left"} size={20} color={COLORS.text} />
        </TouchableOpacity>
        {[1, 2, 3, 4].map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() => setActive(data)}
              key={index}
              style={[styles.pagItem, { backgroundColor: COLORS.white }, data === active && { backgroundColor: COLORS.primary }]}
            >
              <Text style={[{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.text }, data === active && { color: COLORS.white }]}>{data}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={[styles.pagItem, { backgroundColor: COLORS.white }]}>
          <FontAwesome name={"angle-right"} size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pagItem: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default RoundedPagination;
