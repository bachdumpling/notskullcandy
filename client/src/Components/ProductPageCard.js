import StarsRating from 'react-star-rate';

function ProductPageCard({ product }) {
    console.log(product)

    return (
        <div>
            <div className='w-full h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${product.img_url})` }}>
                <div className="absolute flex flex-col inset-y-96 top-1/3 left-80 w-2/12">
                    <div className="text-white">
                        <div className="">
                            <h1 className="text-6xl font-bold uppercase flex flex-col pb-2">{product.description}</h1>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold capitalize flex flex-col pb-2">{product.name}</h2>
                            <h3 className="text-xl font-bold capitalize flex flex-col pb-2">${product.price}</h3>
                        </div>
                    </div>
                    <div className='bg-transparent pt-5 pb-10 w-[-16] text-white text-xs'>
                            <StarsRating defaultValue={product.rating} /> 
                            213 Reviews
                    </div>
                    <div>
                        <button className="bg-[#EDEDED] w-full h-12 text-center text-xs font-bold tracking-wider">ADD TO CART</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductPageCard