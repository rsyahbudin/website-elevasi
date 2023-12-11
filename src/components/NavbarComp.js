import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Elevasi from "../assets/img/elevasi.png";
import Logo1 from "../assets/img/logo1.png";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 680) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="sticky-top">
      <Navbar
        expand="lg"
        variant="dark"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            <img
              alt="Logo Elevasi"
              src={Logo1}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <img
              alt="Logo Elevasi"
              src={Elevasi}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#gallery" className="mx-2">
                Gallery
              </Nav.Link>
              <Nav.Link href="#service" className="mx-2">
                Services
              </Nav.Link>
              <Nav.Link href="#faq" className="mx-2">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
