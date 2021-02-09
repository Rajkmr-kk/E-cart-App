import { DefaultTheme } from "@react-navigation/native";
import Colors from "../constants/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: "white",
  },
};