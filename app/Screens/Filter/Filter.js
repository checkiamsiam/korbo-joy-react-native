import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { List } from "react-native-paper";
import CustomButton from "../../components/CustomButton";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";

const FilterOptionData = [
  "Gender",
  "Discount",
  "Size",
  "Price",
  "Customer Ratings",
  "Type",
  "Occasion",
  "Brand",
  "Color",
  "Sleeve",
  "Fabric",
  "Offers",
  "Theme",
  "Reversible",
  "Pattern",
  "Availability",
];
const priceFilterData = [
  {
    selected: false,
    title: "Under Rs. 499",
  },
  {
    selected: false,
    title: "Rs. 500-699",
  },
  {
    selected: false,
    title: "Rs. 700-999",
  },
  {
    selected: false,
    title: "Rs. 1000-1499",
  },
  {
    selected: false,
    title: "Rs. 1500-1999",
  },
  {
    selected: false,
    title: "Rs. 2000 and above",
  },
];
const genderFilterData = [{ selected: false, title: "Man" }];
const discountFilterData = [
  {
    selected: false,
    title: "50% or more",
  },
  {
    selected: false,
    title: "30% or more",
  },
  {
    selected: false,
    title: "40% or more",
  },
  {
    selected: false,
    title: "60% or more",
  },
  {
    selected: false,
    title: "70% or more",
  },
];
const sizeFilterData = [
  {
    selected: false,
    title: "2XS",
  },
  {
    selected: false,
    title: "XS",
  },
  {
    selected: false,
    title: "S",
  },
  {
    selected: false,
    title: "M",
  },
  {
    selected: false,
    title: "L",
  },
  {
    selected: false,
    title: "XL",
  },
  {
    selected: false,
    title: "2XL",
  },
  {
    selected: false,
    title: "3XL",
  },
];
const customerRatingFilterData = [
  {
    selected: false,
    title: "4★ & above",
  },
  {
    selected: false,
    title: "3★ & above",
  },
];
const typeFilterData = [
  {
    selected: false,
    title: "Leather Jacket",
  },
  {
    selected: false,
    title: "Bombet Jacket",
  },
  {
    selected: false,
    title: "Nehru Jacket",
  },
  {
    selected: false,
    title: "Denim Jacket",
  },
  {
    selected: false,
    title: "Puffer Jacket",
  },
  {
    selected: false,
    title: "Fleece Jacket",
  },
];
const occasionFilterData = [
  {
    selected: false,
    title: "Casual",
  },
  {
    selected: false,
    title: "Sports",
  },
  {
    selected: false,
    title: "Formal",
  },
];
const brandFilterData = [
  {
    selected: true,
    title: "Roadster",
  },
  {
    selected: true,
    title: "Peter England",
  },
  {
    selected: true,
    title: "Flying Machine",
  },
  {
    selected: true,
    title: "Killer",
  },
  {
    selected: true,
    title: "Levi's",
  },
  {
    selected: true,
    title: "Puma",
  },
  {
    selected: true,
    title: "Wildcraft",
  },
  {
    selected: true,
    title: "Ndet",
  },
  {
    selected: true,
    title: "Woodland",
  },
];
const colorFilterData = [
  {
    selected: false,
    title: "Black",
  },
  {
    selected: false,
    title: "Blue",
  },
  {
    selected: false,
    title: "Maroon",
  },
  {
    selected: false,
    title: "Green",
  },
  {
    selected: false,
    title: "White",
  },
  {
    selected: false,
    title: "Light Blue",
  },
  {
    selected: false,
    title: "Beige",
  },
  {
    selected: false,
    title: "Brown",
  },
  {
    selected: false,
    title: "Gold",
  },
];
const sleeveFilterData = [
  {
    selected: false,
    title: "Full Sleeve",
  },
  {
    selected: false,
    title: "Sleeveless",
  },
  {
    selected: false,
    title: "Short Sleeve",
  },
];
const fabricFilterData = [
  {
    selected: false,
    title: "Genuine Leather",
  },
  {
    selected: false,
    title: "Cotton Blend",
  },
  {
    selected: false,
    title: "Poly Silk",
  },
  {
    selected: false,
    title: "Pure Linen",
  },
  {
    selected: false,
    title: "Lycra Blend",
  },
  {
    selected: false,
    title: "Velvet",
  },
  {
    selected: false,
    title: "Cotton Linen",
  },
  {
    selected: false,
    title: "Cotton Lycra",
  },
  {
    selected: false,
    title: "Denim",
  },
  {
    selected: false,
    title: "Faux Leather",
  },
  {
    selected: false,
    title: "Nylon",
  },
  {
    selected: false,
    title: "Polycotton",
  },
  {
    selected: false,
    title: "Wool Blend",
  },
];
const offersFilterData = [
  {
    selected: false,
    title: "Buy More, Save More",
  },
  {
    selected: false,
    title: "No Cost EMI",
  },
  {
    selected: false,
    title: "Special Price",
  },
];
const themeFilterData = [
  {
    selected: false,
    title: "Leather Jackets",
  },
  {
    selected: false,
    title: "Mandarian Collar",
  },
  {
    selected: false,
    title: "Sporty Jacket",
  },
  {
    selected: false,
    title: "Quited Quotient",
  },
  {
    selected: false,
    title: "Modern Classics",
  },
  {
    selected: false,
    title: "Bomber",
  },
  {
    selected: false,
    title: "Light Weight Bombers",
  },
  {
    selected: false,
    title: "Everyday Bombers",
  },
  {
    selected: false,
    title: "Florals",
  },
  {
    selected: false,
    title: "Open Front",
  },
  {
    selected: false,
    title: "Puffer Jacket",
  },
];
const reversibleFilterData = [
  {
    selected: false,
    title: "Yes",
  },
  {
    selected: false,
    title: "No",
  },
];
const patternFilterData = [
  {
    selected: false,
    title: "Chevron",
  },
  {
    selected: false,
    title: "Embossed",
  },
  {
    selected: false,
    title: "Perforation",
  },
  {
    selected: false,
    title: "Animal Print",
  },
  {
    selected: false,
    title: "Embellished",
  },
  {
    selected: false,
    title: "Holographic",
  },
  {
    selected: false,
    title: "Applique",
  },
  {
    selected: false,
    title: "Colorblock",
  },
  {
    selected: false,
    title: "Printed",
  },
  {
    selected: false,
    title: "Solid",
  },
];
const availabilityFilterData = [
  {
    selected: false,
    title: "Include Out of Stock",
  },
];

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState("Price");
  const [genderFilter, setGenderFilter] = useState(genderFilterData);
  const [discountFilter, setDiscountFilter] = useState(discountFilterData);
  const [sizeFilter, setSizeFilter] = useState(sizeFilterData);
  const [priceFilter, setPriceFilter] = useState(priceFilterData);
  const [customerRatingFilter, setCustomerRatingFilter] = useState(customerRatingFilterData);
  const [typeFilter, setTypeFilter] = useState(typeFilterData);
  const [occasionFilter, setOccasionFilter] = useState(occasionFilterData);
  const [brandFilter, setBrandFilter] = useState(brandFilterData);
  const [colorFilter, setColorFilter] = useState(colorFilterData);
  const [sleeveFilter, setSleeveFilter] = useState(sleeveFilterData);
  const [fabricFilter, setFabricFilter] = useState(fabricFilterData);
  const [offersFilter, setOffersFilter] = useState(offersFilterData);
  const [themeFilter, setThemeFilter] = useState(themeFilterData);
  const [reversibleFilter, setReversibleFilter] = useState(reversibleFilterData);
  const [patternFilter, setPatternFilter] = useState(patternFilterData);
  const [availabilityFilter, setAvailabilityFilter] = useState(availabilityFilterData);
  const [filterData, setFilterData] = useState(priceFilter);

  const handleFilterOption = (val) => {
    setActiveFilter(val);
    setFilterData(
      val === "Gender"
        ? genderFilter
        : val === "Discount"
        ? discountFilter
        : val === "Size"
        ? sizeFilter
        : val === "Price"
        ? priceFilter
        : val === "Customer Ratings"
        ? customerRatingFilter
        : val === "Type"
        ? typeFilter
        : val === "Occasion"
        ? occasionFilter
        : val === "Brand"
        ? brandFilter
        : val === "Color"
        ? colorFilter
        : val === "Sleeve"
        ? sleeveFilter
        : val === "Fabric"
        ? fabricFilter
        : val === "Offers"
        ? offersFilter
        : val === "Theme"
        ? themeFilter
        : val === "Reversible"
        ? reversibleFilter
        : val === "Pattern"
        ? patternFilter
        : val === "Availability"
        ? availabilityFilter
        : []
    );
  };

  const handleFilterSelected = (val) => {
    let Gender = genderFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Discount = discountFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Size = sizeFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Price = priceFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let CustomerRating = customerRatingFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Type = typeFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Occasion = occasionFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Brand = brandFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Color = colorFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Sleeve = sleeveFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Fabric = fabricFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Offers = offersFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Theme = themeFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Reversible = reversibleFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Pattern = patternFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    let Availability = availabilityFilter.map((data) => {
      if (val === data.title) {
        return { ...data, selected: !data.selected };
      }
      return data;
    });
    setGenderFilter(Gender);
    setDiscountFilter(Discount);
    setSizeFilter(Size);
    setPriceFilter(Price);
    setCustomerRatingFilter(CustomerRating);
    setTypeFilter(Type);
    setOccasionFilter(Occasion);
    setBrandFilter(Brand);
    setColorFilter(Color);
    setSleeveFilter(Sleeve);
    setFabricFilter(Fabric);
    setOffersFilter(Offers);
    setThemeFilter(Theme);
    setReversibleFilter(Reversible);
    setPatternFilter(Pattern);
    setAvailabilityFilter(Availability);
    setFilterData(
      activeFilter === "Gender"
        ? Gender
        : activeFilter === "Discount"
        ? Discount
        : activeFilter === "Size"
        ? Size
        : activeFilter === "Price"
        ? Price
        : activeFilter === "Customer Ratings"
        ? CustomerRating
        : activeFilter === "Type"
        ? Type
        : activeFilter === "Occasion"
        ? Occasion
        : activeFilter === "Brand"
        ? Brand
        : activeFilter === "Color"
        ? Color
        : activeFilter === "Sleeve"
        ? Sleeve
        : activeFilter === "Fabric"
        ? Fabric
        : activeFilter === "Offers"
        ? Offers
        : activeFilter === "Theme"
        ? Theme
        : activeFilter === "Reversible"
        ? Reversible
        : activeFilter === "Pattern"
        ? Pattern
        : activeFilter === "Availability"
        ? Availability
        : []
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <Header titleLeft leftIcon={"back"} title={"Filters"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 140,
            backgroundColor: "#eee",
          }}
        >
          <ScrollView>
            {FilterOptionData.map((data, index) => (
              <List.Item
                style={[
                  data === activeFilter && {
                    backgroundColor: COLORS.white,
                  },
                ]}
                onPress={() => handleFilterOption(data)}
                key={index}
                title={() => (
                  <Text
                    style={{
                      ...FONTS.font,
                      ...FONTS.fontMedium,
                      color: COLORS.title,
                    }}
                  >
                    {data}
                  </Text>
                )}
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView>
            {filterData.map((data, index) => (
              <List.Item
                key={index}
                onPress={() => handleFilterSelected(data.title)}
                left={() => (
                  <CheckBox tintColors={{ true: COLORS.primary, false: COLORS.text }} style={{ left: 10 }} value={data.selected} disabled />
                )}
                title={() => (
                  <Text
                    style={{
                      ...FONTS.font,
                      ...FONTS.fontMedium,
                      top: -1,
                      color: COLORS.title,
                    }}
                  >
                    {data.title}
                  </Text>
                )}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: COLORS.borderColor,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h6 }}>16,227</Text>
          <Text style={{ ...FONTS.fontXs }}>products found</Text>
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton btnSm title={"Apply"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Filter;
