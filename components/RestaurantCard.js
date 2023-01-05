import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ArrowRightIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={[styles.restaurantCard, styles.shadow]}>
      <Image
        style={styles.restaurantImage}
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View style={styles.restaurantData} className="px-3 pb-4">
        <Text style={styles.restaurantTitle} className="font-bold text-lg pt-2">
          {title}
        </Text>
        <View
          style={styles.restaurantRating}
          className="flex-row items-center space-x-1"
        >
          <StarIcon color="green" opacity={0.5} size={22} />

          <Text style={styles.ratingText} className="text-xs text-gray-500">
            <Text style={styles.ratingNr} className="text-green-500">
              {rating}
            </Text>{" "}
            - {genre}
          </Text>
        </View>
        <View
          style={styles.restaurantRating}
          className="flex-row items-center space-x-1"
        >
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={styles.ratingText} className="text-xs text-gray-500">
            Nearby - {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    marginEnd: 8,
    backgroundColor: "white",
    boxShadow: "1px solid grey",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 4,
  },
  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  restaurantImage: {
    width: 256,
    height: 144,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  restaurantData: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  restaurantTitle: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 8,
  },
  restaurantRating: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
  },
  ratingNr: {
    color: "#8BBA86",
  },
  ratingText: {
    fontSize: 12,
    color: "gray",
    marginStart: 4,
  },
});

export default RestaurantCard;
