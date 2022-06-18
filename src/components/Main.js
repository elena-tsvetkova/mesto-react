import React from 'react';
import api from '../utils/api';

function Main (props) {

const [userName, setUserName] = React.useState('Жак');
const [userDescription, setUserDescription] = React.useState('морж');
const [userAvatar, setUserAvatar] = React.useState('http://ya.ru');
const [cards, setCards] = React.useState([]);

api.getUserInfo()
.then((data) => {
  setUserName(data.name)
  setUserDescription(data.about)
  setUserAvatar(data.avatar)
})
.catch((err) => console.log(err))


api.getInitialCards()
.then((data) => {
  console.log('cards', data)
})
.catch((err) => console.log(err))



function openEditProfilePopup () {
    props.onEditProfile()
}

function openAddPlacePopup () {
  props.onAddPlace()
}

function openEditAvatarPopup () {
  props.onEditAvatar()
}


    return (
      <main className="main">
      <section className="profile">          
        <div className="profile__grid">
          <div className="profile__avatarNew">
              <img className="profile__avatar" alt="фото профиля" src={`${userAvatar}` }/>
              <button className="profile__avatar-button" type="button" onClick={openEditAvatarPopup} aria-label="Изменить_аватар"></button>
          </div>
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__button-edit" onClick={openEditProfilePopup}></button>
            <p className="profile__status">{userDescription}</p>
        </div>  
        <button type="button" className="profile__add-button" onClick={openAddPlacePopup}></button>
      </section>
      <section className="elements">         
      </section>
      <template className="element-template">
        <article className="element">
          <img src="#" alt="" className="element__image"/>
          <div className="element__header">
            <h2 className="element__title"></h2>
                <div className="element__count">
                  <button type="button" className="element__like"></button>
                  <span className="element__like-count">0</span>
                </div>
          </div>
          <button type="button" className="element__trash"></button>
        </article>
      </template>
       </main>
    );
}

export default Main;