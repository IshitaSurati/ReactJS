// import React from 'react';
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  // Primitive data
  const name = "Ishita";
  const age = 21;

  // Object data
  const userInfo = {
    location: "Surat"
  };

  // Array data
  const hobbies = ["Reading", "Cooking", "Traveling"];

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass all types of props to the child */}
      <ChildComponent name={name} age={age} />
      <ChildComponent userInfo={userInfo} hobbies={hobbies} />
    </div>
  );
}

export default ParentComponent;
