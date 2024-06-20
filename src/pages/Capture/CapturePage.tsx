import React from 'react';
import CountdownLaunch from '../../components/CountdownLaunch/CountdownLaunch';
import ButtonGetCopy from '../../components/ButtonGetCopy/ButtonGetCopy';
import './capturePage.css';
import MockUpBook from '../../components/MockUpBook/MockUpBook';
import { FormGetCopy } from '../../components/FormGetCopy/FormGetCopy';

const CapturePage = () => {
    return (
        <div className="capture-page container">
            <div className="leftSide-container">
                <CountdownLaunch />
                <FormGetCopy />
                <ButtonGetCopy />
            </div>
           <div className="rightSide-container">
                <MockUpBook />
           </div>
        </div>
    )
}

export default CapturePage;