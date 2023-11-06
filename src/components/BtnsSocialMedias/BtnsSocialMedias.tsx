import React from 'react';
//images and icons
import Twitter from '../../assets/images/twitter-icon.svg';
import Facebook from '../../assets/images/facebook-icon.svg';
import Instagram from '../../assets/images/instagram-icon.svg';
//styles
import './btnsSocialMedias.css';

const BtnsSocialMedia = () => {
    return (
        <div className="btnsSocialMedia-container">
            <div className="iconSocial-container">
                <img 
                    src={Twitter} 
                    alt="Ícone para nevagar para o Twitter/X" 
                    className="icon-social" 
                />
            </div>
            <div className="iconSocial-container">
                <img 
                    src={Facebook} 
                    alt="Ícone para navegar para o Facebook" 
                    className="icon-social" 
                />
            </div>
            <div className="iconSocial-container">
                <img 
                    src={Instagram} 
                    alt="Ícone para navegar para o Instagram" 
                    className="icon-social" 
                />
            </div>
        </div>
    );
}

export default BtnsSocialMedia;