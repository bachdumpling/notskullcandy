import React, { useEffect, useState } from 'react'
import ProductPageCard from './ProductPageCard'

function ProductPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch('/products')
            .then(res => res.json())
            .then(res => setData(res))
    }

    const productPageCard = data.map((item) => {
        return <ProductPageCard product={item} key={item.id}/>
    })

    return (
        <div>
            {productPageCard}
        </div>
    )
}

export default ProductPage