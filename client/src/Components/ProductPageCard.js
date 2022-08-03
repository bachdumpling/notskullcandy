import StarsRating from 'react-star-rate';
import { useState } from 'react';
import Cart from './Cart';

function ProductPageCard({ productData }) {
    console.log(productData)

    // const [cartData, setCartData] = useState([])

    // function addToCart(e){
    //     console.log(productData)
    //     setCartData(...cartData, productData)
    // }
    // console.log(cartData)

    // const cart = <Cart cartData={cartData} />

    return (
        <div>
            <div className=' w-[100%] h-[1200px] scale-100 bg-cover bg-right-top relative' style={{ backgroundImage: `url(${productData.img_url})` }}>
                <div className="absolute flex flex-col inset-y-96 top-1/4 left-72 w-2/12">
                    <div className="text-white">
                        <div className="">
                            <h1 className="text-6xl font-bold uppercase flex flex-col pb-2">{productData.description}</h1>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold capitalize flex flex-col pb-2">{productData.name}</h2>
                            <h3 className="text-xl font-bold capitalize flex flex-col pb-2">${productData.price}</h3>
                        </div>
                    </div>
                    <div className='flex flex-col pb-8 bg-transparent'>
                        <div className='scale-75 -translate-x-11'>
                            <StarsRating value={productData.avg_rating} defaultValue={productData.rating} />
                        </div>
                        <h5 className='text-white text-xs'>213 Reviews</h5>
                    </div>
                    <div>
                        <button className="bg-[#EDEDED] w-full h-12 text-center text-xs font-bold tracking-wider">ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className='bg-black pt-14 pb-20'>
                <h1 className='text-white font-extrabold text-5xl pb-12 text-center'>Reviews</h1>

                <div className='grid justify-items-center'>
                    <div className=''>
                        <StarsRating value="5" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPageCard