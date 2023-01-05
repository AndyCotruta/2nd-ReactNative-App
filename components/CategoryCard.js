import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const CategoryCard = (props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} className="mr-2">
      <Image
        source={{
          uri: props.imgUrl,
        }}
        style={styles.categoryImage}
        className="h-20 w-20 rounded"
      />
      <Text
        style={styles.categoryText}
        className="absolute bottom-1 left-1 text-white font-bold"
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginEnd: 8,
    position: "relative",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  categoryText: {
    position: "absolute",
    fontWeight: "bold",
    left: 4,
    bottom: 4,
    color: "white",
  },
});

export default CategoryCard;
