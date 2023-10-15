import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

const Home = () => {
  const [products, setaProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let url = "https://fakestoreapi.com/products/";
  async function getAllProducts() {
    let response = await fetch(url);
    let data = await response.json();
    setaProducts(data);
    setLoading(false);
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
      {loading
        ? "Fetching all products"
        : products.map((product) => {
            return <ProductCard product={product} />;
          })}
    </div>
  );
};

export default Home;
