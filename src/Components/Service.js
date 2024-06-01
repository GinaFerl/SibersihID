import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../Asset/img1.jpg";
import img2 from "../Asset/img2.jpg";
import img3 from "../Asset/img3.jpg";
import clothes from "../Asset/shirt.png";
import shoes from "../Asset/shoes.png";
import bag from "../Asset/bag.png";
import bedcover from "../Asset/bedcover.png";
import doll from "../Asset/doll.png";
import carpet from "../Asset/carpet.png";

const Service = () => {
  return (
    <div>
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

export default Service;
