import { ScrollView, StyleSheet } from "react-native";

import CategoryCard from "./CategoryCard";

const CategoriesComponent = () => {
  return (
    <ScrollView
      style={styles.categoriesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 1" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 2" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 3" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 4" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 5" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 6" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 7" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 8" />
      <CategoryCard imgUrl="https://picsum.photos/200" title="Testing 9" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default CategoriesComponent;
