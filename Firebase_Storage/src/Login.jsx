import React, { useState } from "react";
import { handleSignup, handleLogin } from "./auth";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <input className="border p-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mt-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={() => handleSignup(email, password)}>Sign Up</button>
      <button className="bg-green-500 text-white px-4 py-2 mt-2" onClick={() => handleLogin(email, password)}>Login</button>
    </div>
  );
};

export default Login;