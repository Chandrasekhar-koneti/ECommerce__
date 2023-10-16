import React, { useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  let addProductsToCart = (product) => {
    //   setCartItems([...cartItems, product]);
    const exisistingProduct = cartItems.find((p) => p.id === product.id);
    if (exisistingProduct) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: +p.quantity + 1 } : p
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success("Product Added Sucessfully");
  };

  let handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartItems(updatedCart);
    toast.success("Cart Item is Updated");
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
      value={{
        cartItems,
        addProductsToCart,
        removeProductsFromCart,
        handleQuantityChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
