import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "../navigation";
import useColorScheme from "../hooks/useColorScheme";

export default function Profiles() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
