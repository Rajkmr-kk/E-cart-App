import React from "react";
import { View, Text } from "react-native";
import Start from "../screens/Start";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Start"
      component={Start}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
