import React from 'react';
//images
import RocketIcon from '../../assets/images/launch-icon.svg';
//styles
import './thanksForSubscribe.css';
import BtnsSocialMedias from '../BtnsSocialMedias/BtnsSocialMedias';

const ThanksForSubscribe = () => {
    return(
        <div className="thanksForSubscribe-container">
            <div className="titleThanks-container">
                <h1 className="titleThanksSubscribe">Obrigada pela inscrição.</h1>
                <h3 className="subtitleThanksSubscribe">No dia do lançamento você receberá uma cópia gratuita no e-mail cadastrado!</h3>
            </div>
            <div className="btnsSocialMedia-container">
                <BtnsSocialMedias />
            </div>
            <div className="imageLaunchFooter-container">
                <img 
                    src={RocketIcon} 
                    alt="Imagem de foguete" 
                    className="launch" 
                />
            </div>
        </div>
    );
}

export default ThanksForSubscribe;