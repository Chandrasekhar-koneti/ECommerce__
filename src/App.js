import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Components/Pages/Home";
import Category from "./Components/Pages/Category";
import Product from "./Components/Pages/Product";
import Whislist from "./Components/Pages/Whislist";
import Cart from "./Components/Pages/Cart";
import CartComponent from "./Components/CartComponent";

import { useState } from "react";
import WishlistComponent from "./Components/WishlistComponent";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  return (
    <div>
      <HeaderComponent
        setOpenCart={setOpenCart}
        setOpenWishlist={setOpenWishlist}
      />
      <CartComponent openCart={openCart} setOpenCart={setOpenCart} />
      <WishlistComponent
        openWishlist={openWishlist}
        setOpenWishlist={setOpenWishlist}
      />

      <div className="pt-20">
        <Routes>
          <Route index element={<Home />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="whishlist" element={<Whislist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
