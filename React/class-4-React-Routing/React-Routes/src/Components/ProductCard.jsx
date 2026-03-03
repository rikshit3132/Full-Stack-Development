import React from 'react'

const ProductCard = ({products}) => {
  return (
    <div className='outer'>
        {products.map((product) => {
            return (
              <div className="inner">
                <div>{product.title}</div>
                <div>{product.id}</div>
                <div>{product.price}</div>
                <div>{product.category}</div>
              </div>
            );
        })}
    </div>
  )
}

export default ProductCard