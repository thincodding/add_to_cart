import React from 'react'
import ProductItem from '../components/ProductItem'
import { Product } from '../Product'

const Home = () => {
  return (
    <>
    
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-sm md:max-w-none md:mx-0 gap-[30px]'>
                {Product.map((product) => {
                    return <ProductItem product={product} key={product.id}/>
                })}
            </div>
            
        </div>
    
    </>
  )
}

export default Home