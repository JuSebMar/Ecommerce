import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductsContext";
import { useEffect } from "react";
import { Card, CardMedia, Typography, CardContent, Box } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { CustomButton } from "../components/CustomButton";
import { useCartContext } from "../context/CartContext";

export const OneItemPage = (id) => {
  const { addToCart } = useCartContext(id);
  const { setProducts, products, getOneProduct } = useProductContext();
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
  // console.log(products);

  const handleAddTocart = (id) => {
    addToCart(products.id);
    navigate("/cartpage", { replace: true });
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "150px 250px",
      }}>
      <Card
        key={id}
        sx={{
          display: "flex",
          width: "100vw",
          gap: "30px",
          justifyContent: "center",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}>
        <Box sx={{ width: "400px", height: "400px" }}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              alignSelf: "center",
            }}
            image={products.image}
            src={products.image}
          />
        </Box>
        <Box>
          <CardContent
            sx={{
              maxWidth: "400px",
            }}>
            <Typography variant="h4">{}</Typography>
            <Typography variant="h6" color="text.primary">
              {products.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {`$ ${products.price},00 Us`}
            </Typography>
            <Typography variant="h6" color="text.primary">
              Quantity: {products.quantity}
            </Typography>

            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
      <Box
        sx={{
          width: "500px",
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "70px",
            gap: "10px",
          }}>
          <Typography variant="h6" color="text.primary">
            {/* Cantidad disponible: {} */}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {`$ ${products.price},00 Us`}
          </Typography>

          <CustomButton text={"comprar ahora"} />
          <CustomButton text={"Agregar al carrito"} onClick={handleAddTocart} />
        </Box>
      </Box>
    </Box>
  );
};
