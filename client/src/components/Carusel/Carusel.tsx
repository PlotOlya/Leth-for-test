import React, { memo } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Carusel.css'

function Caruselview(): JSX.Element {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <h2 className='carousel-title-text'>Интерьер ресторана LETH</h2>
      </div>
      <Carousel indicators={false} className="carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel"
            src="photos/sitePhotos/DSCF1851.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel"
            src="photos/sitePhotos/DSCF1856-min.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel"
            src="photos/sitePhotos/DSCF1859.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel"
            src="photos/sitePhotos/DSCF1868.jpg"
            alt="Third slide"
          />
        </Carousel.Item>{" "}

      </Carousel>
    </div>
  );
}

export default memo(Caruselview);
