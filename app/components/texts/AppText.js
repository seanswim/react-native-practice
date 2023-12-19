import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
