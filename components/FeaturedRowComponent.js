import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRowComponent = (props) => {
  const fetchData = async () => {
    try {
      const response = await client.fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id: props.id }
      );
      if (response) {
        console.log(response.restaurants);
        setRestaurants(response.restaurants);
      } else {
        console.log("Error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(restaurants);

  return (
    <View>
      <View
        style={styles.featuredHeader}
        className="mt-4 flex-row items-center justify-between px-4"
      >
        <Text style={styles.title} className="font-bold text-lg">
          {props.title}
        </Text>
        <TouchableOpacity>
          <ArrowRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text style={styles.description} className="text-xs text-gray-500 px-4">
        {props.description}
      </Text>
      <ScrollView
        style={styles.contentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4 px-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 16,
    color: "#6B7280",
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default FeaturedRowComponent;
