import React from 'react'

function ProductCard({product}) {
  return (
    <div>
        {product.product_img}
        {product.name}
        {product.price}
    </div>
  )
}

export default ProductCard