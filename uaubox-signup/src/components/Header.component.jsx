import React from 'react';
import Logo from '../assets/Logo.svg';

const Header = ({ children }) => (
  <header className='header'>
    <div className='header__logo'>
      <img className='logo' src={Logo} alt='UAUBox logo' />
    </div>
    <div className='header__content'>
      {children}
    </div>
  </header>
)

export default Header;