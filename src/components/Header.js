import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button/Button';
import { routes }  from '../utils/route-utils';

const Header = () => {
  const [isOpen, toggleMenu] = useState(false);

  return (
    <header className={`header ${isOpen ? 'header--open' : ''}`}>
      <Button addClass="btn--menu" onClick={() => toggleMenu(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      <nav className={isOpen ? 'menu menu--open' : 'menu'}>
        <ul>
          {routes.map((route, index) => 
            <li key={index}>
              <Link to={`/${route.path}`} onClick={() => toggleMenu(false)}>{route.title}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
