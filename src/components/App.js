import {useState, useEffect} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from "../utils/api";
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


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

    const handleUpdateUser = (data) => {
        return api.setUserInfoApi(data)
            .then(res => {
                setCurrentUser(res);
                closeAllPopups()
                return res;
            })
            .catch((err) => console.log(err))
    }

    const handleUpdateAvatar = (data) => {
        return api.updateAvatar(data)
            .then(res => {
                setCurrentUser(res);
                closeAllPopups()
                return res;
            })
            .catch((err) => console.log(err))
    }

    const handleAddPlaceSubmit = ({name, link}) => {
        return api.addCard({name, link})
            .then(res => {
                setCards([res, ...cards]);
                closeAllPopups()
                return res;
            })
            .catch((err) => console.log(err))
    }

    const handleCardDelete = (useCardId) => {
        return api.deleteCard(useCardId)
            .then(res => {
                setCards(state => state.filter(item => item._id === useCardId ? null : item));
                return res;
            })
            .catch((err) => console.log(err))
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
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                />
                <Footer/>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                <PopupWithForm name='delete' title='Вы уверены?' popupClass='popup-delete__card'
                               buttonCloseClass='close-delete'
                               buttonSubmitClass='popup-delete__button' buttonSubmitText='Да' isOpen={false}>
                </PopupWithForm>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
