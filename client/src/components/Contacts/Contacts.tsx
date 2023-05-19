/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo } from "react";
import "./Contacts.css";

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

      <div className="elementor-widget-container">
        <div className="elementor-custom-embed">
          Тут должна быть карта
          <iframe
            // frameBorder="0"
            // scrolling="no"
            // marginHeight="0"
            // marginWidth="0"
            src="https://maps.google.com/maps?q=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%B8%20%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD%D0%BA%D0%B8%2C%2082&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
            aria-label="Санкт-Петербург, набережная реки фонтанки, 82"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Contacts);
