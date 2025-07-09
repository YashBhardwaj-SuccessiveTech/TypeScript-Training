// 11.Build a shopping cart application using the useContext hook.
// Set up a context to manage the state of the shopping cart.
// Create components to display products and a shopping cart.
// Use the useContext hook to access the cart state and update it.
// Allow users to add and remove items from the cart.
// Display the total price of items in the cart.
'use client'
import { CartProvider } from '../../../../Context/CartContext'
import { Productlist, ShoppingCart } from './ShoppingCart'

const Page = () => {
  return (
    <div>
      <CartProvider>
        <Productlist/>
        <ShoppingCart/>
      </CartProvider>
    </div>
  )
}

 export default Page