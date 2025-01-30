import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import API from "./config/API";

function Userform() {
  const validationSchema = z.object({
    name: z
      .string()
      .min(2, "Min 2 characters required")
      .max(25, "Max 25 characters required"),
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Min 8 characters required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@%_$#&?])(?=.*[0-9]).{8,}$/,
        "Password must contain uppercase, lowercase, number, and symbol"
      ),
  });

  const createUser = async (name, email, password) => {
    try {
      const response = await API.post("users", {
        name,
        email,
        password,
      });
      console.log("User created successfully:", response.data);
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    createUser(data.name, data.email, data.password);
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
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <label>Name:</label>
        <input
          type="text"
          {...register("name")}
          style={{ border: getBorder("name") }}
          className="input-field"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
          style={{ border: getBorder("email") }}
          className="input-field"
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        <label>Password:</label>
        <input
          type="password"
          {...register("password")}
          style={{ border: getBorder("password") }}
          className="input-field"
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default Userform;
