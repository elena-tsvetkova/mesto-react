import React from 'react';

function PopupWithForm (props) {
  
    return (
        <div className={`popup popup-${props.name}`}>
          <div className="popup__container"></div>
             <h2 className="popup__title">{props.title}</h2>
              <form className="popup__form form" novalidate name={`popup-${props.name}`}>
              <button type="submit" disabled = "false" tabindex="3" className="popup__button form__submit">Сохранить</button>
                {props.children}
              </form>    
          <button type="button" className="popup__close"></button>                
        </div>
    );
}

export default PopupWithForm;