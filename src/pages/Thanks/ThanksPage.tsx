import React, { useEffect, useState } from 'react';
import ThanksForSubscribe from '../../components/ThanksForSubscribe/ThanksForSubscribe';
import './thanksPage.css';

const ThanksPage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Ativa a animação após um pequeno atraso para garantir que a página tenha renderizado**
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