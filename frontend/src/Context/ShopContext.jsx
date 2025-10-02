import react, { createContext } from "react";
import allProduct from "../Components/Assets/allProducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { allProduct };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.chidren}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
