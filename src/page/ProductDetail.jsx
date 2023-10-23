import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../Product';

const ProductDetail = ({fetItems}) => {

  const {id} = useParams();

  const {image, title, amount} = fetItems
 


  return (
    <>
    
      {title}
    
    </>
  )
}

export default ProductDetail