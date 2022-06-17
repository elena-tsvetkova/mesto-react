import React from 'react';

function PopupWithForm (props) {
  
    return (
        <section className={`popup popup-${props.name}`}>
          <div className={`popup__container ${props.popupClass}`}>
             <h2 className="popup__title">{props.title}</h2>
              <form className={`popup__form form ${props.formClass}`} noValidate name={`popup-${props.name}`}>
                {props.children}
              </form>  
          </div>  
          <button type="button" className={`popup__close popup__${props.buttonClose}`}></button>                
        </section>
    );
}

export default PopupWithForm;