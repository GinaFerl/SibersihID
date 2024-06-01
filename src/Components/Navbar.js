import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#092635" }}
      >
        <Container>
          <Navbar.Brand href="#home">Sibersih ID</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: 20 }}>
              <Nav.Link aria-current="page" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link aria-current="page" as={Link} to="About">
                About
              </Nav.Link>
              <Nav.Link aria-current="page" as={Link} to="Service">
                Service
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
