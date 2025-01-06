import React, { useState } from "react";
import Timer from "./Timer";


const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    img: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    alert("Product data submitted successfully!");
    setFormData({
      productName: "",
      description: "",
      price: "",
      category: "",
      img: "",
    });
  };

  return (
    <div className="container">
      <h1>Product Form</h1>
      <form onSubmit={handleSubmit}>

          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
            required
          />


        
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            required
            rows="4"
          ></textarea>
    

       
          <label>Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            required
          />
      

    
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="home">Home</option>
          </select>
       

        
          <label htmlFor="img">Image URL</label>
          <input
            type="url"
            id="img"
            name="img"
            onChange={handleChange}
            placeholder="Enter image URL"
          />
      

        <button type="submit">Submit</button>
      </form>
      <div className="Counter">
        <Timer/>
      </div>
    <div className="FormDataDisplay">
    {submittedData.length > 0 && (
        <div className="submitted-products">
          <h2>Submitted Products</h2>
          {submittedData.map(
            ({ productName, description, price, category, img }, index) => (
              <div className="submitted-product" key={index}>
                <h3>{productName}</h3>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                {img && (
                  <img
                    src={img}
                    alt={`${productName} image`}
                  />
                )}
                <button onClick={() => alert(`Buying ${productName}`)}>Buy</button>
              </div>
            )
          )}
        </div>
      )}
    </div>

    </div>
  );
};

export default ProductForm;
