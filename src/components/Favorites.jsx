import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useState, useEffect } from "react";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavorite = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return response.json(); // Devuelve el objeto JSON de la respuesta
    };

    const favoriteStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoriteStorage); // Establece los favoritos desde localStorage

    // Usa Promise.all para obtener todos los productos favoritos en paralelo
    Promise.all(favoriteStorage.map((id) => fetchFavorite(id))).then(
      (results) => {
        setProducts(results); // Establece el estado de productos con los resultados de fetch
      }
    );
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "120px 0px 0px 50px",
        gap: "10px",
      }}>
      <Typography variant="h3">Favorites</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "50px",
          gap: "18px",
        }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            description={product.description}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </Box>
    </Box>
  );
};
