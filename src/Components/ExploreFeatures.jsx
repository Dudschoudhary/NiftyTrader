import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div>
            <img src={"1.svg"} className="img-fluid" alt="slider" />
          </div>
          <div>
            <img src={"2.svg"} className="img-fluid" alt="slider" />
          </div>
          <div>
            <img src={"3.svg"} className="img-fluid" alt="slider" />
          </div>
          <div>
            <img src={"4.svg"} className="img-fluid" alt="slider" />
          </div>
          <div>
            <img src={"5.svg"} className="img-fluid" alt="slider" />
          </div>
          <div>
            <img src={"6.svg"} className="img-fluid" alt="slider" />
          </div>
        </Slider>
      </div>
    </>
  );
}
