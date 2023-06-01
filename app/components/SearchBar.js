import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

const SearchBar = (props) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const [search, setSearch] = React.useState("");
  const handleSearch = () => {
    if (search.length > 0) {
      //do search functionality here
      console.log(search);
    }
  };
  return (
    <>
      <View
        style={{
          position: "relative",
        }}
      >
        <TextInput
          style={{
            ...FONTS.fontLg,
            borderWidth: 1,
            borderColor: COLORS.borderColor,
            borderRadius: SIZES.radius,
            paddingHorizontal: 18,
            paddingVertical: 10,
            color: COLORS.title,
          }}
          onChange={(event) => setSearch(event.nativeEvent.text)}
          placeholder="Search here.."
          placeholderTextColor={COLORS.text}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            height: 50,
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 0,
            top: -2,
          }}
        >
          <FeatherIcon name="search" color={COLORS.secondary} size={26} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchBar;
