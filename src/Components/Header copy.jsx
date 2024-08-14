import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#3333339e", zIndex: "1" }}>
      <Container>
        <Navbar.Brand href="#">
          <img src={"logo.svg"} alt="test" />
        </Navbar.Brand>

        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Button variant="outline-success" className="text-white border-white">
            Visit Website
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
