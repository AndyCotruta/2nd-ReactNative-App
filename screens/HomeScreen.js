import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
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

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* ..............Header Component.................. */}
      <HomeScreenHeader />
    </SafeAreaView>
  );
};

export default HomeScreen;
