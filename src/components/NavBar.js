import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar() {
  const history = useHistory();
  function signOut(){
    localStorage.removeItem('jwt');
    history.push('/login');
  }
  return (
    <nav className="menu">
      <NavLink exact className="menu__item" activeClassName="menu__item_active" to="/diary">Дневник</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/tips">Советы</NavLink>
      <button onClick={signOut} className="menu__exit" >Выйти</button>
    </nav>
  );
}

export default NavBar;