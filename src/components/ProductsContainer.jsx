import React, { useEffect } from "react";
import { useProductContext } from "../common/context/ProductsContext";
import { ProductCard } from "./ProductCard";

export const ProductsContainer = () => {
  const { products, getAllProducts } = useProductContext();

  useEffect(() => {
    const fetch = async () => {
      await getAllProducts();
    };
    fetch();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        gap: "37px",
        margin: "200px 0 90px 0",
        justifyContent: "center",
        padding: "50px",
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
    </div>
  );
};
