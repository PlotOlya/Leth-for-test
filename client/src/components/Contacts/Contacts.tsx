/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo } from "react";
import "./Contacts.css";
import MapContakt from "../MapContact/MapContakt";


function Contacts(): JSX.Element {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts-container">
        <div className="contacts-title">Контакты</div>
        <div className='contacts-flex'>
          <div className='contacts-text'>
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
              <div className="logo-container">
                <a href="https://vk.com/leth_spb" target="_blank" rel="noreferrer">
                  <div className='VK'/>
                </a>
                <a
                  className="social-item"
                  href="https://t.me/leth_spb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className='telegram'/>
                </a>
              </div>
            </div>
          </div>
          <div className="APImap">
            <MapContakt />{" "}
          </div>
      </div>
      </div>

    </section>
  );
}

export default memo(Contacts);
