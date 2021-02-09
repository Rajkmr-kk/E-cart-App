import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Listing from "../screens/Listing";
import ListDetail from "../screens/ListDetail";

const Stack = createStackNavigator();
const FeedNavigator = (props) => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listing" component={Listing} />
    <Stack.Screen name="ListDetail" component={ListDetail} />
  </Stack.Navigator>
);
export default FeedNavigator;
