import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let url = "https://fakestoreapi.com/products/category/";
  async function getProductsForCategories() {
    setLoading(true);
    let response = await fetch(url + id);
    let data = await response.json();
    setProducts(data);
    setLoading(false);
  }
  useEffect(() => {
    getProductsForCategories();
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
      {loading
        ? "fetching data"
        : products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
    </div>
  );
};

export default Category;
