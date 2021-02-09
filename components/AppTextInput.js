import React from "react";
import { TextInput, Text, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Styles from "../constants/Styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color="#5A5A5A"
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor="#7B7B7B"
        {...otherProps}
        // secureTextEntry={props.secureTextEntry}
        // onChangeText={props.onChangeText}
        // placeholder={props.placeholder}
        style={Styles.text}
        // onBlur={props.onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    paddingTop: 2,
  },
});

export default AppTextInput;
