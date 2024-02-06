import { Box, Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { useState, useEffect } from "react";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [producs, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavorite = async (id) => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const items = await data.json();
      setProducts((prevProducts) => [...prevProducts, items]);
    };

    const favoriteStorage = JSON.parse(localStorage.getItem("favorites")) || [];
    favoriteStorage.map((id) => {
      fetchFavorite(id);
    });

    setFavorites(favoriteStorage);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "300px",
        gap: "10px",
      }}>
      <Typography variant="h3">Mis Favoritos</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "50px",
          gap: "18px",
        }}>
        {producs.map((product, index) => (
          <ProductCard
            image={product.image}
            description={product.description}
            title={product.title}
            price={product.price}
            key={index}
            id={product.id}
          />
        ))}
      </Box>
    </Box>
  );
};
