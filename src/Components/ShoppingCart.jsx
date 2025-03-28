import React from 'react';

//Redux Hooks: The component uses useDispatch and useSelector hooks 
//from react-redux to interact with the Redux store. useDispatch is used to
//dispatch actions, and useSelector is used to extract data from the Redux store.
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import './ShoppingCart.css'; 

//Function Component: The ShoppingCart component is a functional component 
//declared using the arrow function syntax.

const ShoppingCart = () => {

    //dispatching actions to store
    const dispatch = useDispatch();
    //useSelector extracts data from store
    //cart Items extractin the info on the cartItems
    const cartItems = useSelector(state => state.cart.cartItems);
    //countin the total price of the items in cart -> multiplyin item*quantity and the summing up
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    //EVENT HANDLERS
    //finding the product id to be removed
    const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
    }
    //clearing all items
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    //handling increaseItemQuantity
    const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    }
    //handling decreaseItemQuantity
    const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    }

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       {cartItems.map(item => (
        <li key={item.Id} className="cart-item">
            <span>{item.name}-{item.price}</span>
            <div className="quantity-controls">
                <button className="quantity-control-btn" onClick={()=>handleDecreaseQuantity(item.Id)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-control-btn" onClick={()=>handleIncreaseQuantity(item.Id)}>+</button>
            </div>
            <button className="remove-item-btn" onClick={()=> handleRemoveItem(item.Id)}>Remove</button>
        </li>

       ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
    </div>

    <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>  
    </>
  );
};

export default ShoppingCart;
