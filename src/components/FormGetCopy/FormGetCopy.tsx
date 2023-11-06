import React from 'react';
import { Input } from '@mui/material';
import './formGetCopy.css';


const FormGetCopy = () => {
    return (
        <div className="formGetCopy-container">
            <Input 
                placeholder="Seu nome"
                classes={{ root: 'input-styles' }}
            />
            <Input 
                placeholder="Seu melhor e-mail"
                classes={{ root: 'input-styles' }}
            />
        </div>
    )
}

export default FormGetCopy;