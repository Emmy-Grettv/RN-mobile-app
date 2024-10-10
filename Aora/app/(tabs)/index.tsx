import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Aora👋🥳</Text>
      <StatusBar style="auto" />
      {/* Adjust the Link to navigate to the correct route */}
      <Link href="/(tabs)/profile">Go to Profile</Link> 
    </View>
  );
}
