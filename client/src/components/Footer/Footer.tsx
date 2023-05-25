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
      <div id="footer-bottom" className="clr">
        <div className="menu-footer-menu-container">
          <a className="walink" href="https://api.whatsapp.com/send?phone=79046486060">
           <div className='whatsapp'/>
            WhatsApp
          </a>
        </div>
      </div>

      <div id="copyright" className="clr" role="contentinfo">
        Набережная реки фонтанки, 82 © Leth{" "}
      </div>
    </footer>
  );
}

export default Footer;
