import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return ( 
        <div className="navbar">
            <h1>Navbar</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    );
}