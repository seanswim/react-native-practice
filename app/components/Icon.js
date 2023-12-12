import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) {
  const styles = StyleSheet.create({
    icon: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.icon}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
