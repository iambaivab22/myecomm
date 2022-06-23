import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Banner = () => {
  const Navigator = useNavigate();
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly "
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="herosection">
            <h1>Welcome !</h1>
            <button onClick={() => Navigator("product")}>Start Shopping</button>
          </div>

          <div className="carousel-item active">
            <img
              className="d-block w-100 img-fluid imagestyle"
              src="finalbanner1.png"
              alt="Second slide"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid imagestyle"
              src="finalbanner3.png"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid imagestyle"
              src="finalbanner2.png"
              alt="fourth slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
