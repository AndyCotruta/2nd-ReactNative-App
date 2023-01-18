import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";

const HomeScreenHeader = () => {
  return (
    <View
      style={styles.headerContainer}
      className="flex-row pb-3 items-center mx-4 space-x-2"
    >
      <Image
        style={styles.headerImage}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        source={{
          uri: "https://links.papareact.com/wru",
        }}
      />
      <View style={styles.headerText} className="flex-1">
        <Text
          style={styles.deliverNow}
          className="font-bold text-gray-400 text-xs"
        >
          Deliver Now!
        </Text>
        <View style={styles.location}>
          <Text style={styles.currentLocation} className="font-bold text-xl">
            Current Location
          </Text>
          {Platform.OS === "web" && (
            <Text
              style={styles.forWeb}
              onPress={() => {
                console.log("Clicked!");
              }}
            >
              This text is only for web
            </Text>
          )}
          <TouchableOpacity>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.user}>
        <UserIcon color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F2F2F2",
  },
  headerText: {
    paddingLeft: 8,
    flex: 1,
  },
  deliverNow: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 12,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentLocation: {
    fontWeight: "bold",
    fontSize: 20,
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 50,
    color: "#00CCBB",
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  forWeb: {
    cursor: "pointer",
    color: "red",
  },
});

export default HomeScreenHeader;
