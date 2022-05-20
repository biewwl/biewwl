import React from "react";
import Slider from "react-slick";
import "./Gallery.css";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slider">
      <div>
        <img
          src="https://i.ibb.co/rF77Zc7/IMG-20220122-115457-636.webp"
          alt="img-1"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/2jLKvn2/oie-n6ok-ZYoa-TXUq.png"
          alt="img-2"
          className="img-2"
        />
      </div>
      <div>
        <img src="https://i.ibb.co/d583TXk/biewwl.jpg" alt="img-3" />
      </div>
      <div>
        <img
          src="https://i.ibb.co/j4DpRtF/2022-01-26-13-51-00-090-0300.jpg"
          alt="img-4"
        />
      </div>
      <div>
        <img
          src="https://i.ibb.co/NyLXcqp/IMG-20211226-000805-825.webp"
          alt="img-5"
        />
      </div>
      <div>
        <img src="https://i.ibb.co/6DhcBTS/20211220-234332.png" alt="img-6" />
      </div>
    </Slider>
  );
}
