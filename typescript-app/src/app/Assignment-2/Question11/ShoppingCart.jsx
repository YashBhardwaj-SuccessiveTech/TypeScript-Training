// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.
"use client"
import React, { useContext } from 'react'
import { CartContext } from '../../../../Context/CartContext'

export function Productlist(){
  const products= [
    {id:1, name:"laptop", price:25},
    {id:2, name:"watch", price:25},
    {id:3, name:"tablet", price:25},
    {id:4, name:"phone", price:25},
  ];
  const {addItems} = useContext(CartContext);

  return(
    <div>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name} - {product.price}
          <button onClick={()=>addItems(product)}>Add Item</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ShoppingCart(){
  const {total, removeItem, cart} = useContext(CartContext);

  return(
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  )
}

