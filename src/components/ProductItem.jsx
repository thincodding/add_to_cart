import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {

    // add to cart 

    const { addToCart } = useContext(CartContext)

    const { id, image, title, price } = product


    return (
        <>

            <div className='border h-[300px] group'>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='flex justify-center items-center'>
                        <img className='max-w-[160px] group-hover:scale-110 cursor-pointer transition-all duration-300 ' src={image} alt="" />
                    </div>
                </div>
                <div>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
                <div onClick={() => addToCart(product, id)}>
                    <button className='bg-blue-500 px-3 p-2 text-white hover:bg-blue-400 transition-all duration-300'>Add to cart</button>
                </div>
                <div className='mt-5'>
                    <Link to={`/detail/${id}`} className='bg-red-500 px-3 p-2 text-white '>View</Link>
                </div>
            </div>

        </>
    )
}

export default ProductItem