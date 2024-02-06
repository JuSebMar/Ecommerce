import { useNavigate } from "react-router-dom";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../authContext";

export const LogIn = ({ email, password }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const onLogin = async () => {
    if (!email || !password) {
      console.error(
        "Por favor, ingresa un correo electrónico y una contraseña."
      );

      return;
    }
    try {
      const auth = getAuth();
      await setPersistence(auth, browserSessionPersistence);
      const data = await signInWithEmailAndPassword(auth, email, password);

      setUser(data.user);

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  return (
    <button className="btn btn-primary mt-2" onClick={onLogin}>
      Login
    </button>
  );
};
