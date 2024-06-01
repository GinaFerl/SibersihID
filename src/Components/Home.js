import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../Asset/img1.jpg";
import img2 from "../Asset/img2.jpg";
import img3 from "../Asset/img3.jpg";
import img4 from "../Asset/img4.jpg";
import clothes from "../Asset/shirt.png";
import shoes from "../Asset/shoes.png";
import bag from "../Asset/bag.png";
import bedcover from "../Asset/bedcover.png";
import doll from "../Asset/doll.png";
import carpet from "../Asset/carpet.png";
import ig from "../Asset/instagram.png";
import wa from "../Asset/whatsapp.png";
import fb from "../Asset/facebook.png";
import x from "../Asset/twitter.png";
import tiktok from "../Asset/tik-tok.png";
import mail from "../Asset/mail.png";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Navbar
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
      </Navbar> */}
      {/* End Navbar */}

      {/* Start Header */}
      <section class="header">
        <Carousel fade>
          <Carousel.Item>
            <img
              src={img3}
              className="d-block w-100 slideshow"
              alt="img1"
              style={{ height: 750 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              className="d-block w-100 slideshow"
              alt="img2"
              style={{ height: 750 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img1}
              className="d-block w-100 slideshow"
              alt="img3"
              style={{ height: 750 }}
            />
          </Carousel.Item>
        </Carousel>
      </section>
      {/* End Header */}

      {/* Start Contents */}
      <section class="contents">
        <Container>
          <Row>
            <Col lg={6} className="me-auto ms-auto">
              <Image
                src={img4}
                alt="img4"
                style={{
                  width: 650,
                  height: 450,
                  paddingTop: 50,
                  paddingBottom: 50,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              />
            </Col>
            <Col lg={6}>
              <div
                style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 30 }}
              >
                <h2>About Us</h2>
                <hr
                  style={{ width: 75, height: 7, backgroundColor: "#1B4242" }}
                />
                <p style={{ textAlign: "justify", fontSize: 17 }}>
                  Clean and fragrant clothes are everyone's dream. But, busyness
                  often means we don't have time to wash our own clothes. This
                  is where Sibersih ID comes in to help!
                </p>
                <p style={{ textAlign: "justify", fontSize: 17 }}>
                  Sibersih ID is a professional, trusted and affordable laundry
                  service that is ready to help you clean your clothes with
                  maximum clean results and a long-lasting fragrance. We use
                  high quality detergents and fragrances that are safe for your
                  clothes and skin.
                </p>
                <Button
                  variant="outline-dark"
                  style={{ marginTop: 12, paddingLeft: 12, paddingRight: 12 }}
                >
                  Order Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Services */}
        <Container>
          <Row>
            <Col style={{ paddingTop: 35 }}>
              <h2 style={{ textAlign: "center" }}>Our Services</h2>
              <hr
                style={{
                  width: 110,
                  height: 8,
                  backgroundColor: "#1B4242",
                  margin: "auto",
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 50, marginBottom: 50 }}>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={clothes}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>Clothes</h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={shoes}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>Shoes</h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={bag}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>Bags</h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 50, marginBottom: 50 }}>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={doll}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>Doll</h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={bedcover}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>
                  Bedcover
                </h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
            <Col
              xs={6}
              md={4}
              lg={4}
              style={{
                height: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 100,
                  backgroundColor: "#9EC8B9",
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  className="mx-auto d-block"
                  src={carpet}
                  style={{ width: 100, padding: 10, margin: 10 }}
                />
              </div>
              <div>
                <h4 style={{ textAlign: "center", paddingTop: 15 }}>Carpet</h4>
                <p
                  style={{
                    textAlign: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  Keep your clothes clean and crisp with our professional
                  laundry and ironing services. We use only the highest quality
                  detergents and fabric softeners to ensure your clothes are
                  clean and smell great. Our convenient pick-up and delivery
                  service makes it easy to get your laundry done without having
                  to leave your home or office.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Contact */}
        <Container fluid style={{ background: "#E1F0DA" }}>
          <Row
            className="justify-content-lg-center mx-auto d-block"
            style={{
              paddingTop: 50,
              paddingBottom: 10,
            }}
          >
            <Col>
              <h2 style={{ textAlign: "center" }}>Contact Us</h2>
            </Col>
          </Row>
          <Row
            className="justify-content-lg-center mx-auto d-block"
            style={{
              paddingTop: 10,
              paddingBottom: 50,
            }}
          >
            <Col>
              <Container>
                <Row>
                  <Col lg={9}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Button variant="dark" type="submit" className="px-4">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                  <Col
                    lg={3}
                    style={{
                      paddingLeft: 50,
                      paddingRight: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={mail}
                        alt="mail"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>service@sibersih.co.id</p>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={wa}
                        alt="wa"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>081234567890</p>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={ig}
                        alt="ig"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>sibersih.id</p>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={fb}
                        alt="fb"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>Sibersih ID</p>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={x}
                        alt="mail"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>sibersih.id</p>
                    </div>
                    <div
                      className="mb-2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        overflow: "auto",
                      }}
                    >
                      <Image
                        src={tiktok}
                        alt="mail"
                        style={{ width: 25, height: 25, marginRight: 15 }}
                      />
                      <p style={{ fontSize: 20 }}>Sibersih ID</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Contents */}

      {/* Start Footer */}
      <section class="footer">
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
      </section>
      {/* End Footer */}
    </div>
  );
};

export default Home;
