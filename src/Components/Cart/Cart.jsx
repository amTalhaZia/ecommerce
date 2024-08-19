import React from 'react';
import { useCart } from '../../Card_context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useCart();

  const deleteHandler = (id) => {
    const index = cart.findIndex((cartItem) => cartItem.id === id);
    console.log(index)
  
    if (index !== -1) {
      const updatedCart = [
        ...cart.slice(0, index),
        ...cart.slice(index + 1)
      ];
  
      setCart(updatedCart);
    }
  };
  
  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{product.title}</h2>
                <p className="cart-item-price">${product.price}</p>
                <button className="delete-button" onClick={() => deleteHandler(product.id)}>Cancel</button>
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
