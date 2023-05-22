import React, { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./Navbar.css";

import { Item } from "./types/itemTypes";

const items: Item[] = [
  { value: "О РЕСТОРАНЕ", href: "/" },
  { value: "МЕНЮ", href: "/" },
  { value: "О ШЕФЕ", href: "/" },
  { value: "ЗАБРОНИРОВАТЬ", href: "/" },
  { value: "СЕРТИФИКАТ", href: "/sertif" },
  { value: "КОНТАКТЫ", href: "/" },
];

export default function Navbar(): JSX.Element {
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
        header="Закрыть"
        items={items}
      />
    </div>
  );
}
