import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import storage from "../auth/storage";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const Login = (props) => {
  const { Login } = useAuth();
  const [login, setLogin] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      return setLogin(true);
    }
    setLogin(false);
    Login(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid Email or Password" visible={login} />
        <AppFormField
          placeholder="Email"
          icon="email"
          keyboardType="email-address"
          name="email"
          //   onChangeText={handleChange("email")}
          //   onBlur={() => {
          //     setFieldTouched("email");
          //   }}
        />
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <AppFormField
          placeholder="Password"
          autoCapitalize="none"
          icon="lock"
          name="password"
          secureTextEntry
          //   onChangeText={handleChange("password")}
          //   onBlur={() => {
          //     setFieldTouched("password");
          //   }}
        />
        {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});
export default Login;
