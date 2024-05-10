import ShareIcon from "@mui/icons-material/Share";
import { Box, IconButton } from "@mui/material";

export const ShareButton = ({ id }) => {
  const productUrl = `${window.location.origin}/cart/${id}`;

  const handleShare = () => {
    navigator.clipboard
      .writeText(productUrl) // Copia la URL al portapapeles
      .then(() => {
        alert("¡Enlace copiado!"); // Notificación para el usuario
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles", err);
        alert("Hubo un error al copiar el enlace");
      });
  };
  return (
    <Box>
      <IconButton aria-label="share" onClick={() => handleShare()}>
        <ShareIcon />
      </IconButton>
    </Box>
  );
};
