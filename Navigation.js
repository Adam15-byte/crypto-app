import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "./src/screens/DetailsScreen";
import MarketsScreen from "./src/screens/MarketsScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MarketsScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});