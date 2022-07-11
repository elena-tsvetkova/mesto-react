import React from 'react';
import logo from '../images/Vector.svg';

function Header () {
    return (
      <header className="header">
      <img className="header__logo" src={logo} alt="Место Россия"/>
          <button type="button"  className="header__button">
              <span></span>Войти
          </button>
    </header>             
    );
}

export default Header;
