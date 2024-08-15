import React from 'react';
import PrroductLists from './Components/Product_details/PrroductLists';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product_description from './Components/Product_details/Product_description';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>E-Commerce Website</h1>
      </header>
      <main className="app-main">
        <Routes>
          <Route path='/' element={<PrroductLists />} />
          <Route path='/product_description/:id' element={<Product_description />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>© 2024 E-Commerce Website</p>
      </footer>
    </div>
  );
};

export default App;
