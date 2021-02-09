import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import Message from "../screens/Message";

const Stack = createStackNavigator();
const AccountNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Messages" component={Message} />
  </Stack.Navigator>
);

export default AccountNavigator;
