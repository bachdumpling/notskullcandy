import StarsRating from 'react-star-rate';
import { useEffect, useState } from 'react';
import { XIcon } from '@heroicons/react/outline'

function ProductPageCard({ user, productData }) {
    let reviewArr = Object.values(productData.reviews)
    const [newProductData, setNewProductData] = useState([])
    // console.log(Object.values(productData.reviews))

    let itemRating
    let itemComment

    const [ratingValue, setRatingValue] = useState(itemRating)
    const [commentValue, setCommentValue] = useState(itemComment)

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [newRating, setNewRating] = useState(0)
    const [newComment, setNewComment] = useState('')
    const [buttonPopup, setButtonPopup] = useState(false)

    useEffect(() => {
    },[])

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
        .then(r => r.json())
    }

    function handleDelete(item) {
        fetch(`/reviews/${item.id}`, {
            method: "DELETE"
        })
    }

    function handleEdit(item, e) {
        e.preventDefault()
        console.log(item)
    }

    function submitEdit(item, e){
        e.preventDefault()
        fetch(`/reviews/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: newRating, comment: newComment, user_id: user.id, product_id: productData.id
            })
        })
    }

    function displayEditDelete(item) {
        if (user.id === item.user_id) {
            return (<div className='grid grid-flow-row grid-rows-1 grid-cols-2 pb-5'>
                <div className='w-16 text-center border-2 mr-5 text-black bg-[#EDEDED] text-xs font-bold tracking-wider'>
                    <button onClick={(e) => {
                        setRatingValue(item.rating)
                        setCommentValue(item.comment)
                        setButtonPopup(!buttonPopup)
                        handleEdit(item, e)}}>Edit</button>
                </div>
                <div className='text-center border-2 ml-5 text-black bg-[#EDEDED] text-xs font-bold tracking-wider'>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
            </div>)
        } else {
            return <div></div>
        }
    }


    const popUp = (
        (buttonPopup)
            ? (<div className='flex justify-center items-center z-10 top-0 left-0 fixed w-full h-screen bg-[#f1f0f033]'>
                <div className='relative px-32 py-16 w-full max-w-[640px] bg-black'>
                    <div className='flex justify-end'>
                        <button className='text-white scale-125 pb-5' onClick={() => setButtonPopup(!buttonPopup)}>
                            x
                        </button>
                    </div>
                    <div className='grid justify-items-center'>
                        <form onSubmit={(e) => submitEdit(e)} className='flex flex-col w-11/12'>
                            <label className='text-white font-bold text-md mb-2'>Rating:</label>
                            <input defaultValue={ratingValue} onChange={(e) => setNewRating(e.target.value)} type='number' name="rating" min="1" max="5" className='h-6 w-10 text-center mb-5 border-none outline-none'></input>

                            <label className='text-white font-bold text-lg mb-2'>Comment:</label>
                            <input defaultValue={commentValue} onChange={(e) => setNewComment(e.target.value)} type='text' name='comment' className='pl-2 h-14 mb-10 border-none outline-none text-lg' ></input>
                            <div className='flex justify-center'>
                                <button className='text-black bg-[#EDEDED] text-xs font-bold tracking-wider w-6/12 h-10 border-2'>Edit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>)
            : ""
    )

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

            <div>
                {popUp}
            </div>

        </div>
    )
}

export default ProductPageCard