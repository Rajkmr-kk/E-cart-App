import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import AppButton from "../components/AppButton";

const Start = (props) => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.bg}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.icon} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell It, In Your Way!!</Text>
      </View>
      <View style={styles.btns}>
        <AppButton
          title="LOGIN"
          onPress={() => props.navigation.navigate("Login")}
        />
        <AppButton
          title="REGISTER"
          color="secondary"
          onPress={() => props.navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  btns: {
    paddingHorizontal: 10,
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
  },
  logocontainer: {
    position: "absolute",
    top: 65,
    alignItems: "center",
  },
});

export default Start;
