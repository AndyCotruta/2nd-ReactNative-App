import { ScrollView, StyleSheet } from "react-native";
import CategoriesComponent from "./CategoriesComponent";
import FeaturedRowComponent from "./FeaturedRowComponent";

const BodyComponent = ({ featuredCategories }) => {
  return (
    <ScrollView style={styles.scrollview}>
      {/* ..............Categories Component................. */}
      <CategoriesComponent />
      {/* ..............Featured Rows Components............. */}
      {featuredCategories?.map((category) => (
        <FeaturedRowComponent
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#F2F2F2",
  },
});

export default BodyComponent;
