import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
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
      {/* ..............Body Component.................... */}
      <BodyComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeScreen;
