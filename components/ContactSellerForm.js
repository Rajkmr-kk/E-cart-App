import React from "react";
import { View, Text, Keyboard, Alert } from "react-native";
import messagesApi from "../api/messages";
import * as Notifications from "expo-notifications";
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import AppFormField from "./forms/AppFormField";
import SubmitButton from "./forms/SubmitButton";

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Couldnt Send a Message", [{ text: "ok" }]);
    }
    resetForm();

    Notifications.presentNotificationAsync({
      title: "Good!",
      body: "Message is Sent to Seller",
      data: {
        _displayInForeground: true,
      },
    });
  };
  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={200}
        multiline
        name="message"
        numberOfLines={2}
        placeholder="Message"
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(2).label("Message"),
});

export default ContactSellerForm;
