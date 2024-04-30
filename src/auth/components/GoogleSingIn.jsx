import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { Google } from "@mui/icons-material";
import { useAuth } from "../authContext";

export const GoogleSingIn = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const onSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }

    navigate("/", {
      replace: true,
    });
  };

  return (
    <Box>
      <IconButton
        onClick={onSignInWithGoogle}
        sx={{
          display: "flex",
          borderRadius: "0px",
          width: "15ch",
        }}>
        <Google />
        oogle
      </IconButton>
    </Box>
  );
};
