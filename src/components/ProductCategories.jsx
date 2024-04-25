import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../common/context/ProductsContext";
import { ProductCard } from "./ProductCard";

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
  }, [products]);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexWrap: "wrap",
        gap: "37px",
        margin: "200px 0 90px 0",
        justifyContent: "center",
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
    </div>
  );
};
