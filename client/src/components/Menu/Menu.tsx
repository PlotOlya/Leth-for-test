
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"



function Menu(): JSX.Element {

  return (
    <div className="main-menu-container" id="menu">
      <h2>Меню</h2>
      <div className='menu-btn-container'>
        <Link className="show-menu-btn" to="/menu">Открыть меню</Link>
        <Link className="show-menu-btn" to="/barmenu">Открыть барную карту</Link>
      </div>
    </div>
  );
}

export default memo(Menu);
