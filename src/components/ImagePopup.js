import React from 'react';

function ImagePopup (props) {
  
    return (
      <div className="popup popup-big-image">
      <div className='popup-big-image__container'>
        <img src="#" className="popup-big-image__opened" alt=""/>
        <h2 className="popup-big-image__title"></h2>
        <button type="button" className="popup__close popup-big-image__close"></button>
      </div>        
    </div>
    );
}

export default ImagePopup;

