import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import ProductsListSkeleton from "../../components/skeletons/ProductsListSkeleton";
import { useGetCategoryProductQuery } from "../../features/Categories/CategoriesApi";
import CategoryHeader from "./CategoryHeader";
import Products from "./Products";
import SubCategoriesSection from "./SubCategories";

const CategoryHome = ({ navigation, route }) => {
  const { COLORS, FONTS, SIZES } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { name, categoryId } = route.params;
  const { allCategories } = useSelector((state) => state.categories);
  const thisCategory = allCategories.find((c) => c.id === categoryId);
  const { isLoading, data, isSuccess } = useGetCategoryProductQuery(
    categoryId,
    { refetchOnMountOrArgChange: true }
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <CategoryHeader />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ marginTop: 20 }}>
          <SubCategoriesSection SubCategories={thisCategory?.categorySubs} />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              ...FONTS.font,
              ...FONTS.fontBold,
              color: COLORS.title,
              flex: 1,
            }}
          >
            {name} Products
          </Text>
        </View>
        {!isLoading && isSuccess ? (
          <Products products={data.products} />
        ) : (
          <ProductsListSkeleton />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryHome;
