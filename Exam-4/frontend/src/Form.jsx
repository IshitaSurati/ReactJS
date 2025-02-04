import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import API from "./config/API";

const validationSchema = z.object({
  name: z
    .string()
    .min(2, "Min 2 characters required")
    .max(25, "Max 25 characters required"),
  category: z.string().nonempty("Category is required"),
  price: z
    .number()
    .min(1, "Price must be at least 1")
    .max(100000, "Price too high"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  image: z.any(),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset, 
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const createUser = async (name, category, price, description, image) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image[0]); // Assuming a single file upload

      const response = await API.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      console.log("User created successfully:", response.data);
      setSubmittedData(response.data); // Store the submitted data for display
      reset(); // Clear the form after successful submission
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  const onSubmit = async (data) => {
    createUser(
      data.name,
      data.category,
      data.price,
      data.description,
      data.image
    );
  };

  const value = watch();

  const getBorder = (name) => {
    if (errors[name]) {
      return "1px solid red";
    } else if (value[name] && !errors[name]) {
      return "1px solid green";
    } else {
      return "1px solid black";
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <div>
          <label>Product Name</label>
          <input {...register("name")} style={{ border: getBorder("name") }} />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>
        <div>
          <label>Category</label>
          <select
            {...register("category")}
            style={{ border: getBorder("category") }}
          >
            <option value="">Select category</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
          {errors.category && (
            <p className="error-text">{errors.category.message}</p>
          )}
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            style={{ border: getBorder("price") }}
          />
          {errors.price && <p className="error-text">{errors.price.message}</p>}
        </div>
        <div>
          <label>Description</label>
          <input
            {...register("description")}
            style={{ border: getBorder("description") }}
          />
          {errors.description && (
            <p className="error-text">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label>Product Image</label>
          <input type="file" {...register("image")} />
        </div>
        <button type="submit">Add Product</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Product Data:</h3>
          <ul>
            {Object.keys(submittedData).map((key) => (
              <li key={key}>
                <strong>{key}</strong>: {submittedData[key]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Form;
