import { Link, useNavigate, useParams } from "react-router-dom";

import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { useFavorites } from "../common/hooks/useFavorites";
import { useCartContext } from "../common/context/CartContext";
// import Message from "../helpers/Message";

import { IconShoppingCartPlus } from "@tabler/icons-react";

export const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useCartContext(id);
  const { handleFavorites } = useFavorites();

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <Box display={{ display: "flex" }}>
      <Card
        sx={{
          width: "280px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          paddingBottom: "40px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Link to={`cart/${id}`}>
          <Box sx={{ alignSelf: "center", height: "200px" }}>
            {image && (
              <CardMedia
                sx={{ Width: "100%", height: "100%", objectFit: "contain" }}
                component="img"
                image={image}
                alt={title}
              />
            )}
          </Box>
        </Link>

        <CardContent sx={{ Width: "60px" }}>
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
          <Typography variant="h7" color="text.primary">
            {` Precio: $${price},00 Us`}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", flexDirection: "wrap" }}>
          <IconButton
            onClick={() => handleFavorites(id)}
            aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconShoppingCartPlus
            style={{ display: "flex", marginLeft: "130px" }}
            onClick={handleAddToCart}
          />
        </CardActions>
      </Card>
    </Box>
  );
};
