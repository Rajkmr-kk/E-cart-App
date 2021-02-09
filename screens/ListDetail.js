import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/ContactSellerForm";

const ListDetail = ({ route }) => {
  const listing = route.params;
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detail}>
          <Text style={styles.text1}>{listing.title}</Text>
          <Text style={styles.text2}>${listing.price}</Text>
          <View style={styles.list}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mukesh Raj"
              listing="4 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    //marginTop: 30,
  },
  detail: {
    padding: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
  },
  text2: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.secondary,
    marginVertical: 10,
  },
  list: {
    marginVertical: 50,
  },
  seller: {
    marginBottom: 30,
  },
});

export default ListDetail;
