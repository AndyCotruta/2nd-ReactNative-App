import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import client, { urlFor } from "../sanity";

import CategoryCard from "./CategoryCard";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await client.fetch(`
  *[_type == "category"]
  `);
      if (response) {
        setCategories(response);
      } else {
        console.log("Error fetching categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <ScrollView
      style={styles.categoriesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
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
