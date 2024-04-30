import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../authContext";
import { useState } from "react"; // Para manejar estados de error
import { Box } from "@mui/material";

export const Register = ({ newUser, email, password }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isError, setIsError] = useState(false);

  const onRegister = async () => {
    if (!newUser || !email || !password) {
      console.error("Por favor, completa todos los campos.");
      return;
    }

    try {
      const auth = getAuth();

      // Crear usuario con correo electrónico y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Actualizar el perfil del usuario con el nuevo nombre
      await updateProfile(auth.currentUser, { displayName: newUser });
      // Almacenar el usuario en el contexto de autenticación
      setUser(userCredential.user);
      console.log("Este es el usuario:", userCredential.user);

      // Redirigir a la pantalla principal después de registrarse
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
      setIsError(true); // Establecer estado de error
    }
  };

  return (
    <Box>
      <button className="btn btn-primary mt-2" onClick={onRegister}>
        Sign In
      </button>
      {isError && <p style={{ color: "red" }}>Error al registrar usuario</p>}
    </Box>
  );
};
