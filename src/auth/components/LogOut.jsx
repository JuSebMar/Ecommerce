import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../authContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";

const LogOut = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      // Limpiar el estado local del usuario
      setUser(null);

      // Realizar cualquier otra acción que necesites después de cerrar sesión
      navigate("/", {
        replace: true,
      });
      console.log("Usuario ha cerrado sesión exitosamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <button
      className="btn mt-2"
      onClick={onLogout}
      style={{ display: "flex", color: "#fffffff", alignItems: "center" }}>
      <LogoutIcon sx={{ color: "#ffffff" }} />
      <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
        {" "}
        Cerrar sesión
      </Typography>
    </button>
  );
};

export default LogOut;
