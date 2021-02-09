import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListSeperator from "../components/ListSeperator";
import ListItemDeleteaction from "../components/ListItemDeleteaction";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
const Message = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refresh, setRefresh] = useState(false);

  const handledelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            listing={item.description}
            onPress={() => {
              console.log("Message selected", item);
            }}
            renderright={() => (
              <ListItemDeleteaction
                onPress={() => {
                  handledelete(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListSeperator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Message;
