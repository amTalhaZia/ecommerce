import React from 'react';
import { useCart } from '../../Card_context/CartContext';
import './Cart.css';  

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((product, index) => (
            <li key={index} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{product.title}</h2>
                <p className="cart-item-price">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-cart">Your cart is empty.</div>
      )}
    </div>
  );
};

export default Cart;
