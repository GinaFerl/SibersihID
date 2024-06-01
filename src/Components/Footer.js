import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#092635", padding: 12 }}
      >
        <Container>
          <Navbar.Brand href="#" className="ms-auto me-auto">
            Copyright&copy; 2024 PT Muda Berkarya Indonesia
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
