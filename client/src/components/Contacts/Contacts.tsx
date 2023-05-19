/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo } from "react";
import "./Contacts.css";
import MapContakt from "../MapContact/MapContakt";

function Contacts(): JSX.Element {
  return (
    <section className="Contacts">
      <div className="contacts-container">
        <h2 className="adress">Адрес</h2>

        <div className="adress-items">
          <p>Набережная реки Фонтанки, 82</p>{" "}
          <p>5 минут от метро Звенигородская</p>
          <p>12:00 — 23:00</p>
        </div>

        <h2 className="phone">Связаться</h2>

        <div className="phone-item">Номер телефона: +7-904-648-60-60</div>

        <div className="social">
          <h2 className="">Социальные сети</h2>

          <a href="https://vk.com/leth_spb" target="_blank" rel="noreferrer">
            <span className="social-item">Vk</span>
          </a>
          <a
            className="social-item"
            href="https://t.me/leth_spb"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-item">Telegram</span>
          </a>
        </div>
      </div>
      <MapContakt/>
    </section>
  );
}

export default memo(Contacts);
