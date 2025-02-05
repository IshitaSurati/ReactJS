import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(({ id, title, image }) => (
            <div key={id} className="product-card">
              <img src={image} alt={title} className="product-image" />
              <Link to={`/product/${id}`} className="product-title">
                {title}
              </Link>
            </div>
          ))
        ) : (
          <h2 className="no-products">No products available</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
