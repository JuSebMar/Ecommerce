import { Button } from "@mui/material";
export const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={() => onClick()}
      sx={{ width: "200px", maxHeight: "40px" }}
      variant="contained">
      {text}
    </Button>
  );
};
