import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#014B1C",
    },
    secondary: {
      main: "#56761C",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
  components: {
    MuiAccordionDetails: { fontFamily: ["Rubik", "sans-serif"].join(",") },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
