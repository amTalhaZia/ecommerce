import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './Card_context/CartContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <CartProvider>
       <App />
     </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
