import React, { useState, useEffect } from "react";

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

import { getLocalStorage, removeLocalStorage } from "../functions/localStorage";
import { useProductContext } from "../context/ProductsContext";
import { CustomButton } from "./CustomButton";
import { useCartContext } from "../context/CartContext";

export const ListCart = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { getOneProduct } = useProductContext();
  const { addToCart, deleteToCart, removeItem } = useCartContext();

  //para limpiar el lcoal storage
  const cleanCart = () => {
    removeLocalStorage("cart");
    window.location.reload();
  };

  const handlerAddToCart = (id) => {
    addToCart(id);
    console.log(products.id);
    setRefresh(!refresh);
  };
  const handlerLeesToCart = (id) => {
    deleteToCart(id);
    setRefresh(!refresh);
  };
  const removeItemCart = (id) => {
    removeItem(id);
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productList = getLocalStorage("cart");
      if (productList && productList?.cart.length > 0) {
        const productsIds = productList?.cart.map((item) => item.id);
        // Utiliza Promise.all para esperar a que todas las promesas se resuelvan
        const data = await Promise.all(
          productsIds.map(async (id) => {
            const res = await getOneProduct(id);
            return res;
          })
        );

        data.map((product) => {
          const coincidence = productList?.cart.find(
            (item) => item.id == product.id
          );
          product.quantity = coincidence.quantity;
        });
        setProducts(data);
      } else {
        setProducts([]);
      }
    };

    fetchProductDetails();
  }, [refresh]);

  return (
    <>
      <Box sx={{ height: "60vh", marginTop: "200px" }}>
        <Paper
          elevation={3}
          style={{ padding: "20px", maxWidth: "700px", margin: "20px auto" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" gutterBottom>
              Lista de Productos
            </Typography>
            <CustomButton onClick={cleanCart} text={"Limpiar Carrito"} />
          </Box>

          {products.length > 0 &&
            products.map((product, index) => (
              <Box key={index}>
                <ListItem>
                  <CardMedia
                    component={"img"}
                    image={product.image}
                    key={index}
                    sx={{ width: "60px", marginRight: "20px" }}
                  />

                  <ListItemText secondary={` ${product.title}`} />
                  <ListItemText
                    secondary={
                      product.quantity && `Cantidad: ${product?.quantity}`
                    }
                  />

                  <ListItemText secondary={`Precio: ${product.price}`} />
                  <button
                    style={{ width: "50px" }}
                    onClick={() => handlerAddToCart(+product.id)}>
                    +
                  </button>
                  <button
                    style={{ width: "50px" }}
                    onClick={() => handlerLeesToCart(+product.id)}>
                    -
                  </button>
                  <button
                    style={{ width: "50px" }}
                    onClick={() => removeItemCart(product.id)}>
                    *
                  </button>
                </ListItem>
                <Divider />
              </Box>
            ))}
        </Paper>
      </Box>
    </>
  );
};
