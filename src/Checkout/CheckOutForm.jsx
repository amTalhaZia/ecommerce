import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../Card_context/CartContext';
import './CheckOutForm.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



const CheckOutForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
        // console.log('toast.success:', toast.success);

        toast.success(`PaymentMethod created: ${paymentMethod.id}`);
        toast.success(`Simulated payment of $${totalAmount} was successful.`);

      if (onPaymentSuccess) {
        onPaymentSuccess(); 
      }
    }
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="checkout-form-container">
      <h2 className="checkout-form-header">Payment Details</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="card-element-container">
          <CardElement className="card-element" />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="checkout-form-button" type="submit" disabled={!stripe}>
          Pay ${totalAmount}
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
