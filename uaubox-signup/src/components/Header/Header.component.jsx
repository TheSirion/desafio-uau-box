import React from 'react';
import Logo from '../../assets/Logo.svg';
import './Header.style.scss';

const Header = ({ children }) => (
  <header className='header'>
    <img src={Logo} alt="UAUBox logo" />
    {children}
  </header>
)

export default Header;