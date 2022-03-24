import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        {/* <SearchIcon /> */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        {/* <FiltersIcon /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
