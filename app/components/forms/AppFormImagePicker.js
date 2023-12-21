import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function AppFormImagePicker({ name, imageUris, onAddImage, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  const onhandleChange = (uri, i) => {
    onAddImage(uri, i);
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormImagePicker;
