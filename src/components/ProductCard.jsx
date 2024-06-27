import { Link } from "react-router-dom";
import { useFavorites } from "../common/hooks/useFavorites";
import { useCartContext } from "../common/context/CartContext";
// Componentesn de Material UI
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { buttonStyles } from "../common/styles/buttonStyles";
import { ShareButton } from "../common/components/ShareButton";

export const ProductCard = ({ id, image, title, price }) => {
  const styles = buttonStyles();
  const { addToCart } = useCartContext(id);
  const { handleFavorites } = useFavorites();

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <Box sx={{ display: "flex", maxHeight: "355px" }}>
      <Card
        sx={{
          width: "250px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          paddingBottom: "40px",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Box sx={{ alignSelf: "center", height: "200px", padding: "30px" }}>
          <Link to={`cart/${id}`}>
            {image && (
              <CardMedia
                sx={{ Width: "100%", height: "100%", objectFit: "contain" }}
                component="img"
                image={image}
                alt={title}
              />
            )}
          </Link>
        </Box>
        <Box
          sx={{
            Width: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          <CardContent sx={{ padding: "8px", paddingLeft: "25px" }}>
            <Typography>{title}</Typography>
            <Typography>{` Precio: $${price},00 Us`}</Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "250px",
            flexDirection: "wrap",
            marginBottom: -3,
          }}>
          <CardActions>
            <IconButton
              onClick={() => handleFavorites(id)}
              aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <ShareButton id={id} />
            <ShoppingCartIcon
              sx={styles.button}
              onClick={handleAddToCart}
            />
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};
