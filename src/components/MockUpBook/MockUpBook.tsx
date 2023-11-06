import React from 'react';
//Images and icons
import MockUpBookImage from '../../assets/images/ebook-copy2.png';
//Styles
import './mockUpBook.css';
const MockUpBook = () => {
    return (
        <div className="mockUpBook-container">
            <img 
                src={MockUpBookImage} 
                alt="" 
                className="mockUpBook slide-in" />
        </div>
    );
}

export default MockUpBook;
