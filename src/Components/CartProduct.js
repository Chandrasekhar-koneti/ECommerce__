import React, { useContext } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AppContext from "../context/AppContext/AppContext";
const CartProduct = ({ product }) => {
  let { removeProductsFromCart, handleQuantityChange } = useContext(AppContext);
  return (
    <div className="flex space-x-5 border border-gray-200 mt-3 pt-3">
      <div>
        <img alt={product.title} src={product.image} className="h-16 w-16" />
      </div>
      <div className="w-full">
        <h2>{product.title}</h2>
        <input
          type="number"
          value={product.quantity}
          onChange={(e) => {
            handleQuantityChange(product.id, e.target.value);
          }}
        />
        <span>
          <DeleteOutlineIcon
            className="text-red-500"
            onClick={() => {
              removeProductsFromCart(product);
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
