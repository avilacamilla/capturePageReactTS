import React from 'react';
import CountdownLaunch from '../../components/CountdownLaunch/CountdownLaunch';
import FormGetCopy from '../../components/FormGetCopy/FormGetCopy';
import ButtonGetCopy from '../../components/ButtonGetCopy/ButtonGetCopy';
import './capturePage.css';

const CapturePage = () => {
    return (
        <div className="capture-page container">
            <div className="leftSide-container">
                <CountdownLaunch />
                <FormGetCopy />
                <ButtonGetCopy />
            </div>
           <div className="rightSide-container">
            
           </div>
        </div>
    )
}

export default CapturePage;