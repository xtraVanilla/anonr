import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../navigation";
import useColorScheme from "../hooks/useColorScheme";
import { StyleSheet, View } from "react-native";
import { ProfileBlock } from "../components";

export default function Profiles() {
  const colorScheme = useColorScheme();

  function renderProfiles() {
    return [1, 2, 3, 4, 5].map((profile) => <ProfileBlock />);
  }

  return (
    <SafeAreaProvider>
      <StatusBar />

      <View style={styles.container}>{renderProfiles()}</View>

      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
