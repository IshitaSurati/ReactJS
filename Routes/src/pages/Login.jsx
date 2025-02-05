import React from "react";

function Login() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form">
        <input type="text" placeholder="Username" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
