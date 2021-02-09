import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListSeperator = (props) => {
  return <View style={styles.seperator}></View>;
};
const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1.5,
    backgroundColor: "#F1F1F1",
  },
});

export default ListSeperator;
