/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo } from "react";

function MapContakt(): JSX.Element {
  return (
    <div className="map-container">
      Тут должна быть карта API
      <iframe
        // frameBorder="0"
        // scrolling="no"
        // marginHeight="0"
        // marginWidth="0"
        src="https://maps.google.com/maps?q=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C%20%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D0%BA%D0%B8%20%D1%84%D0%BE%D0%BD%D1%82%D0%B0%D0%BD%D0%BA%D0%B8%2C%2082&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
        aria-label="Санкт-Петербург, набережная реки фонтанки, 82"
      />
    </div>
  );
}

export default memo(MapContakt);
