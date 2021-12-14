import React from 'react';
import './Header.style.scss';

const Header = ({ children }) => (
  <header className='header'>
    {children}
  </header>
)

export default Header;