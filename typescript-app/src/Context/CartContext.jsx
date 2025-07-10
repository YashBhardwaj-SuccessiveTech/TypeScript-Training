// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.
"use client"
import React, { createContext, useState } from 'react'
import { Productlist, ShoppingCart } from '../src/app/Assignment-2/Question11/ShoppingCart';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [cart , setcart] = useState([]);

  function addItems(product){
    setcart([...cart,product]);
  }

  function removeItem(id){
    setcart(cart.filter((ele)=>ele.id!==id));
  }

  const total= cart.reduce((accu,currval)=>accu + currval.price,0);

  return (
    <CartContext.Provider value={{cart, setcart, addItems, removeItem, total}}>
      {/* <Productlist/>
      <ShoppingCart/> */}
      {children}
    </CartContext.Provider>
  )
}
