import React from 'react';
import api from '../utils/api';
import Card from './Card';


function Main (props) {
const [userName, setUserName] = React.useState('Жак');
const [userDescription, setUserDescription] = React.useState('test');
const [userAvatar, setUserAvatar] = React.useState('http://ya.ru');
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getAllNeededData()
  .then(([cards, userData] ) => {
    setUserName(userData.name)
    setUserDescription(userData.about)
    setUserAvatar(userData.avatar)
    setCards(cards)
  })
  .catch((err) => console.log(err))
}, []);


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
         {
          cards.map((card) => (
            <Card key = {card._id} link = {card.link} name = {card.name} likes = {card.likes} onCardClick={props.onCardClick}/>
          ))
          }
      </section>
       </main>
    );
}

export default Main;