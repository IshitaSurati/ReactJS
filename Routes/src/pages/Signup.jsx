import React from "react";

function Signup() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Signup</h2>
      <form className="auth-form">
        <input type="text" placeholder="Username" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
