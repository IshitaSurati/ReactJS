import React from "react";
import ProductForm from "./ProductForm";
import Timer2 from "./Timer2";
import Card from "./Card";

function List() {
  return (
    <>
    <div>
    <ProductForm />
    </div>
      <div className="Counter">
        <Timer2/>
      </div>
      <div>
        <Card/>
      </div>
    </>
  );
}

export default List;
