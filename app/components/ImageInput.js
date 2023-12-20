import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const selectImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");

    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={selectImage} style={styles.button}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color={colors.medium}
          />
        )}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 20,
    height: 90,
    width: 90,
  },
  button: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    borderRadius: 20,
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
