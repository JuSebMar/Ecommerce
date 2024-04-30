import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};
export default AppLayout;
