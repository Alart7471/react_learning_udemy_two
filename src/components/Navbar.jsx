import React from "react";
import { Link } from "react-router-dom";
import './style/Navbar.scss'
import Button from '@mui/material/Button';

export default function Navbar() {
    return ( 
        <>
            <nav className="navbar">
                <Link to="/">
                    <Button variant="contained">Home</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outlined" href="#outlined-buttons">
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button variant="contained">Register</Button>
                </Link>
            </nav>
        </>
    );
}