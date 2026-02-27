import React from 'react'
import "./style.css"
const Product = ({ productList }) => {
    const handleClick = (product)=>{
        console.log(`The name of product is ${product.name} and price is $${product.price}`);
    }
    return (
      <div className="outer">
        {productList.map((product,idx) => {
         return (
           <div className="inner">
             <h5 id={idx}>{product.name}</h5>
             <h5 id={idx}>{product.price}</h5>
             <button onClick={() => handleClick(product)}>Add to cart</button>
           </div>
         );
        })}
        
      </div>
    );
};

export default Product