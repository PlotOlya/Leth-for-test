/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */

import React, { useState, memo } from 'react';
import './SideMenu.css';
import { Item } from '../NavBar/types/Item';



type SideMenuProps = {
  items: Item[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideMenu({ items, active, setActive }: SideMenuProps): JSX.Element {
  const closeMenuHandle = (): void => {
    setActive(false);
  };

  return (
    <div
      onClick={closeMenuHandle}
      className={active ? 'sideMenu active' : 'sideMenu'}
    >
      <div className="blur" />
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="menu_header" onClick={closeMenuHandle}>
          Закрыть меню
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a onClick={closeMenuHandle} href={item.href}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(SideMenu);
