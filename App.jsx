import { View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Contact from "./components/Contact";

function App() {
  return (
    <NavigationContainer initialRouteName = "My Contact">
      <Stack.Navigator>
        <Stack.Screen name="My Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}