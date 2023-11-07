import React from 'react';
import './buttonGetCopy.css';
import { useNavigate } from 'react-router-dom';

const ButtonGetCopy = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate('/thanks');
  }
  return (
    <div className="buttonGetCopy-container">
      <button 
        className="btnActGetCopy"
        onClick={onClickNavigate}
      >
            Garantir meu exemplar gratuito
        </button>
    </div>
  );
}

export default ButtonGetCopy;
