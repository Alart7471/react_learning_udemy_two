import React from "react";
import './style/Ip.scss';

function Ip() {
    const ip = process.env.REACT_APP_SERVERIP;
    return (
        <div className="ip-server">
            <span>IP</span>
            <div className="ip-server-val">
                <div className="icon-fire"></div>
                <p>{ip}</p>
                <div className="icon-fire"></div>
            </div>
        </div>
    );
}

export default Ip;