import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = (props) => {
  return (
    <Swipeable renderRightActions={props.renderright}>
      <TouchableHighlight underlayColor="#E5E5E5" onPress={props.onPress}>
        <View style={styles.container}>
          {props.IconComponent}
          {props.image && <Image style={styles.image} source={props.image} />}
          <View style={styles.detail}>
            <Text style={styles.text1} numberOfLines={1}>
              {props.title}
            </Text>
            {props.listing && (
              <Text style={styles.text2} numberOfLines={2}>
                {props.listing}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            color="#616161"
            name="chevron-right"
            size={23}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 13,
    backgroundColor: "white",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 10,
  },
  detail: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 8,
    justifyContent: "center",
    marginBottom: 10,
    marginVertical: 5,
  },
  text1: {
    fontSize: 18,
  },
  text2: {
    fontSize: 17,
    color: "#878787",
  },
});

export default ListItem;
