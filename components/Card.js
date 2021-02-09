import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
//import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-expo-image-cache";

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: props.thumbnailUrl }}
          uri={props.imageUrl}
        />
        <View style={styles.detail}>
          <Text style={styles.text1} numberOfLines={1}>
            {props.title}
          </Text>
          <Text style={styles.text2}>{props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D7D7D7",
    backgroundColor: "#FFFCFC",
    overflow: "hidden",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  detail: {
    padding: 20,
  },
  text1: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.black,
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
