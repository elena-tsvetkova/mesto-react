import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';



function App() {  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false});

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick (data) {
    console.log('data:', data)
    setSelectedCard({isOpen: true, ...data})
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({isOpen: false})
  }

  return (
    <div className="page">
        <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
       <PopupWithForm name='profile' title='Редактировать профиль' popupClass='popup__common' formClass='popup__form-profile' buttonClose='close-profil' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
         <input id="name-input" type="text" tabIndex="1" required minLength="2" maxLength="40" className="popup__input popup__input_type_name form__input" placeholder="Имя"
          name="name" />
        <span className="form__input-error name-input-error"></span>
        <input id="status-input" type="text" tabIndex="2" required minLength="2" maxLength="200"
          className="popup__input popup__input_type_job form__input" placeholder="Профессия"
          name="status" />
        <span className="form__input-error status-input-error"></span>
        <button type="submit" disabled={false} tabIndex="3" className="popup__button form__submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='new-image' title='Новое место' formClass='popup__form-new-image' buttonClose='close-add' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="title-input" type="text" tabIndex="1" required minLength="2" maxLength="20" className="popup__input popup__input_type_title form__input"
          placeholder="Название" name="name" />
        <span className="form__input-error title-input-error"></span>
        <input id="link-input" type="url" tabIndex="2" required className="popup__input popup__input_type_link form__input"
          placeholder="Ссылка на картинку" name="link" />
        <span className="form__input-error link-input-error"></span>
        <button type="submit" disabled={false} tabIndex="3" className="popup__button form__submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name='delete' title='Вы уверены?' popupClass='popup-delete__card' buttonClose='close-delete' isOpen={false}>
        <button type="submit" className="popup__button popup-delete__button form__submit">Да</button>
      </PopupWithForm>
      <PopupWithForm name='editAvatar' title='Обновить аватар' popupClass='popup-editAvatar__nev' buttonClose='close-add' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="avatar-input" type="url" tabIndex="1" required className="popup__input popup__input_type_link form__input"
          placeholder="Ссылка на картинку" name="link" />
        <span className="form__input-error avatar-input-error"></span>
        <button type="submit" disabled={false} tabIndex="2" className="popup__button popup-editAvatar__button form__submit">Сохранить</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
