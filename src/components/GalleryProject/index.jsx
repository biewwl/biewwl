import React from "react";
import Slider from "react-slick";
import "./styles/GalleryProject.css";
import "./styles/GalleryProject-mobile.css";

export default function GalleryProject({ images }) {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    arrows: false,
  };

  return (
    <Slider {...settings} className="slider">
      {images.map((e, i) => (
        <div key={i}>
          <img src={e} alt={`img-${i}`} />
        </div>
      ))}
    </Slider>
  );
}
