import Button from "@mui/material/Button";
import { createElement } from "react";

const CustomButton = ({ children, icon, isOutlined, ...props }) => {
  return icon ? (
    <Button
      sx={{
        color: "#fff",
        backgroundColor: " #45ad7e",
        width: "210px",
        ":hover": {
          backgroundColor: "transparent",
          border: "1px solid #45ad7e",
          transition: "1s ease-in-out",
          fontFamily: "Poppins",
        },
      }}
      variant={isOutlined ? "outlined" : "contained"}
      startIcon={createElement(icon, {})}
      {...props}
    >
      {children}
    </Button>
  ) : (
    <Button
      variant={isOutlined ? "outlined" : "contained"}
      {...props}
      sx={{
        color: "#fff",
        border: "1.9px solid #45ad7e",
        ":hover": {
          backgroundColor: "#45ad7e",
          border: " 1.9px solid #45ad7e",
          transition: "1s ease-in-out",
          fontFamily: "Poppins",
        },
      }}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
