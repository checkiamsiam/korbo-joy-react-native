import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";

const SearchData = [
  {
    title: "boat earbuds",
  },
  {
    title: "mobile phones",
  },
  {
    title: "realme earphones",
  },
  {
    title: "vivo t1 5g",
  },
  {
    title: "washing machine",
  },
  {
    title: "Air conditioner",
  },
  {
    title: "refrigerator",
  },
  {
    title: "neckbands wireless",
  },
  {
    title: "home theatre",
  },
  {
    title: "boat earbuds",
  },
];

const Search = ({ navigation }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [search, setSearch] = React.useState("");
  const handleSearch = () => {
    if (search.length > 0) {
      //do search functionality here
      console.log(search);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: COLORS.borderColor,
        }}
      >
        <IconButton onPress={handleSearch} size={24} icon={() => <FeatherIcon color={COLORS.text} name="search" size={22} />} />
        <TextInput
          style={{
            ...FONTS.font,
            flex: 1,
            color: COLORS.title,
          }}
          onChange={(event) => setSearch(event.nativeEvent.text)}
          autoFocus={true}
          placeholder="Search here..."
          placeholderTextColor={COLORS.text}
          onSubmitEditing={handleSearch}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 10,
        }}
      >
        {SearchData.map((data, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Items", { type: "Electronics" })}
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 12,
            }}
          >
            <MaterialIcons
              size={22}
              color={COLORS.text}
              style={{
                marginRight: 12,
              }}
              name={"history"}
            />
            <Text
              numberOfLines={2}
              style={{
                ...FONTS.font,
                ...FONTS.fontBold,
                color: COLORS.title,
                flex: 1,
              }}
            >
              {data.title}
            </Text>
            <FeatherIcon style={{ opacity: 0.6 }} color={COLORS.text} size={20} name="arrow-up-left" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
