import { Button } from "@mui/material";
export const CustomButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={() => onClick()}
      sx={{ width: "200px" }}
      variant="contained">
      {text}
    </Button>
  );
};
