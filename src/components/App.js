import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';

function App() {  

  return (
    <div className="page">
        <Header />
      <Main />
      <Footer />
       <PopupWithForm name='profile' title='Редактировать профиль' popupClass='popup__common' formClass='popup__form-profile' buttonClose='close-profil' isOpen={false}>
         <input id="name-input" type="text" tabIndex="1" required minLength="2" maxLength="40" className="popup__input popup__input_type_name form__input" placeholder="Имя"
          value="" name="name" />
        <span className="form__input-error name-input-error"></span>
        <input id="status-input" type="text" tabIndex="2" required minLength="2" maxLength="200"
          className="popup__input popup__input_type_job form__input" placeholder="Профессия"
          value="" name="status" />
        <span className="form__input-error status-input-error"></span>
        <button type="submit" disabled={false} tabIndex="3" className="popup__button form__submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name='new-image' title='Новое место' formClass='popup__form-new-image' buttonClose='close-add' isOpen={false}>
        <input id="title-input" type="text" tabIndex="1" required minLength="2" maxLength="20" className="popup__input popup__input_type_title form__input"
          placeholder="Название" value="" name="name" />
        <span className="form__input-error title-input-error"></span>
        <input id="link-input" type="url" tabIndex="2" required className="popup__input popup__input_type_link form__input"
          placeholder="Ссылка на картинку" value="" name="link" />
        <span className="form__input-error link-input-error"></span>
        <button type="submit" disabled={false} tabIndex="3" className="popup__button form__submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm name='delete' title='Вы уверены?' popupClass='popup-delete__card' buttonClose='close-delete' isOpen={false}>
        <button type="submit" className="popup__button popup-delete__button form__submit">Да</button>
      </PopupWithForm>
      <PopupWithForm name='editAvatar' title='Обновить аватар' popupClass='popup-editAvatar__nev' buttonClose='close-add' isOpen={false}>
        <input id="avatar-input" type="url" tabIndex="1" required className="popup__input popup__input_type_link form__input"
          placeholder="Ссылка на картинку" value="" name="link" />
        <span className="form__input-error avatar-input-error"></span>
        <button type="submit" disabled={false} tabIndex="2" className="popup__button popup-editAvatar__button form__submit">Сохранить</button>
      </PopupWithForm>
    </div>
  );
}

export default App;
