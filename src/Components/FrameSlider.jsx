import React from "react";
import { Container } from "react-bootstrap";
import { IoMdLink } from "react-icons/io";
import {
  MdOutlineFindInPage,
  MdQueryStats,
  MdTroubleshoot,
} from "react-icons/md";
import Slider from "react-slick";

function FrameResponsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container overflow-hidden ">
      <Container>
        <Slider {...settings}>
          <div>
            <div className="my-4 mb-2 shadow-sm p-2 rounded">
              <MdTroubleshoot className="fs-1" />
              <p className="fs-5 fw-bold mb-1 title">Advanced Option Screener</p>
              <p style={{ color: "#999999" }}>
                Access advanced flters like volume shockers, price action, range
                breakout, opening price clues, and more for efcient stock
                screening.
              </p>
            </div>
          </div>
          <div>
            <div className="my-4 mb-2 shadow-sm p-2 rounded">
              <MdQueryStats className="fs-1" />
              <p className="fs-5 fw-bold mb-1 title">Live Market Screener</p>
              <p style={{ color: "#999999" }}>
                Access real-time market data and dynamic flters to ensure timely
                trades without outdated information.
              </p>
            </div>
          </div>
          <div>
            <div className="my-4 mb-2 shadow-sm p-2 rounded">
              <MdOutlineFindInPage className="fs-1" />
              <p className="fs-5 fw-bold mb-1 title">Options Screener</p>
              <p style={{ color: "#999999" }}>
                Quickly identify optimal trading opportunities in the options
                market with our real-time data and advanced flters.
              </p>
            </div>
          </div>
          <div>
            <div className="my-4 mb-2 shadow-sm p-2 rounded">
              <IoMdLink className="fs-1" />
              <p className="fs-5 fw-bold mb-1 title">Advanced Option Chain</p>
              <p style={{ color: "#999999" }}>
                Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and
                Expected Range for the Day feature for confdent target setting
              </p>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default FrameResponsive;
