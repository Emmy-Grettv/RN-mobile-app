import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Aora👋🥳</Text>
      <StatusBar />
      {/* Correct route to the profile screen */}
      <Link href="/(tabs)/profile">Go to Profile</Link> 
    </View>
  );
}
