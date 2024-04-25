import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    await fetch(`https://fakestoreapi.com/products`).then((data) => {
      data.json().then((res) => setProducts(res));
    });
  };

  const getOneProduct = async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await data.json();
    setProducts(res);
    return res;
  };
  const createProduct = async (dataProduct) => {
    const data = await fetch(`https://fakestoreapi.com/products/`, {
      method: "POST",
      body: dataProduct,
    });
    const res = data.json();
    return res;
  };

  const updateProduct = async (id, dataProduct) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: dataProduct,
    });
    const res = data.json();
    return res;
  };

  const deleteProduct = async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const res = data.json();
    return res;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        createProduct,
        getOneProduct,
        getAllProducts,
        deleteProduct,
        updateProduct,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext debe ser utilizado dentro de un ProductProvider"
    );
  }
  return context;
};

export { ProductProvider, useProductContext };
