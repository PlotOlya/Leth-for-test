
import React, { memo, useState } from "react";
import { Link } from "react-router-dom";



function Menu(): JSX.Element {

  return (
    <div id="menu">
      <Link to="/menu">Открыть меню</Link>
    </div>
  );
}

export default memo(Menu);
