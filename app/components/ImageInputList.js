import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris, onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((imageUri, i) => (
        <ImageInput imageUri={imageUri} onChangeImage={() => onAddImage(i)} />
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
});

export default ImageInputList;
