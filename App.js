import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import OfflineNotice from "./components/OfflineNotice";
import AuthContext from "./auth/context";
import storage from "./auth/storage";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";
import { navigationRef } from "./navigation/rootNavigation";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const user = await storage.getUser();
    if (user) {
      setUser(user);
    }
  };
  // useEffect(() => {
  //   restoreToken();
  // }, []);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => {
          setIsReady(true);
        }}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
