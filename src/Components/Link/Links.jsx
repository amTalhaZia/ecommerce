import React from 'react';
import { NavLink } from "react-router-dom";
import './Links.css'; 

const Links = () => {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/login">
               Login
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "navlink active" : "navlink"} to="/signup">
               Signup
            </NavLink>
        </div>
    );
};

export default Links;
