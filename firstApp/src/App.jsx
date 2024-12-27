// import React from 'react'
import "./App.css";

function App() {
  const divStyle = {
    color: "blue",
    fontSize: "20px",
  };
  return (
    <div className="div">
      <div style={divStyle}>Hello, World!!! 🙋‍♀️🥂</div>
      <p>This is my first react app...😎🤩</p>
      <img
        src="https://cdn.pixabay.com/photo/2018/08/31/08/35/toys-3644073_1280.png"
        alt="img"
        height={300}
        width={500}
        className="img"
      />
    </div>
  );
}

export default App;
