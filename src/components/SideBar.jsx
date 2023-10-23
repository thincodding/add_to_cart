import React, { createContext, useContext } from 'react'
import {HiArrowLongRight} from 'react-icons/hi2'
import { SidebarContext } from '../contexts/SidebarContext'
import CardItem from './CardItem'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
import { clear } from '@testing-library/user-event/dist/clear'
const SideBar = () => {

    // add cart

    const {cart,itemAmount,clearCart, total} = useContext(CartContext)

    const {isOpen,handleClose} = useContext(SidebarContext)

  return (
    <>
    
        <div className={`${isOpen ? 'right-0' : '-right-full'} h-full w-full bg-white shadow-2xl fixed z-10 top-0 md:w-[40%] lg:w-[30%] xl:w-[25%] transition-all duration-300`}>
            <div className='flex justify-between items-center py-10 mx-10 border-b'>
                <div className='text-2xl font-bold'>Your Shopping is ({itemAmount})</div>
                <div onClick={()=>handleClose()} className='cursor-pointer text-2xl'>
                    <HiArrowLongRight/>
                </div>
            </div>

            <div className='h-[500px] overflow-hidden overflow-y-auto border-b'>
                {
                    cart.map((item) =>{
                        return(
                            <CardItem item={item} key={item.id}/>
                        )
                    })
                }
            </div>
            <div className='flex justify-between py-5 px-10 items-center'>
                <div className='text-1xl font-bold'>TOTAL:$ {`${parseFloat(total).toFixed(2)}`}</div>
                <div onClick={()=> clearCart()} className='bg-red-500 flex justify-center items-center p-3 text-white rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300 '>
                    <AiFillDelete/>
                </div>  
            </div>
            <Link to={'/'} className='bg-gray-200 justify-center flex py-4 px-2 mx-10 rounded-lg mt-5 hover:bg-gray-300 transition-all duration-300'>View Cart</Link>
            <Link to={'/'} className='bg-red-500 text-white mt-4 justify-center flex py-4 px-2 mx-10 rounded-lg hover:bg-red-600 transition-all duration-all'>Check out</Link>
        </div>
    
    </>
  )
}

export default SideBar