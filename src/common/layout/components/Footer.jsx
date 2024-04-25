import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export const Footer = () => {
  const emailTo = "juansebastiansotomartin@gmail.com";
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        gap: "10px",
      }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}>
        <Link to={`https://github.com/JuSebMar/`}>
          <GitHubIcon sx={{ fontSize: "45px", color: "white" }} />
        </Link>

        <Link
          to={`https://www.linkedin.com/in/sebastian-soto-987b89208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU3%2F7xEftRDSQ1miiycuY%2Bw%3D%3D`}>
          <LinkedInIcon sx={{ fontSize: "50px", color: "white" }} />
        </Link>
        <a href={`mailto:${emailTo}`}>
          <MailIcon sx={{ fontSize: "55px", color: "white" }} />
        </a>
      </Box>
      <Typography> &copy; Mi Portafolio en linea</Typography>
    </footer>
  );
};
