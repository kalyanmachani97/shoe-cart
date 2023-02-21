import React, { createContext, useContext, useReducer, useState } from 'react';
import { cartReducer } from './Reducer';
const Cart=createContext();
const Context = ({children}) => {
    const [Products,setProduct]=useState([
        {
        image:'https://5.imimg.com/data5/PO/HQ/MY-18909858/studs-shoes-blue-1-1000x1000.jpg',
        name: 'Messi Named Shoes',
        category:'Shoes',
        seller: 'Messi',
        id:30,
        price: 3999
        },
        {
            image:'https://www.soccerbible.com/media/85576/messi-gold2.jpg',
            name:'Messi Gold Shoes',
            seller:'Messi',
            id:10,
            price: 12999
        },
        {
            image:'https://m.media-amazon.com/images/I/41L9rZtFnoL.jpg',
            name:'Ronaldo shoes',
            seller:'Ronaldo',
            id:7,
            price:4999
        },
        {
            image:'https://m.media-amazon.com/images/I/71X5ufr-hFL._UL1500_.jpg',
            name:'Neymar Shoes',
            seller:'Neymar',
            id:11,
            price:3999
        },
    ])
    const [state,dispatch]=useReducer(cartReducer,{
        Products: Products ,
        cart:[]
    })
  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
   
  )
}

export default Context;
export const CartState= ()=>{
    return useContext(Cart) ;
}