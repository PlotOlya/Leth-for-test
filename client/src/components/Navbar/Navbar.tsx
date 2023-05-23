import React, { useState, memo } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./Navbar.css";


import { Item } from "./types/itemTypes";

const items: Item[] = [
  { value: "О РЕСТОРАНЕ", href: "#description", id: 1 },
  { value: "МЕНЮ", href: "#menu", id: 2 },
  { value: "О ШЕФЕ", href: "#shefBlock", id: 3 },
  { value: "ЗАБРОНИРОВАТЬ", href: "/", id: 4 },
  { value: "СЕРТИФИКАТ", href: "/sertif", id: 5 },
  { value: "КОНТАКТЫ", href: "#contacts", id: 6 },
];

 function Navbar(): JSX.Element {
  
  const [menuActive, setMenuActive] = useState(false);

  const MenuActiveHandler = (): void => {
    setMenuActive((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <div className="logo" />
      <button
        type="button"
        className="sideMenuButton"
        onClick={MenuActiveHandler}
      >
        <div className="buttonStrings">МЕНЮ</div>
      </button>

      <SideMenu
        active={menuActive}
        setActive={setMenuActive}
        items={items}
      />
    </div>
  );
}

export default memo(Navbar)
