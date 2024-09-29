import React from "react";
import Navbar from "./Navbar";
import OnlineBar from "./OnlineBar";
import './style/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Navbar />
            </div>
            <OnlineBar />
        </header>
    )
}

export default Header