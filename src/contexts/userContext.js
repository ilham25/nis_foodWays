import { createContext, useReducer } from "react";

export const UserContext = createContext();

const LOCAL_KEY = "ways-food-user";

const initialState = {
  isLogin: false,
  users: [],
  loggedUser: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        loggedUser: payload,
      };
      break;
    case "LOGOUT":
      localStorage.removeItem(`${LOCAL_KEY}-login`);
      return {
        ...state,
        isLogin: false,
        loggedUser: null,
      };
      break;

    default:
      throw new Error("Out of context");
      break;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
