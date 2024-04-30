import { Padding } from "@mui/icons-material";
import { useTheme } from "@mui/material";

export const buttonStyles = () => {
  const theme = useTheme();
  return {
    button: {
      padding: "10px",
      fontSize: "40px",
      "&:hover": {
        backgroundColor: "#ADADAD",
        borderRadius: "30px",
      },
    },
  };
};
