import React from 'react';

function Main (props) {

    const [onEditProfile, setOnEditProfile] = React.useState();
    const [onAddPlace, setOnAddPlace] = React.useState();
    const [onEditAvatar, setOnEditAvatar] = React.useState();

    function openEditAvatarPopup () {
        setOnEditAvatar (
            {onEditAvatar: true}
        )
    }

    return (
      <main className="main">
      <section className="profile">          
        <div className="profile__grid">
          <div className="profile__avatarNew">
              <img className="profile__avatar" alt="фото профиля"/>
              <button className="profile__avatar-button" type="button" aria-label="Изменить_аватар"></button>
          </div>
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__button-edit"></button>
            <p className="profile__status"></p>
        </div>  
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements">         
      </section>
      <template className="element-template">
        <article className="element">
          <img src="#" alt="" className="element__image"/>
          <div className="element__header">
            <h2 clclassNameass="element__title"></h2>
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