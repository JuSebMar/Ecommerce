import { useProductContext } from "../common/context/ProductsContext";
import { useCartContext } from "../common/context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { useEffect } from "react";

import { CardMedia, Typography, CardContent, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import { useFavorites } from "../common/hooks/useFavorites";

export const OneItemPage = (id) => {
  const { addToCart } = useCartContext(id);
  const { setProducts, products, getOneProduct } = useProductContext();
  const { handleFavorites } = useFavorites();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const prevProduct = +params.id;
    const data = async () => {
      const res = await getOneProduct(prevProduct);
      setProducts(res);
    };
    data();
  }, []);

  const handleAddTocart = (id) => {
    addToCart(products.id);
    navigate("/cartpage", { replace: true });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        margin: "120px 0px 90px 0px",
      }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: "900px",
          maxHeight: "100%",
          gap: "20px",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          borderRadius: "20px",
        }}>
        <Box
          sx={{
            width: "35%",
            height: "100%",
            objectFit: "contain",
            alignSelf: "center",
            padding: "30px",
          }}>
          <CardMedia
            component="img"
            image={products.image}
            src={products.image}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "40%",
            marginTop: "20px",
          }}>
          <Typography sx={{ fontSize: "20px" }}>{products.title}</Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {products.description}
          </Typography>
          <Typography>{`Precio:$${products.price},00 Us`}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "20px",
            boxShadow:
              " rgba(0, 0, 0, 0.11) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexDirection: "column",
            }}>
            <CustomButton text={"comprar ahora"} />
            <CustomButton
              text={"Agregar al carrito"}
              onClick={handleAddTocart}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleFavorites(id)}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
