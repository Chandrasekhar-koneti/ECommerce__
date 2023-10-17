import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AppContext from "../context/AppContext/AppContext";

const ProductCard = ({ product }) => {
  let { addProductsToWishlist, addProductsToCart } = useContext(AppContext);
  return (
    <div className="w-1/4 border border-transparent shadow-lg mr-4 mt-4 p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-600">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="h-64 mx-auto" />

        <h3 className="mt-3">{product.title}</h3>
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <p>$ {product.price}</p>
        </div>
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-sm"
          onClick={() => {
            addProductsToCart(product);
          }}
        >
          Add To Cart
        </button>
        <div>
          <FavoriteBorderOutlinedIcon
            onClick={() => {
              addProductsToWishlist(product);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
