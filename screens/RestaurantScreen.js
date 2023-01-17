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
import { ArrowLeftIcon } from "react-native-heroicons/solid";

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
      <View style={styles.container} className="bg-white">
        <View>
          <Text>{title}</Text>
        </View>
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
});

export default RestaurantScreen;
