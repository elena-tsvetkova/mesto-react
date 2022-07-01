import {useContext} from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from "../utils/api";


function Main(props) {
    const {
        onEditProfile,
        onAddPlace,
        onEditAvatar,
        onCardClick,
        cards,
        setCards
    } = props


    const currentUser = useContext(CurrentUserContext);

    function openEditProfilePopup() {
        onEditProfile()
    }

    function openAddPlacePopup() {
        onAddPlace()
    }

    function openEditAvatarPopup() {
        onEditAvatar()
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (isLiked) {
            api.dislike(card._id).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
        } else {
            api.like(card._id).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__grid">
                    <div className="profile__avatarNew">
                        <img className="profile__avatar" alt="фото профиля" src={`${currentUser.avatar}`}/>
                        <button className="profile__avatar-button" type="button" onClick={openEditAvatarPopup}
                                aria-label="Изменить_аватар"></button>
                    </div>
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" className="profile__button-edit" onClick={openEditProfilePopup}></button>
                    <p className="profile__status">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={openAddPlacePopup}></button>
            </section>
            <section className="elements">
                {
                    cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike}
                              onCardDelete={handleCardDelete}/>
                    ))
                }
            </section>
        </main>
    );
}

export default Main;