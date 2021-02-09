import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Listing from "../screens/Listing";
import ListEdit from "../screens/ListEdit";
import Account from "../screens/Account";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListButton from "./NewListButton";
import * as Permission from "expo-permissions";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushToken";
import navigation from "./rootNavigation";
import useNotfications from "../hooks/useNotfications";

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
  useNotfications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ListEdit"
        component={ListEdit}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListButton onPress={() => navigation.navigate("ListEdit")} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
