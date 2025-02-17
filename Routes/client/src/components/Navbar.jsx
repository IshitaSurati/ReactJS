import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const role = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {role === "admin" || role === "superadmin" ? (
        <Link to="/add-product">Add Product</Link>
      ) : null}
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
