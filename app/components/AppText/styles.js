import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  color: "#000",
  ...Platform.select({
    ios: {
      fontSize: 18,
      fontFamily: "Avenir",
    },
    android: {
      fontSize: 18,
      fontFamily: "Roboto",
    },
  }),
});

export default styles;
