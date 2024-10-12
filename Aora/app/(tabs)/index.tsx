import { Link } from '@react-navigation/native';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { tailwind } from 'react-native-tailwindcss';

export default function HomeScreen() {
  return (
    <View style={ tailwind.fontBold}>
      <Text >Aora</Text>
      <Link to="/profile">Go to profile</Link>
    </View>
  );
}


