import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.btn1, { backgroundColor: Colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text1}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn1: {
    width: "100%",
    height: 55,
    backgroundColor: Colors.primary,
    margin: 15,
    marginLeft: 0,
    borderRadius: 30,
  },
  text1: {
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 14,
    fontWeight: "bold",
  },
});
export default AppButton;
