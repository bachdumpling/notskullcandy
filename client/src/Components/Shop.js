import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Shop({getOneProduct}) {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch('/products')
            .then(res => res.json())
            .then(res => setData(res))
    }

    const productCard = data.map((item) => {
        return <ProductCard product={item} productId = {item.id} key={item.id}  getOneProduct = {getOneProduct}/>
    })

    // const productPageCard = <ProductPageCard productData={oneProductData} key={oneProductData.id}/>


    return (
        <div>
            <div className='bg-white pt-28 pb-20'>
                <h1 className='text-black font-extrabold text-6xl pb-12 text-center'>SHOP</h1>
                <div className='grid grid-flow-row grid-cols-3'>
                    {productCard}
                </div>
            </div>
        </div>
    )
}

export default Shop