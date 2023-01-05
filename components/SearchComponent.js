import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const SearchComponent = () => {
  const [focused, setFocused] = useState("false");

  return (
    <View
      style={styles.searchContainer}
      className="flex-row items-center space-x-2 pb-2 mx-4"
    >
      <View
        style={styles.search}
        className="flex-row flex-1 space-x-2 bg-gray-200 p-3"
      >
        <MagnifyingGlassIcon
          style={styles.searchIcon}
          size={20}
          color="#00CCBB"
        />
        <TextInput
          style={focused ? styles.focused : styles.placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Restaurants and cuisines"
        />
      </View>

      <TouchableOpacity>
        <AdjustmentsVerticalIcon
          style={styles.adjustment}
          size={20}
          color="#00CCBB"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginStart: 16,
    marginEnd: 16,
    alignItems: "center",
    paddingBottom: 16,
  },
  search: {
    flexDirection: "row",
    flex: 1,
    marginEnd: 8,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
  placeholder: {
    flex: 1,
    color: "gray",
  },
  focused: {
    outlineWidth: 0,
    flex: 1,
    color: "gray",
  },
  searchIcon: {
    marginEnd: 8,
  },
  adjustment: {
    marginEnd: 8,
  },
});

export default SearchComponent;
