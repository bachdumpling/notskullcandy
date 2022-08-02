import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductCard from './ProductCard'

function Shop() {
    const [data, setData] = useState([])

    function getData(){
        fetch('/products')
            .then(res => res.json())
            .then(setData)
    }

    const productCard = data.map((item) =>{
        return <ProductCard product={item} key={item.id}/>
    })

    return (
        <div>
            <Navbar />
            <div className='bg-white pt-12 pb-20'>
                <h1 className='text-black font-extrabold text-5xl pb-12 text-center'>SHOP</h1>
                {productCard}
            </div>
            <Footer />
        </div>
    )
}

export default Shop