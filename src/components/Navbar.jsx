import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.scss'

export default function Navbar() {
    return ( 
        <div className="navbar">
            <h1 className="logo"><Link to="/">SomeProject</Link></h1>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    );
}