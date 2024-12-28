import React from "react";
import Footer from "./footer";

const Testing = ({ name }) => {
  return (
    <div className="mid">
      <h1>Hello {name}!</h1>
      <h4>How are you, {name}?</h4>
      <p>This is a testing component.</p>
      <Footer name={name} />
    </div>
  );
};

export default Testing;
