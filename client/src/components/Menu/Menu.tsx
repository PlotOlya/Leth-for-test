import React, { memo, useState } from "react";
// import { Document, Page } from "react-pdf";

import ReactPDF from '@react-pdf/renderer';

function Menu(): JSX.Element {

  return (
    <div id="menu">
      <button type="button">Открыть меню</button>
      <div className="menu-container">
        <div>
        ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

          {/* <Document file="photos/sitePhotos/основное-белое-3.pdf" /> */}
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
