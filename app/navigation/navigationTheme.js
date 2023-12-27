import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default mtTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
