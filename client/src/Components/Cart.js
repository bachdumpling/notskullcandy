import React from 'react'
// import CartItem from './CartItem'

function Cart({ cartData }) {
    console.log(cartData)

    return (
        <div>
            <div className='bg-white pt-28 pb-20'>
                <h1 className='text-black font-extrabold text-6xl pb-12 text-center'>CART</h1>
                <div className=' grid justify-items-center'>
                    <table className=' border-b-2 text-lg font-bold'>
                        <thead>
                            <tr>
                                <th scope="col" className="pb-2 pt-8  px-8 w-80 text-left">
                                    Item
                                </th>
                                <th scope="col" className="pb-2 pt-8 px-8 text-center ">
                                    Price
                                </th>
                                <th scope="col" className="pb-2 pt-8 px-8 text-center ">
                                    Quantity
                                </th>
                                <th scope="col" className="pb-2 pt-8 px-8 text-right ">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className='border-t-2'>
                            <tr>
                                <th scope='row' className="pb-8 pt-8 text-left">
                                    <div className='inline-flex'>
                                        <img className='w-24 h-24' src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/334/36673/82daa7f4becfe7382f208fd8c0ff537612eb8d5d5545c45dbc661a713bc9425e__18721.1657126200.png?c=2" />
                                        <div className='pl-5 pt-2'>
                                            <h6 className='text-sm'>Dime 2 True Wireless Earbuds</h6>
                                            <button className='text-sm font-normal'>Remove</button>
                                        </div>
                                    </div>
                                </th>
                                <th className="pb-0 pt-0 text-center">
                                    <p className='text-sm font-normal'> $79.99 </p>
                                </th>
                                <th className='pb-2 pt-16 grid justify-items-center'>
                                    <div className='h-10 w-10 border-2 pt-2'>
                                        <p className='text-sm text-light'> 1 </p>
                                    </div>
                                </th>
                                <th className="pb-0 pt-0 text-center">
                                    <p className='text-sm font-normal'>$79.99</p>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart