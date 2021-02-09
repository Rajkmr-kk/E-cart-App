import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error on storing token", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    console.log("Error getting in Token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return JwtDecode(token);
  }
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error on Logout", error);
  }
};

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
};
