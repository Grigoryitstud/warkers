import logo from '../img/logo.png';
import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

let pagesContent = [
  {id: 1, link:'/warkers', name:'ГЛАВНАЯ'},
  {id: 2, link:'/Build', name:'СТОРОИТЕЛЬСТВО'},
  {id: 3, link:'/Car', name:'АВТО'},
  {id: 4, link:'/Other', name:'ДРУГИЕ УСЛУГИ'}
]

let mainPages = pagesContent.map( pagesContent => <NavLink to={pagesContent.link}
   className = { navData => navData.isActive ? s.active : s.item }>
    {pagesContent.name}</NavLink> )

const Header = (props) => {
  return (
    <header className={s.header}>
      
        <div className={s.header__inner}>
                    
          <div className={s.header__logo}>
            <img src={logo} alt="" />
          </div>

          <nav className={s.nav}>
          {mainPages}
          </nav>
        
      </div>
    </header>
  );
}

export default Header;