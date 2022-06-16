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
      <PopupWithForm name='profile' title='Редактировать профиль' isOpen = {false}>
       <input id="name-input" type="text" tabindex="1" required minlength="2" maxlength="40" className="popup__input popup__input_type_name form__input"  placeholder="Имя" 
       value="" name="name" />
       <span className="form__input-error name-input-error"></span>
       <input id ="status-input" type="text" tabindex="2" required minlength="2" maxlength="200" 
       className="popup__input popup__input_type_job form__input" placeholder="Профессия" 
       value="" name="status"/>
       <span className="form__input-error status-input-error"></span>
       <button type="submit" disabled = "false"tabindex="3" className="popup__button form__submit">Сохранить</button>
       <button type="button" className="popup__close popup__close-profil"></button>
      </PopupWithForm>


      <div className="popup popup-new-image">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form form popup__form-new-image" novalidate name="popup-image">
            <input 
              id="title-input" 
              type="text" 
              tabindex="1" 
              required 
              minlength="2" 
              maxlength="20" 
              className="popup__input popup__input_type_title form__input" 
              placeholder="Название" 
              value="" 
              name="name"/>
            <span className="form__input-error title-input-error"></span>
            <input 
              id="link-input" 
              type="url" 
              tabindex="2" 
              required 
              className="popup__input popup__input_type_link form__input" 
              placeholder="Ссылка на картинку" 
              value="" 
              name="link"/>
            <span className="form__input-error link-input-error"></span>
            <button 
            type="submit"
            disabled = "false"
            tabindex="3" 
            className="popup__button form__submit">Создать</button>
          </form>
          <button type="button" className="popup__close popup__close-add"></button>
        </div>        
      </div>


      <div className="popup popup-big-image">
        <div className='popup-big-image__container'>
          <img src="#" className="popup-big-image__opened" alt=""/>
          <h2 className="popup-big-image__title"></h2>
          <button 
          type="button" 
          className="popup__close popup-big-image__close"></button>
        </div>        
      </div>
      <div className="popup popup-delete">
        <div className="popup__container popup-delete__card">
          <form className="popup__form form" name="popupForm" novalidate>
            <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
            <button type="submit" className="popup__button popup-delete__button form__submit">Да</button>
          </form>
          <button type="button" className="popup__close popup__close-delete"></button>
        </div>
      </div>

      <div className="popup popup-editAvatar">
        <div className="popup__container popup-editAvatar__nev">
          <h2 className="popup__title popup-editAvatar__title">Обновить аватар</h2>
          <form className="popup__form form" novalidate name="popup-avatar">
              <input 
              id="avatar-input" 
              type="url" 
              tabindex="1" 
              required 
              className="popup__input popup__input_type_link form__input" 
              placeholder="Ссылка на картинку" 
              value="" 
              name="link"/>
              <span className="form__input-error avatar-input-error"></span>
              <button 
              type="submit"
              disabled = "false"
              tabindex="2" 
              className="popup__button popup-editAvatar__button form__submit">Сохранить</button>
          </form>
          <button type="button" className="popup__close popup__close-add"></button>
        </div>        
      </div>
      <Footer />
    </div>
  );
}

export default App;
