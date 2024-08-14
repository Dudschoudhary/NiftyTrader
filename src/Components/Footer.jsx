import React from 'react'
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
    <div className='row w-100 bg-dark footer px-4 m-0 mt-lg-4'>
      <div className="col-lg-6 col-12">
        <ul className='d-flex list-unstyled m-0'>
          <li>
            <a href="#"><img src={"frame 632.png"} alt="test" /></a>
          </li>
          <li>
            <a href="#"><img src={"frame 633.png"} alt="test" /></a>
          </li>
          <li>
            <a href="#"><img src={"frame 634.png"} alt="test" /></a>
          </li>
          <li>
            <a href="#"><img src={"frame 635.png"} alt="test" /></a>
          </li>
          <li>
            <a href="#"><img src={"frame 637.png"} alt="test" /></a>
          </li>
          <li>
            <a href="#"><img src={"instagram.png"} alt="instagram" /></a>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 col-12 text-center text-lg-end py-2 m-auto">
        <a href="www.niftytrader.in" className='text-white'>www.niftytrader.in</a>
      </div>
    </div>
     {/* <Navbar className='mt-4' expand="lg" style={{ backgroundColor: "#333333" }}>
      <Container>
        <Navbar.Brand href="#">
          <img src={"frame 632.png"} alt="test" />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img src={"frame 633.png"} alt="test" />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img src={"frame 634.png"} alt="test" />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img src={"frame 635.png"} alt="test" />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img src={"frame 637.png"} alt="test" />
        </Navbar.Brand>
        <Navbar.Brand href="#">
          <img src={"instagram.png"} alt="test" />
        </Navbar.Brand>

        <Nav
          className="w-100 my-2 my-lg-0 text-center text-lg-end justify-content-end"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <a href="www.niftytrader.in" className='text-white'>www.niftytrader.in</a>
        </Nav>
      </Container>
    </Navbar> */}
    </>
  )
}

export default Footer
