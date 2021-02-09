import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PickerItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>{props.item.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    padding: 20,
  },
});

export default PickerItem;
