import React from "react";
import Navbar from "./Navbar";
import OnlineBar from "./OnlineBar";
import Ip from "./Ip";
import { Link } from "react-router-dom";
import './style/Header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">SomeProject</Link>
            <div className="header-content">
                <Navbar />
                <OnlineBar />
                <Ip />
            </div>
        </header>
    )
}

export default Header