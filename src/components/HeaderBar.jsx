import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/SidebarContext'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../contexts/CartContext'

const HeaderBar = () => {

    const { isOpen, setIsOpen } = useContext(SidebarContext)
    // amount

    const {itemAmount} = useContext(CartContext)

    return (
        <>

            <div className="container mx-auto py-10 flex justify-between">
                <div className="row">
                    <Link to={'/'}>Home</Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='relative'>
                    <div  className='text-2xl cursor-pointer'>
                        <AiOutlineShoppingCart />
                    </div>
                    <div className='absolute top-2 -right-4 cursor-pointer'>
                        <p className='bg-red-500 h-6 w-6 flex justify-center items-center text-white rounded-full'>{itemAmount}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderBar