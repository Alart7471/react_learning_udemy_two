import React from "react";
import './style/OnlineBar.scss'

function OnlineBar(){
    return(
        <>
        <div className="status">
            <span>Онлайн 0.5 / 100</span>
            <span className="ip"><span role="img" aria-label="fire">🔥</span> somesite.ru <span role="img" aria-label="fire">🔥</span></span>
        </div>
        </>
    )
}

export default OnlineBar

