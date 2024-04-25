import { TYPES } from "../actions/shoppingActions";
import {
  getLocalStorage,
  setLocalStorageCart,
} from "../functions/localStorage";

// estado inicial del carrito
export const shoppingInitialS = {
  cart: getLocalStorage("cart")?.cart || [],
};

// acciones

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.Add_To_Cart: {
      const itemId = action.payload;
      let itemCart =
        state.cart.length > 0 && state.cart.find((item) => item.id === itemId);

      const updatedCart = itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart:
              state.cart.length > 0
                ? [...state.cart, { id: itemId, quantity: 1 }]
                : [{ id: itemId, quantity: 1 }],
          };
      setLocalStorageCart(updatedCart);

      return updatedCart;
    }

    case TYPES.Remove_One_Cart: {
      const itemId = action.payload;
      let itemDelete =
        state.cart.length > 0 && state.cart.find((item) => item.id === itemId);

      const updatedCart =
        itemDelete && itemDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                    }
                  : item
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((item) => item.id !== itemId),
            };

      setLocalStorageCart(updatedCart);

      return updatedCart;
    }

    case TYPES.Remove_All: {
      const itemDelete =
        state.cart.length > 0 &&
        state.cart.find((item) => item.id === action.payload);
      console.log(itemDelete);
      const updateState = itemDelete
        ? {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          }
        : { ...state };

      setLocalStorageCart(updateState);
      return updateState;
    }

    case TYPES.Clean_Cart:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
