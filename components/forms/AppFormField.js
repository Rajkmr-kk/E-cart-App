import React from "react";
import { useFormikContext } from "formik";
import { View, Text } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    setFieldValue,
    values,
    setFieldTouched,
    handleChange,
    errors,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        //placeholder="Email"
        //icon="email"
        //keyboardType="email-address"
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        onBlur={() => {
          setFieldTouched(name);
        }}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
export default AppFormField;
