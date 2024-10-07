import React, { useState, useEffect } from "react";
import './style/OnlineBar.scss';

function OnlineBar() {
    const [currentOnline, setCurrentOnline] = useState(1598);
    const [maxPlayers, setMaxPlayers] = useState(15000);
    const percentageOnline = (currentOnline / maxPlayers) * 100;

    return (
        <div className="online-bar-container">
            <div className="status-text">
                <span>Онлайн</span>
                <span className="numbers">{currentOnline} / {maxPlayers}</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${percentageOnline}%` }}
                ></div>
            </div>
        </div>
    );
}

export default OnlineBar;
