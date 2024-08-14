import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoMdLink } from "react-icons/io";
import {
  MdOutlineFindInPage,
  MdQueryStats,
  MdTroubleshoot,
} from "react-icons/md";
import FrameResponsive from "./FrameSlider";
const Frame1 = () => {
  return (
    <>
      <div className="d-none d-lg-block md-block mt-4 feature_blog">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <div className="my-4">
                <MdTroubleshoot className="fs-1" />
                <p className="fs-5 fw-bold mb-1 title">Advanced Option Screener</p>
                <p className="desc" style={{ color: "#999999" }}>
                  Access advanced flters like volume shockers, price action,
                  range breakout, opening price clues, and more for efcient
                  stock screening.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="my-4">
                <MdQueryStats className="fs-1" />
                <p className="fs-5 fw-bold mb-1 title">Live Market Screener</p>
                <p className="desc" style={{ color: "#999999" }}>
                  Access real-time market data and dynamic flters to ensure
                  timely trades without outdated information.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="my-4">
                <MdOutlineFindInPage className="fs-1" />
                <p className="fs-5 fw-bold mb-1 title">Options Screener</p>
                <p className="desc" style={{ color: "#999999" }}>
                  Quickly identify optimal trading opportunities in the options
                  market with our real-time data and advanced flters.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="my-4">
                <IoMdLink className="fs-1" />
                <p className="fs-5 fw-bold mb-1 title">Advanced Option Chain</p>
                <p className="desc" style={{ color: "#999999" }}>
                  Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and
                  Expected Range for the Day feature for confdent target setting
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="d-block d-lg-none d-md-block">
        <FrameResponsive />
      </div> 
       
      <Container fluid className="banner-section dynamic_filter shadow-sm w-97 rounded mt-4 mb-3">
          <Row className="align-items-center p-0 m-0 ">
            <Col md={9} className="d-flex text-center justify-content-center">
            <div className="w-fit-content">
              <h4 className="title">Missing Trades Because of Outdated Data?</h4>
              <p className="desc" className="text-center text-dark text-lg-start">Get the Live Market Screening with Dynamic Filters</p>
            </div>
            </Col>
            <Col md={3} className="text-center">
              <Button variant="primary" size="lg">
                Get Free Trial
              </Button>
            </Col>
          </Row>
        </Container> 
      {/* <div>
        Row
        <div className="col text-center">
          <span>Missing Trades Because of Outdated Data?</span>
          <p>Get the Live Market Screening with Dynamic Filters</p>
        </div>
        <div className="col" style={{ backgroundImage: "url()" }}>
          <button className="text-right">Get Free trial</button>
        </div>
      </div> */}
    </>
  );
};

export default Frame1;
