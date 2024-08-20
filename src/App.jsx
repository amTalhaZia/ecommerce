import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import 'react-toastify/dist/ReactToastify.css'; 
import "./App.css"

import PrroductLists from './Components/Product_details/PrroductLists';
import Product_description from './Components/Product_details/Product_description';
import Login from './Components/Login/Login';
import Links from './Components/Link/Links';
import Signup from './Components/signup/Signup';
import Cart from './Components/Cart/Cart';
import { ToastContainer } from 'react-toastify';

const stripePromise = loadStripe('your-stripe-publishable-key');

const App = () => {
  const navigate = useNavigate();

  return (
    <Elements stripe={stripePromise}>
      <div className="app-container">
        <header className="app-header">
          <h1 onClick={() => navigate("/")}>Talha</h1>
          <Links />
        </header>
        <main className="app-main">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<PrroductLists />} />
            <Route path='/product_description/:id' element={<Product_description />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2024 E-Commerce Website</p>
        </footer>
        <ToastContainer /> 
      </div>
    </Elements>
  );
};

export default App;
