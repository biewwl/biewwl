import React from "react";
import Slider from "react-slick";
import "./styles/Gallery.css";
import Perfil from './images/perfil.png';
import Trybe from './images/trybe.jpg';
import Hat from './images/hat.jpg';
import Sky from './images/sky.jpg';
import Mask from './images/mask.png';
import Friends from './images/friends.jpg';

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    };

  return (
    <Slider {...settings} className="slider">
      <div>
        <img src={Perfil} alt="img-1" />
      </div>
      <div>
        <img src={Trybe} alt="img-2" />
      </div>
      <div>
        <img
          src={Hat}
          alt="img-3"
        />
      </div>
      <div>
        <img
          src={Sky}
          alt="img-2"
          className="img-4"
        />
      </div>
      <div>
        <img src={Mask} alt="img-5" />
      </div>
      <div>
        <img src={Friends} alt="img-6" />
      </div>
    </Slider>
  );
}
