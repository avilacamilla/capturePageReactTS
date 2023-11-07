import React, { useEffect, useState } from 'react';
import ThanksForSubscribe from '../../components/ThanksForSubscribe/ThanksForSubscribe';
import './thanksPage.css';

const ThanksPage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Ative a animação após um pequeno atraso (por exemplo, 100ms) para garantir que a página tenha renderizado.
        setTimeout(() => {
          setAnimate(true);
        }, 100);
      }, []);

    return (
        <div className={`capturePage-container ${animate ? 'slide-in' : ''}`}>
            <ThanksForSubscribe />
        </div>
    )
}

export default ThanksPage;