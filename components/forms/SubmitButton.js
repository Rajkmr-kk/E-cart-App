import React from "react";
import { View, Text } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

const SubmitButton = (props) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={props.title} onPress={handleSubmit} />;
};

export default SubmitButton;
