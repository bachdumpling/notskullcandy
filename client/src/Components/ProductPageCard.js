import StarsRating from 'react-star-rate';

function ProductPageCard({ productData }) {
    console.log(productData)

    return (
        <div>
            <div className='w-screen h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${productData.img_url})` }}>
                <div className="absolute flex flex-col inset-y-96 top-1/3 left-72 w-2/12">
                    <div className="text-white">
                        <div className="">
                            <h1 className="text-6xl font-bold uppercase flex flex-col pb-2">{productData.description}</h1>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold capitalize flex flex-col pb-2">{productData.name}</h2>
                            <h3 className="text-xl font-bold capitalize flex flex-col pb-2">${productData.price}</h3>
                        </div>
                    </div>
                    <div className='flex flex-col bg-transparent pt-5 pb-10 w-[-16] text-white text-xs'>
                        <StarsRating defaultValue={productData.rating} />
                        <h5 className='pt-5'>213 Reviews</h5>
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