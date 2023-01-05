import { ScrollView, StyleSheet } from "react-native";
import CategoriesComponent from "./CategoriesComponent";
import FeaturedRowComponent from "./FeaturedRowComponent";

const BodyComponent = () => {
  return (
    <ScrollView style={styles.scrollview}>
      {/* ..............Categories Component................. */}
      <CategoriesComponent />
      {/* ..............Featured Rows Components............. */}
      <FeaturedRowComponent
        id="123"
        title="Featured"
        description="Paid placements from our partners"
      />
      <FeaturedRowComponent
        id="1234"
        title="Tasty Discounts"
        description="Everyone's been enjoying these juicy discounts!"
      />
      <FeaturedRowComponent
        id="12345"
        title="Offers near you!"
        description="Why not support your local restaurants tonight?"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#F2F2F2",
  },
});

export default BodyComponent;
