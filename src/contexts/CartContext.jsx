import React, { createContext, useEffect, useState } from 'react'
import { Product } from '../Product';


export const CartContext = createContext();

const CartProvider = ({children}) => {

    //add to cart
    const [cart, setCart] = useState([])
    //for condition1
    // const addToCart = (product,id) => {
    //     console.log(`${product} cart`)
    // }

    // for condition2 
    // const addToCart = (product, id) => {
    //     const newItem = {...product, amount:1}
    //     console.log(newItem)
    // } 

    // for condition 3 show in cardItem

    const addToCart = (product, id) => {
        const newItem = {...product, amount:1};
        const cartItem = cart.find((item) => {
            return item.id === id
        });

        if(cartItem){
            const newCart = [...cart].map(item =>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount + 1};
                }else{
                    return item;
                }
            })
            setCart(newCart);
        }else{
            setCart([...cart, newItem])
        };
    };

    //end of add to cart

    //for remmove cart

    const removeCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id
        });

        setCart(newCart)
    }
    // end of remove cart

    // for amount items
    const [itemAmount, setItemAmount] = useState(0)
    //increase amount Item
    useEffect(()=>{
        
        if(cart){
            const amount = cart.reduce((calAmount, currentItem) =>{
                return calAmount + currentItem.amount;
            }, 0);

            setItemAmount(amount)
        }
    })
    // end of increase amount

    //increase amount Items
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id)
    } 
    // end of incarease amount item

    // for decrease amount item
    const decreaseAmount = (id) => {
       const cartItem = cart.find((item) => {
            return item.id === id
       });

       if(cartItem){
        const newCartMinus = cart.map((item) => {
            if(item.id === id){
                return {...item, amount: cartItem.amount - 1};
            }else{
                return item
            }
        });

        setCart(newCartMinus)
       }

       if(cartItem.amount < 2){
           // removeCart(id)
           removeCart(false)
       }
    }

    //end of decrease amount 

    // for clear cart
    const clearCart = () => {
        setCart([])
    }
    // end of clear Cart

    //const Total Amount

    const [total, setTotal] = useState(0)
    useEffect(()=>{
        const total = cart.reduce((cartCalAll, currentItem) => {
            return cartCalAll + currentItem.price * currentItem.amount;
        }, 0)

        setTotal(total)
    })


  return (
    <CartContext.Provider value={{ addToCart, cart, setCart, removeCart, itemAmount, setItemAmount, increaseAmount, decreaseAmount, clearCart, total, setTotal}}>{children}</CartContext.Provider>
  )
}

export default CartProvider