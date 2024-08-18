import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut, auth } from '../firebase_config/Config';
import './Links.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../Card_context/CartContext';

const Links = () => {
    const [isLogedin, setIsLogedin] = useState(false);
    const navigate = useNavigate();
    const {cart} = useCart()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => (
            setIsLogedin(!!user)
        ))

        return () => unSubscribe()
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            setIsLogedin(false)
            navigate('/');
        })
    }

    return (
        <div className="nav-links">
            {isLogedin ? (
                <button className="navlink logout-button" onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <>
                    <NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/login">
                        Login
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/signup">
                        Signup
                    </NavLink>
                </>
            )}
            <NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/cart">
                <div className="cart-icon-container">
                    <FontAwesomeIcon icon={faShoppingCart} />
                     {cart.length > 0 && (
                     <span className="cart-count">{cart.length}</span>
                    )}
                </div>
            </NavLink>
        </div>
    );
};

export default Links;
