import React from "react";
import Slider from "react-slick";
import "./Gallery.css";

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnFocus: true,
    };

  return (
    <Slider {...settings} className="slider">
      <div>
        <img
          src="https://i.ibb.co/pJ4t651/oie-c-PDZk-R2-IU0y3.jpg"
          alt="img-1"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/72g3g9c/oie-QRUr-Oxvnl-Gu-O.jpg"
          alt="img-2"
          className="img-2"
        />
      </div>
      <div>
        <img src="https://i.ibb.co/6JNDvbk/oie-n7t-JHWLAt-WQ8.png" alt="img-3" />
      </div>
    </Slider>
  );
}
