import { useNavigate } from "react-router-dom";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../authContext";
import { useState } from "react"; // Para manejo de estados como errores
import { Box } from "@mui/material";

export const LogIn = ({ email, password }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [isError, setIsError] = useState(false);

  const onLogin = async () => {
    if (!email || !password) {
      console.error(
        "Por favor, ingresa un correo electrónico y una contraseña."
      );
      return;
    }

    try {
      const auth = getAuth();

      // Establecer persistencia de sesión
      await setPersistence(auth, browserSessionPersistence);

      // Iniciar sesión con correo electrónico y contraseña
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      // Obtener token para autenticar futuras solicitudes
      const token = await user.getIdToken();

      // Guardar en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Establecer el usuario en el contexto de autenticación
      setUser(user);

      // Navegar a la página principal después de iniciar sesión
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setIsError(true);
    }
  };

  return (
    <Box>
      <button className="btn btn-primary mt-2" onClick={onLogin}>
        Log In
      </button>
      {isError && <p style={{ color: "red" }}>Error al iniciar sesión</p>}
    </Box>
  );
};
