import React from "react";

import { imageListItemClasses, TextField } from "@mui/material";
import { Field, useField } from "formik";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return (
    <TextField
      {...configTextField}
      sx={{
        fontFamily: "Poppins",
      }}
    />
  );
};

export default TextFieldWrapper;
