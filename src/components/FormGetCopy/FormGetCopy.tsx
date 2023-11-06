import React from 'react';
import { Input } from '@mui/material';
import './formGetCopy.css';


const FormGetCopy = () => {
    return (
        <div className="formGetCopy-container">
            <Input 
                placeholder="Type in here…"
                classes={{ root: 'your-custom-class' }}
            />
        </div>
    )
}

export default FormGetCopy;