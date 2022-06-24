function ImagePopup (props) {
    const {
        card,
        onClose
    } = props

    return (
      <div className={`popup ${card.isOpen ? 'popup_opened': ''} popup-big-image`}>
      <div className='popup-big-image__container'>
        <img src={card.link} className="popup-big-image__opened" alt={card.name}/>
        <h2 className="popup-big-image__title">{card.name}</h2>
        <button type="button" className="popup__close popup-big-image__close" onClick={onClose}></button>
      </div>        
    </div>
    );
}

export default ImagePopup;

