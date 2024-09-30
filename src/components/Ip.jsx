import React from "react";
import './style/Ip.scss';

function Ip() {
    return (
        <div className="ip-server">
            <span>IP</span>
            <div className="ip-server-val">
                <div className="icon-fire"></div>
                <p>hub.holyworld.ru</p>
                <div className="icon-fire"></div>
            </div>
        </div>
    );
}

export default Ip;