import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../Asset/img1.jpg";
import img2 from "../Asset/img2.jpg";
import img3 from "../Asset/img3.jpg";

const Slideshow = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt="img1" />
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt="img2" />
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt="img3" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
