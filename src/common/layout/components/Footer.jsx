import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="bg-dark text-center py-3">
      <Box>
        <Typography color={"#ffffff"}>
          &copy; 2024 Mi Tienda en Línea
        </Typography>{" "}
        <Typography color={"#ffffff"}>
          juansebastiansotomartin@gmail.com
        </Typography>
      </Box>
    </footer>
  );
};
