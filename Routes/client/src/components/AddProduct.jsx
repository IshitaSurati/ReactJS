import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title || !image || !price || !description) {
      setMessage("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please log in to add a product.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/products/add-product",
        { title, image, price, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message);
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage(error.response?.data?.message || "Error adding product");
      setLoading(false);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" disabled={loading}>{loading ? "Adding..." : "Add Product"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;
