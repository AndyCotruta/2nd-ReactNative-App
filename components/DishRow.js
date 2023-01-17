import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">{price} $</Text>
        </View>
        <View>
          <Image
            className="h-20 w-20 bg-gray-300 p-4"
            source={{ uri: urlFor(image).url() }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 4,
  },
});
export default DishRow;
