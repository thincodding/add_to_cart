import React, { createContext } from 'react'
import { FetchProduct, Product } from '../Product'
import ProductDetail from './ProductDetail';



const DetailApi = () => {
  return (
    <>
    
        {
            FetchProduct.map((fetItems) => {
                return(
                    <ProductDetail fetItems={fetItems} key={fetItems.id}/>
                )
            })
        }

    </>
  )
}

export default DetailApi