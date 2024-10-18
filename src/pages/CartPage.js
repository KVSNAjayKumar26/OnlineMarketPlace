import React from 'react'

const CartPage = ({ cart}) => {
  return (
    <div className='cart'>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
}

export default CartPage