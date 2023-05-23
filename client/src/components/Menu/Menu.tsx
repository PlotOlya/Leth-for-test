
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"



function Menu(): JSX.Element {

  return (
    <div id="menu">
      <Link className="show-menu-btn" to="/menu">Открыть меню</Link>
    </div>
  );
}

export default memo(Menu);
