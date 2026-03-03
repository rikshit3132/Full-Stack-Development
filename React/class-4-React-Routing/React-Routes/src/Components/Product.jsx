import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
// import { useParams } from 'react-router-dom';

const Product = () => {
    const[products,setProducts] = useState(null);
    // const {pId} = useParams();
    useEffect(() => {
      const result = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const formattedData = await data.json();
        console.log(formattedData);
        setProducts(formattedData);
      };
      result();
    }, []);
    console.log(products);
  return (
    <div>
      {/* {product === null ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h3>Product Id: {product.id}</h3>
          <h3>Product Title: {product.title}</h3>
          <h3>Product Price: {product.price}</h3>
        </>
      )} */}
      {!products ? <h2>Loading....</h2> : <ProductCard products={products} />}
    </div>
  );
}

export default Product