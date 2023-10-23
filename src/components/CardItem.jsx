import React, { useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus, } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'
import { Form, Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const CardItem = ({ item }) => {


    //context

    const {removeCart, increaseAmount,decreaseAmount} = useContext(CartContext)

    const { id, title, image, price, amount } = item


    return (
        <>

            <div className=' border-b'>
                <div className='flex py-4 px-10 space-x-5'>
                    <Link to={'/'}>
                        <img className='max-w-[100px]' src={image} />
                    </Link>

                    <div className='flex flex-col w-full'>
                        <div className='flex justify-between items-center'>
                            <div>{title}</div>
                            <div onClick={()=>removeCart(id)} className='cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 '>
                            <div className='flex w-[100px] justify-between border px-2 py-2 mt-5 items-center'>
                                <div onClick={()=> decreaseAmount(id)} className='cursor-pointer'>
                                    <AiOutlineMinus />
                                </div>
                                <div>{amount}</div>
                                <div onClick={()=> increaseAmount(id)} className='cursor-pointer'>
                                    <MdAdd />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='font-bold text-orange-500'>$ {price}</p>
                            </div>
                            <div className='mt-5'>
                                <p className='font-bold text-gray-500 text-sm'>$ {`${parseFloat(price * amount).toFixed(2)}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem