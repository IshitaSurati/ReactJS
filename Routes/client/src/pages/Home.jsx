import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const role = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  const getProducts = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/products"); 
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
          products.map(({ _id, title, image, adminId }) => (
            <div key={_id} className="product-card">
              <img src={image} alt={title} className="product-image" />
              <Link to={`/product/${_id}`} className="product-title">
                {title}
              </Link>

              {/* Superadmin ko admin details dikhenge */}
              {role === "superadmin" && adminId && (
                <p className="admin-details">
                  <strong>Added by:</strong> {adminId.name} ({adminId.email})
                </p>
              )}
            </div>
          ))
        ) : (
          <h2>No products available</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
