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
        <img src="https://i.ibb.co/3MrPZ6s/oie-21235143b9e2-O2-HX.jpg" alt="img-1" />
      </div>
      <div>
        <img src="https://i.ibb.co/6JNDvbk/oie-n7t-JHWLAt-WQ8.png" alt="img-2" />
      </div>
      <div>
        <img
          src="https://i.ibb.co/pJ4t651/oie-c-PDZk-R2-IU0y3.jpg"
          alt="img-3"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/72g3g9c/oie-QRUr-Oxvnl-Gu-O.jpg"
          alt="img-2"
          className="img-4"
        />
      </div>
      <div>
        <img src="https://i.ibb.co/6DhcBTS/20211220-234332.png" alt="img-5" />
      </div>
      <div>
        <img src="https://i.ibb.co/44dmVbh/oie-21235044h-El-Bw8sj.jpg" alt="img-6" />
      </div>
    </Slider>
  );
}
