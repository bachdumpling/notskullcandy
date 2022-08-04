import StarsRating from 'react-star-rate';
import { useEffect, useState } from 'react';
import Cart from './Cart';

function ProductPageCard({ user, productData }) {
    let reviewArr = Object.values(productData.reviews)
    console.log(productData)

    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [newReview, setNewReview] = useState('')

    // console.log(reviewArr)
    function submitRating(e) {
        e.preventDefault()

        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating, comment, user_id: user.id, product_id: productData.id
            })
        })
        // .then(r => r.json())
        //     .then(setFormData(formData))
    }

    function handleDelete(e) {
        console.log(e)
        fetch(`/reviews/${e.id}`, {
            method: "DELETE"
        })
    }

    function handleEdit(e) {
        // fetch(`/reviews/${e.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         rating, comment, user_id: user.id, product_id: productData.id
        //     })
        // })
    }

    function displayEditDelete(item){
        if (user.id === item.user_id) {
            return (<div className='grid grid-flow-row grid-rows-1 grid-cols-2 pb-5'>
            <div className='w-16 text-center border-2 mr-5 text-black bg-[#EDEDED] text-xs font-bold tracking-wider'>
                <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
            <div className='text-center border-2 ml-5 text-black bg-[#EDEDED] text-xs font-bold tracking-wider'>
                <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
        </div>)
        } else {
            return <div></div>
        }
    }


    const reviewCard = reviewArr.map((item) => {
        return (
            <div className='grid justify-items-center border-2 mb-5 w-96'>
                <div className='scale-50'>
                    <StarsRating value={item.rating} />
                </div>
                <p className='text-white text-center text-md mb-5'>{item.comment}</p>

                {user ? displayEditDelete(item) : null}
            </div>
        )
    })


    return (
        <div>
            <div className=' w-[100%] h-[1250px] scale-100 bg-cover bg-right-top relative' style={{ backgroundImage: `url(${productData.img_url})` }}>
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
                        <div className='scale-90 -translate-x-6'>
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
                        {reviewCard}
                    </div>
                </div>
            </div>

            <div>
                <div className='grid justify-items-center pb-20 border-r-2'>
                    <form onSubmit={submitRating} className='flex flex-col w-4/12'>
                        <label className='text-white font-bold text-lg mb-2'>Rating:</label>
                        <input onChange={(e) => setRating(e.target.value)} type='number' name="rating" min="1" max="5" className='h-6 w-10 text-center mb-5 border-none outline-none'></input>

                        <label className='text-white font-bold text-lg mb-2'>Comment:</label>
                        <input onChange={(e) => setComment(e.target.value)} type='text' name='comment' className='pl-2 h-14 mb-10 border-none outline-none text-lg' ></input>
                        <div className='flex justify-center'>
                            <button className='text-black bg-[#EDEDED] text-xs font-bold tracking-wider w-4/12 h-10 border-2'>Add Review</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ProductPageCard