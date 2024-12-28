import React from "react";

const Greeting = ({ name }) => {
  const greetingMessage = name ? `Hello, ${name}!` : 'Welcome, Guest!';
  return <h1>{greetingMessage}</h1>;
};

export default Greeting;