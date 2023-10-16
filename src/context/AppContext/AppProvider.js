import React, { useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  let addProductsToCart = (product) => {
    setCartItems([...cartItems, product]);
    toast.success("Product Added Sucessfully");
  };

  let removeProductsFromCart = (product) => {
    let updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    setCartItems(updatedCartItems);
    toast.success("Item Removed From Cart");
  };
  return (
    <AppContext.Provider
      value={{ cartItems, addProductsToCart, removeProductsFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
