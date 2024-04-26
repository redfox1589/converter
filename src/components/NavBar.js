import React from 'react';
import "./NavBar.css";

function NavBar() {
  return (
    <div className='NavBar' align="center">
      <a href='/' className='NavBarButton'>Конвертер</a>
      <a href='/news' className='NavBarButton'>Новости</a>
    </div>
  );
}

export default NavBar;