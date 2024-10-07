import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.scss'
import Button from '@mui/material/Button';

export default function Navbar() {
    return ( 
        <>
            <nav className="navbar">
                <Link to="/">
                    <Button variant="contained">Главная</Button>
                </Link>
                <Link to="/faq">
                    <Button variant="outlined" href="#outlined-buttons">
                        FAQ
                    </Button>
                </Link>
                <Link to="/about">
                    <Button variant="contained">О нас</Button>
                </Link>
            </nav>
        </>
    );
}