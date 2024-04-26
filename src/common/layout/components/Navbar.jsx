import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/authContext";
import LogOut from "../../../auth/components/LogOut";
import { CustomCategoriesList } from "../../components/CustomCategoriesList";
import CustomizedBadges from "../../components/CartIcon";
import BadgeAvatars from "../../components/UserIcon";
import logo from "../../assets/eComerce.png";
// componentes de Material UI
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { SmoothScroll } from "../../utils/SmoothScroll";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "#1B1C1A",
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 15px",
        }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{ textDecoration: "none" }}>
          <img
            src={logo}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "3px",
            }}
          />
        </Link>
        <CustomCategoriesList />
        <SmoothScroll to="#contacto">
          <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
            Contacto
          </Typography>
        </SmoothScroll>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavLink
          className={({ isActive }) =>
            `nav-item nav-link  ${isActive ? "active" : ""}`
          }
          to="/favorites">
          <IconButton aria-label="favourites">
            <FavoriteIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-item nav-link  ${isActive ? "active" : ""}`
          }
          to="/cartpage">
          <CustomizedBadges onChange={() => {}} />
        </NavLink>
        {user ? (
          <Box sx={{ position: "relative", width: "180px" }}>
            <Accordion
              sx={{
                position: "absolute",
                zIndex: 99,
                top: -35,
                right: 0,
                boxShadow: "none",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ backgroundColor: "#1B1C1A" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {user && <BadgeAvatars />}
                  <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                    {user && user.displayName}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontSize: 20,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#1B1C1A",
                  justifyContent: "center",
                }}>
                {user && <LogOut />}
              </AccordionDetails>
            </Accordion>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: "10px", marginRight: "15px" }}>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/newuser"
              style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Registro
              </Typography>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/login"
              style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Login
              </Typography>
            </NavLink>
          </Box>
        )}
      </Box>
    </nav>
  );
};
