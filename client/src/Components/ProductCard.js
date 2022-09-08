import React from 'react'
import { useHistory } from 'react-router-dom'
import ProductPageCard from './ProductPageCard'

function ProductCard({ product, getOneProduct, productId }) {
    console.log(product)
    let history = useHistory()

    function productClick(e) {
        console.log(e)
        getOneProduct(e)
        history.push(`/products/${productId}`)
    }

    return (
        <div onClick={(e) => productClick(product)} className='pb-20 cursor-pointer'>
            <div className='flex items-center justify-center transform transition duration-500 hover:scale-110 pb-10'>
                <img className='h-8/12 w-8/12' src={product.product_img} />
            </div>
            <p className='text-center text-sm'>{product.name}</p>
            <p className='text-center text-sm'>${product.price}</p>
        </div>
    )
}

export default ProductCard