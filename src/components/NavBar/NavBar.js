import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink activeclassname="menu__item_active" className="menu__item"  to="/">Домой</NavLink>
      <NavLink activeclassname="menu__item_active" className="menu__item" to="/tips">Советы</NavLink>
    </nav>
  );
}

export default NavBar;