import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  carts: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...payload,
            qty: 1,
          },
        ],
      };
      break;

    default:
      throw new Error("Out of context");
      break;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
