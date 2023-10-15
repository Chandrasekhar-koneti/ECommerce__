import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Nav = ({ setOpenCart, setOpenWishlist }) => {
  const [categories, setCategories] = useState([]);
  let apiUrl = "https://fakestoreapi.com/products/categories";
  async function getAllCategories() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    setCategories(data);
  }

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="flex space-x-4 text-white font-bold">
      {categories.map((category) => {
        return (
          <Link key={category} to={`category/${category}`}>
            <p className="capitalize">{category}</p>
          </Link>
        );
      })}

      <ShoppingCartOutlinedIcon
        onClick={() => {
          setOpenCart(true);
        }}
      />

      <FavoriteBorderOutlinedIcon
        onClick={() => {
          setOpenWishlist(true);
        }}
      />
    </div>
  );
};

export default Nav;
