import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="details-container">
      <h1 className="details-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="details-image" />
      <p className="details-description">{product.description}</p>
      <h3 className="details-price">${product.price}</h3>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default Details;
