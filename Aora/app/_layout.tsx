import { Slot, Stack } from "expo-router"
import { Text } from "react-native"

const RootLayout = () => {
  return (
   <Stack>
     <Stack.Screen name="/profile" options={{ headerShown: false }} />
   </Stack>
  )
}

export default RootLayout;