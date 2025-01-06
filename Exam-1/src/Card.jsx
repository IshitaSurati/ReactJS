import React from "react";

function Card({ id, title, price, description, category, image, rating }) {
  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Price: ${price}</strong>
      </p>
      <p>Category: {category}</p>
      <p>
        Rating: {rating.rate} ({rating.count} reviews)
      </p>
      <button>Buy</button>
    </div>
  );
}

export default Card;