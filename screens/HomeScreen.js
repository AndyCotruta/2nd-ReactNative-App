import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";
import AiOutlineDown from "react-icons/ai";
import HomeScreenHeader from "../components/HomeScreenHeader";
import SearchComponent from "../components/SearchComponent";
import BodyComponent from "../components/BodyComponent";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setfeaturedCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const fetchFeaturedCategories = async () => {
    try {
      const response = await client.fetch(`*[_type=="featured"] {
  ...,
  restaurants[]->{
    ...,
    dishes[]
  }
}`);
      if (response) {
        setfeaturedCategories(response);
      } else {
        console.log("Error while fetching featured categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://deliveroo-mongodb-backend-production.up.railway.app/restaurants"
      );
      if (response) {
        const data = await response.json();
        console.log(data);
        setRestaurants(data);
      } else {
        console.log("Error while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchFeaturedCategories();
    fetchRestaurants();
  }, []);

  return (
    <SafeAreaView
      edges={["right", "left", "top"]}
      style={styles.homescreen}
      className="flex-1 bg-white"
    >
      {/* ..............Header Component.................. */}
      <HomeScreenHeader />
      {/* ..............Search Component.................. */}
      <SearchComponent />
      {restaurants.map((restaurant) => (
        <View>
          <Text>{restaurant.name}</Text>
          <Image style={styles.testImage} source={{ uri: restaurant.image }} />
        </View>
      ))}
      {/* ..............Body Component.................... */}
      <BodyComponent featuredCategories={featuredCategories} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: "white",
  },
  testImage: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
