import React, { useState } from "react";
import { View, Text } from "react-native";
import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import * as Yup from "yup";
import SubmitButton from "../components/forms/SubmitButton";
import authApi from "../api/auth";
import ErrorMessage from "../components/forms/ErrorMessage";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const Register = (props) => {
  const [error, setError] = useState();
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();

  const handleSubmit = async ({ name, email, password }) => {
    const result = await registerApi.request(name, email, password);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError("Unexpected Error Occured!");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(email, password);
    auth.Login(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            placeholder="Name"
            icon="account"
            keyboardType="email-address"
            name="name"
          />

          <AppFormField
            placeholder="Email"
            icon="email"
            keyboardType="email-address"
            name="email"
          />

          <AppFormField
            placeholder="Password"
            autoCapitalize="none"
            icon="lock"
            name="password"
            secureTextEntry
          />

          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default Register;
