import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";

const StockScreening = () => {
  return (
    <>
      <div className="bg-main">
        <div className="bg-mainsection position-relative">
          <div className="position-absolute">
            <img
              src={"Ellipse 91.svg"}
              className="circle img-fluid"
              alt="text"
              style={{ height: "600px", marginTop: "-40px", zIndex: 0 }}
            />
          </div>
          <Container>
            <Row className="align-items-center main-row home-banner">
              <Col xs={12} md={12} lg={6} style={{ zIndex: "1" }}>
                <h1 className="text-white fs-1 text-uppercase text-center text-lg-start">
                  Stock Screening Simplified!
                </h1>

                <p className="fs-6 text-white w-50 w-lg-75 ">
                  Find Winning Stock Faster with Nifty Trader's Advanced Stock
                  Screening Tool
                </p>
                
                <div className="text-center text-lg-start">
                  <button
                    className="text-white mainpagebutton mx-auto"
                    style={{ backgroundColor: "#13A8D7" }}
                  >
                    Free Trial
                  </button>
                </div>
              </Col>
              <Col xs={12} md={12} lg={6}>
                    <video
                  className="rounded d-lg-block d-none"
                  height="220"
                  controls
                  muted
                  poster=""
                  style={{ float: "right" }} 
              >
                  <source src="first.mp4" type="video/mp4" />
              </video>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <img
            src={"video-img.png"}
            className="img-fluid d-lg-none d-block w-100 position-relative"
            alt="text"
            style={{ float: "right", zIndex: "2" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#E1E1E1",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container>
            <div className="py-4 py-lg-5 text-center main-text-bg feature_section">
              <h3 className="text-uppercase m-0">
                The Ultimate Destination For Stock Market Insight
              </h3>
              <p style={{ fontSize: "19px" }} className="text-muted mb-2">
                Join 1 million Traders & Investors who trust Nifty Trader for
                smart trading & real-time stock insights.
              </p>
              <div className="text-center">
                <Button
                  style={{ padding: "5px 22px 5px 32px" }}
                  variant=" "
                  className="text-black border-black"
                >
                  Explore Features
                  <GoArrowRight />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default StockScreening;
