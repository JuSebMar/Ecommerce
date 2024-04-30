import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../common/context/ProductsContext";
import { ProductCard } from "./ProductCard";
import { Box, Typography } from "@mui/material";

export const ProductCategories = () => {
  const [filterproduct, setFilterProduct] = useState([]);
  const { products, getAllProducts } = useProductContext();
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      await getAllProducts();
    };
    fetch();
  }, [params]);

  useEffect(() => {
    const filterProducts =
      products.length > 0 &&
      products.filter((product) => product.category == params.category);
    setFilterProduct(filterProducts);
    console.log(params.category);
  }, [products]);
  console.log(params.category);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <Box
        sx={{
          margin: "120px 0px 0px 60px",
        }}>
        <Typography sx={{ fontSize: 40 }}>{params.category}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px ",
          flexWrap: "wrap",
          margin: "30px 0 90px 60px",
        }}>
        {filterproduct.length > 0 &&
          filterproduct.map((product) => (
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
    </Box>
  );
};
