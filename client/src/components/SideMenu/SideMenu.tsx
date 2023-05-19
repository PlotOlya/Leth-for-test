/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './SideMenu.css'

export default function Navbar():JSX.Element {
  
    const [show, setShow] = useState(false);

    const handleClose = ():void => setShow(false);
    const handleShow = ():void => setShow(true);

    return (
    <div className='sideMenu'>
      <div className='h'>
        <Button className='sideMenuButton' variant="primary" onClick={handleShow} >
          <div className='buttonStrings'></div>
          <div className='sideMenuButtonText'>МЕНЮ</div>
        </Button>
      </div>
      <Offcanvas className='sideMenuContainer' show={show} onHide={handleClose}>
        <Offcanvas.Header className='headerSideMenu' closeButton>
          <Offcanvas.Title className='offcanvas-title'>Закрыть меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
                <li><Link to='/' className='anchor-links' >О РЕСТОРАНЕ</Link></li>
                <li><Link to='/' className='anchor-links'>МЕНЮ</Link></li>
                <li><Link to='/' className='anchor-links'>О ШЕФЕ</Link></li> 
                <li><Link to='/' className='anchor-links'>ЗАБРОНИРОВАТЬ</Link></li>
                <li><Link to='/' className='anchor-links'>СЕРТИФИКАТ</Link></li>
                <li><Link to='/' className='anchor-links'>КОНТАКТЫ</Link></li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
