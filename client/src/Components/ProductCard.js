import React from 'react'

function ProductCard({ product }) {
    function handleClick(e){
        console.log(e.target)
    }

    return (
        <div onClick={(e) => handleClick(e)} className='pb-20 cursor-pointer'>
            <div className='flex items-center justify-center transform transition duration-500 hover:scale-120 pb-10'>
                <img className='h-8/12 w-8/12' src={product.product_img} />
            </div>
            <p className='text-center text-sm'>{product.name}</p>
            <p className='text-center text-sm'>${product.price}</p>
        </div>
    )
}

export default ProductCard