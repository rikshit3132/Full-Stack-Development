import React from "react";
import Product from "./Product_list/Product";

const ProductList = () => {
  const productList = [
    {
      name: "Mobile",
      price: 3000,
    },
    {
      name: "Laptop",
      price: 5000,
    },
    {
      name: "Mouse",
      price: 500,
    },
  ];
  return (
    <div>
      <Product productList={productList} />
    </div>
  );
};

export default ProductList;
