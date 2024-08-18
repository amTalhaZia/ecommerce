import { useContext, createContext, useState } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

  
    const getCart = (product) => {
        setCart(prev => [...prev, product]);
    };
    
   
    const getCartCount = () => {
       return cart.length;
    };

    return (
        <CartContext.Provider value={{ cart, getCart, getCartCount }}>
            {children}
        </CartContext.Provider>      
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
