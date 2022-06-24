function PopupWithForm (props) {
    const {
        isOpen,
        name,
        title,
        popupClass,
        formClass,
        buttonCloseClass,
        buttonSubmitClass,
        buttonSubmitText,
        onClose,
        children
    } = props

    return (
        <section className={`popup ${isOpen ? 'popup_opened' : ''} popup-${name}`}>
          <div className={`popup__container ${popupClass}`}>
              <button type="button" className={`popup__close popup__${buttonCloseClass}`} onClick={onClose}></button>
             <h2 className="popup__title">{title}</h2>
              <form className={`popup__form form ${formClass}`} noValidate name={`popup-${name}`}>
                {children}
                  <button type="submit" disabled={false} className={`popup__button ${buttonSubmitClass} form__submit`}>{buttonSubmitText}</button>
              </form>
          </div>  
        </section>
    );
}

export default PopupWithForm;