import React from "react";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="site-footer"
    //   itemscope="itemscope"
    //   itemtype="https://schema.org/WPFooter"
    >
      <div id="footer-inner" className="clr">
        <div id="footer-bottom" className="clr">
          <div id="footer-bottom-inner" className="container clr">
            <div id="footer-bottom-menu" className="navigation clr">
              <div className="menu-footer-menu-container">
                <ul id="menu-footer-menu" className="menu smooth-scroll-menu">
                  <li
                    id="menu-item-215"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-215"
                  >
                    <a href="https://api.whatsapp.com/send?phone=79046486060">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="copyright" className="clr" role="contentinfo">
              Набережная реки фонтанки, 82 © Leth{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
