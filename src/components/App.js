import {useState, useEffect} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from "../utils/api";
import {CurrentUserContext} from '../contexts/CurrentUserContext'


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({isOpen: false});
    const [currentUser, setCurrentUser] = useState({'name': 'Жак', 'about': 'test', 'avatar': 'http://ya.ru'});
    const [cards, setCards] = useState([]);


    useEffect(() => {
        api.getAllNeededData()
            .then(([cards, userData]) => {
                setCurrentUser(userData)
                setCards(cards)
            })
            .catch((err) => console.log(err))
    }, []);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick(data) {
        setSelectedCard({isOpen: true, ...data})
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard({isOpen: false})
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    setCards={setCards}
                />
                <Footer/>
                <PopupWithForm name='profile' title='Редактировать профиль' popupClass='popup__common'
                               formClass='popup__form-profile' buttonCloseClass='close-profil' buttonSubmitClass=''
                               buttonSubmitText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <input id="name-input" type="text" tabIndex="1" required minLength="2" maxLength="40"
                           className="popup__input popup__input_type_name form__input" placeholder="Имя"
                           name="name"/>
                    <span className="form__input-error name-input-error"></span>
                    <input id="status-input" type="text" tabIndex="2" required minLength="2" maxLength="200"
                           className="popup__input popup__input_type_job form__input" placeholder="Профессия"
                           name="status"/>
                    <span className="form__input-error status-input-error"></span>
                </PopupWithForm>
                <PopupWithForm name='new-image' title='Новое место' formClass='popup__form-new-image'
                               buttonCloseClass='close-add' buttonSubmitClass='' buttonSubmitText='Создать'
                               isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <input id="title-input" type="text" tabIndex="1" required minLength="2" maxLength="20"
                           className="popup__input popup__input_type_title form__input"
                           placeholder="Название" name="name"/>
                    <span className="form__input-error title-input-error"></span>
                    <input id="link-input" type="url" tabIndex="2" required
                           className="popup__input popup__input_type_link form__input"
                           placeholder="Ссылка на картинку" name="link"/>
                    <span className="form__input-error link-input-error"></span>
                </PopupWithForm>
                <PopupWithForm name='delete' title='Вы уверены?' popupClass='popup-delete__card'
                               buttonCloseClass='close-delete'
                               buttonSubmitClass='popup-delete__button' buttonSubmitText='Да' isOpen={false}>
                </PopupWithForm>
                <PopupWithForm name='editAvatar' title='Обновить аватар' popupClass='popup-editAvatar__nev'
                               buttonCloseClass='close-add' buttonSubmitClass='popup-editAvatar__button'
                               buttonSubmitText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <input id="avatar-input" type="url" tabIndex="1" required
                           className="popup__input popup__input_type_link form__input"
                           placeholder="Ссылка на картинку" name="link"/>
                    <span className="form__input-error avatar-input-error"></span>
                </PopupWithForm>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
