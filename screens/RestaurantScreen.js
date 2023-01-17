import {
  NavigationHelpersContext,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          className="w-full h-56 bg-gray-300 p-4"
          style={styles.headerImage}
          source={{ uri: urlFor(imgUrl).url() }}
        />
        <TouchableOpacity
          style={styles.backButton}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View style={styles.container} className=" bg-white">
        <View style={styles.restaurantDetails} className="px-4 pt-4">
          <Text style={styles.restaurantTitle} className="text-3xl font-bold">
            {title}
          </Text>
          <View
            style={styles.restaurantRating}
            className="flex-row space-x-2 my-2"
          >
            <View
              style={styles.restaurantRating}
              className="flex-row items-center space-x-1"
            >
              <StarIcon color="green" size={22} opacity={0.5} />
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
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300 ">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food alergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 224,
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 56,
    left: 20,
    padding: 8,
    backgroundColor: "#F3F4F6",
  },
  container: {
    backgroundColor: "white",
  },
  restaurantTitle: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "bold",
  },
  restaurantDetails: {
    paddingHorizontal: 16,
    paddingTop: 16,
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

export default RestaurantScreen;
