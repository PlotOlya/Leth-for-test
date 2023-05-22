/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './SideMenu.css'
import { Item } from '../NavBar/types/itemTypes';


type SideMenuProps = {
  header:string;
  items: Item[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideMenu({ header, items, active, setActive }:SideMenuProps):JSX.Element {
  
    // const [show, setShow] = useState(false);


    const closeMenuHandle = ():void => {
      setActive(false);
    }

    return (
    <div onClick={closeMenuHandle} className={ active ? 'sideMenu active' : 'sideMenu'}>
      <div className='blur' />
      <div className='menu_content' onClick={e => e.stopPropagation()}>
        <div className='menu_header' onClick={closeMenuHandle}>Закрыть меню</div>
        <ul>
          {items.map((item) => 
            <li>
              <a href={item.href}>{item.value}</a>
            </li>
            )}
        </ul>
      </div>
      {/* <div className='h'>
        <Button className='sideMenuButton' variant="primary" onClick={handleShow} >
          <div className='buttonStrings'></div>
          <div className='sideMenuButtonText'>МЕНЮ</div>
        </Button>
      </div>
      <Offcanvas className="sideMenuContainer" show={show} onHide={handleClose}>
        <Offcanvas.Header className="headerSideMenu" closeButton>
          <Offcanvas.Title className="offcanvas-title">
            Закрыть меню
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              <Link to="/" className="anchor-links">
                О РЕСТОРАНЕ
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor-links">
                МЕНЮ
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor-links">
                О ШЕФЕ
              </Link>
            </li>
            <li>
              <Link to="/" className="anchor-links">
                ЗАБРОНИРОВАТЬ
              </Link>
            </li>
            <li>
              <Certificate handleClose={handleClose} />
            </li>
            <li>
              <Link to="/" className="anchor-links">
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas> */}
      
    </div>
  );
}
