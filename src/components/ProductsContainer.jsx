import React, { useEffect } from "react";
import { useProductContext } from "../common/context/ProductsContext";
import { ProductCard } from "./ProductCard";
import { Box } from "@mui/material";

export const ProductsContainer = () => {
  const { products, getAllProducts } = useProductContext();

  useEffect(() => {
    const fetch = async () => {
      await getAllProducts();
    };
    fetch();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        gap: "20px",
        margin: "100px 0 90px 0",
        justifyContent: "center",
        padding: "20px",
      }}>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            image={product.image}
            description={product.description}
            title={product.title}
            price={product.price}
            key={product.id}
            id={product.id}
          />
        ))}
    </Box>
  );
};
