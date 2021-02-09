import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = (props) => {
  if (!props.error || !props.visible) {
    return null;
  }
  return <Text style={styles.error}>{props.error}</Text>;
};
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
