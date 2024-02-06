import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/authContext";
import LogOut from "../../../auth/components/LogOut";
import CustomizedBadges from "../../components/CartIcon";
import BadgeAvatars from "../../components/UserIcon";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { CustomCategoriesList } from "../../components/CustomCategoriesList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Navbar = () => {
  const { user, setUser } = useAuth();

  return (
    <nav
      style={{
        backgroundColor: "#1B1C1A",
        display: "flex",
        padding: "40px 40px",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100vw",
        top: 0,
        zIndex: 9999,
      }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link className="navbar-brand" to="/">
          <Typography sx={{ fontSize: 30, color: "#ffffff" }}>
            E-Comerce
          </Typography>
        </Link>
        <CustomCategoriesList />
        <NavLink
          className={({ isActive }) =>
            `nav-item nav-link  ${isActive ? "active" : ""}`
          }
          to="/quien">
          <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
            Quienes somos
          </Typography>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-item nav-link  ${isActive ? "active" : ""}`
          }
          to="/quien">
          <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
            Contacto
          </Typography>
        </NavLink>
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
          <>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/newuser">
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Registro
              </Typography>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/login">
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Login
              </Typography>
            </NavLink>
          </>
        )}
      </Box>
    </nav>
  );
};
