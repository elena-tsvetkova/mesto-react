import React from 'react';

function ImagePopup (props) {
  console.log('card:', props)
  
    return (
      <div className={`popup ${props.card.isOpen ? 'popup_opened': ''} popup-big-image`}>
      <div className='popup-big-image__container'>
        <img src={props.card.link} className="popup-big-image__opened" alt=""/>
        <h2 className="popup-big-image__title">{props.card.name} </h2>
        <button type="button" className="popup__close popup-big-image__close" onClick={props.onClose}></button>
      </div>        
    </div>
    );
}

export default ImagePopup;

