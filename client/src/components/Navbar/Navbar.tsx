import React, { useState, memo } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import './Navbar.css';
import { Item } from './types/Item';

const items: Item[] = [
  { value: 'О РЕСТОРАНЕ', href: '#description', id: 1 },
  { value: 'МЕНЮ', href: '#menu', id: 2 },
  { value: 'О ШЕФЕ', href: '#shefBlock', id: 3 },
  { value: 'ЗАБРОНИРОВАТЬ', href: '#mainReservationForm', id: 4 },
  { value: 'СЕРТИФИКАТ', href: '#certificate', id: 5 },
  { value: 'КОНТАКТЫ', href: '#contacts', id: 6 },
];

function NavBar(): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);

  const MenuActiveHandler = (): void => {
    setMenuActive((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <div className='wideNavbar'>
        <a className='' href='#description'>{items[0].value}</a>
        <a href='#menu'>{items[1].value}</a>
        <a href='#shefBlock'>{items[2].value}</a>
        <div className="logowide" />
        <a href='#mainReservationForm'>{items[3].value}</a>
        <a href='#certificate'>{items[4].value}</a>
        <a href='#contacts'>{items[5].value}</a>
      </div>
      <div className="logo" />
      <button
        type="button"
        className="sideMenuButton"
        onClick={MenuActiveHandler}
      >
        <div className="buttonStrings">МЕНЮ</div>
      </button>

      <SideMenu active={menuActive} setActive={setMenuActive} items={items} />
    </div>
  );
}

export default memo(NavBar);
