import { TYPES } from "../actions/shoppingActions";
import React, { createContext, useContext, useReducer } from "react";
import { shoppingInitialS, shoppingReducer } from "../reducers/shoppingReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialS);

  const addToCart = (id) => {
    dispatch({
      type: TYPES.Add_To_Cart,
      payload: id,
    });
  };
  const deleteToCart = (id) => {
    dispatch({ type: TYPES.Remove_One_Cart, payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: TYPES.Remove_All, payload: id });
  };
  return (
    <CartContext.Provider
      value={{ state, addToCart, deleteToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartContext debe ser utilizado dentro de un CartProvider"
    );
  }
  return context;
};
