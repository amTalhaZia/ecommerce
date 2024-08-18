import React from 'react';
import PrroductLists from './Components/Product_details/PrroductLists';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product_description from './Components/Product_details/Product_description';
import Login from './Components/Login/Login';
import Links from './Components/Link/Links';
import Signup from './Components/signup/Signup';
import Cart from './Components/Cart/Cart';
import { useNavigate } from 'react-router-dom';


const App = () => {

  const Navigate = useNavigate()
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 onClick={()=>{Navigate("/")}}>  Talha </h1>
       <Links/>
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
    </div>
  );
};

export default App;
