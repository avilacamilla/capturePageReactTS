import React from 'react';
import './countdownLaunch.css';

const CountdownLaunch = () => {
    return(
        <div className="countdownLaunch-container">
            <div className="titleCountdown-container">
                <p className="titleDaysLeft">FALTAM</p>
                <h2 className="titleNumberOfDaysLeft">3 DIAS</h2>
                <p className="titleDaysLeft">PARA O LANÇAMENTO</p>
            </div>
        </div>
    )
}

export default CountdownLaunch;