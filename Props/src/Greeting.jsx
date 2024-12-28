import React from "react";

const Greeting = ({ name }) => {
  return (
    <div className="greeting">
      <h1>{name ? `Hello, ${name}!` : "Welcome to our platform!"}</h1>
    </div>
  );
};

export default Greeting;
