import React from 'react';
import MockUpBookImage from '../../assets/images/ebook-copy2.png';

const MockUpBook = () => {
    return (
        <div className="mockUpBook-container">
            <img 
                src={MockUpBookImage} 
                alt="" 
                className="mockUpBook" />
        </div>
    );
}

export default MockUpBook;
