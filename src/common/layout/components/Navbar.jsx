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
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState([]);

  useEffect(() => {
    if (user) {
      setUsername(user.displayName || user.email);
    }
  }, [user]);

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
            Contact
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#1B1C1A",
                boxShadow: "none",
                border: "none",
              }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {user && <BadgeAvatars src={user.photoURL} />}
                <Typography
                  sx={{
                    fontSize: 20,
                    color: "#ffffff",
                    minWidth: "max-content",
                    overflowX: "hidden",
                    wordBreak: "break-word",
                  }}>
                  {username && username}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                position: "absolute",
                top: 80,
                right: 0,
                boxShadow: "none",
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
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/newuser">
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Sing In
              </Typography>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link  ${isActive ? "active" : ""}`
              }
              to="/login">
              <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                Log In
              </Typography>
            </NavLink>
          </>
        )}
      </Box>
    </nav>
  );
};
