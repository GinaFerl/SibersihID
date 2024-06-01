import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import img1 from "../Asset/img1.jpg";
import img2 from "../Asset/img2.jpg";
import img3 from "../Asset/img3.jpg";
import img4 from "../Asset/img4.jpg";

const About = () => {
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

          <Row>
            <Col>
              <h2>Why Choose Sibersih ID?</h2>
              <hr
                style={{
                  width: 75,
                  height: 7,
                  backgroundColor: "#1B4242",
                  marginBottom: 30,
                }}
              />
              <ul style={{ textAlign: "justify", fontSize: 17 }}>
                <li>
                  <b>Maximum Clean: </b> We use advanced technology and washing
                  methods to ensure your clothes are maximally clean and
                  stain-free.
                </li>
                <li>
                  <b>Long-Lasting Fragrance: </b> We use high-quality fragrances
                  that make your clothes smell long-lasting.
                </li>
                <li>
                  <b>Fast Service: </b> We offer express washing service with a
                  turnaround time of just 24 hours.
                </li>
                <li>
                  <b>Affordable Prices: </b> We offer competitive prices with
                  the best quality service.
                </li>
                <li>
                  <b>Practical and Easy: </b> You can order our service via the
                  Si Bersih ID application or website, and we will pick up and
                  deliver your laundry directly to your home.
                </li>
                <li>
                  <b>Environmentally Friendly:</b> We are committed to
                  preserving the environment by using environmentally friendly
                  detergents and fragrances.
                </li>
              </ul>
              <p style={{ textAlign: "justify", fontSize: 17 }}>
                Sibersih ID is the right solution for those of you who want to
                save time and energy washing clothes. Entrust your clothes to
                us, and enjoy your free time more fun!
              </p>
              <h5>Special Promo:</h5>
              <ul style={{ textAlign: "justify", fontSize: 17 }}>
                <li>
                  <b>Discount 10% </b> for new customers.
                </li>
                <li>
                  <b>Free shipping </b> for orders minimum IDR 100,000.
                </li>
                <li>
                  <b>Get reward points </b> for every order, which can be
                  exchanged for various attractive prizes.
                </li>
              </ul>
              <h5>Contact Sibersih ID now!</h5>
              <h2 style={{ textAlign: "center", margin: 40 }}>
                Sibersih ID - Clean Laundry, Free Worries!
              </h2>
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

export default About;
