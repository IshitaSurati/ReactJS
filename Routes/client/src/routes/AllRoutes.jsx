import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Details from "../pages/Details";
import AddProduct from "../components/AddProduct"; 

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
};

export default AllRoutes;
