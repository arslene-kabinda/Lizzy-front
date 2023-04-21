import React from "react";

import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
 
  const handleSubmit = () => {
    submitForm();
   
  };
  const configButton = {
    variant: "contained",

    fullWidth: true,
    onClick: handleSubmit,
  };
  return (
    <Button
      {...configButton}
      sx={{
        color: "#fff",
        fontFamily: "Poppins",
        ":hover": {
          backgroundColor: "transparent",
          border: " 1px solid #45ad7e",
          transition: "0.5s ease-in-out",
          fontFamily: "Poppins",
          color: "#45ad7e",
        },
      }}
    >
      {children}
    </Button>
  );
};
export default ButtonWrapper;
