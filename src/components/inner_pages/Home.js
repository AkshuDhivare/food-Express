import React from "react";
import "./Home.css";
import banner from "../../images/banner.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div
            className="col-lg-6 home-right py-5"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <h1>Satisfy your cravings..</h1>
            <br />
            <h4>Discover the best food and drinks near you - Order Online!</h4>
            <br />
            <Link
              className="btn text-white"
              style={{ background: "#F28F0D" }}
              to="resturant"
            >
              <h5 className="pt-2 ">
                <strong>EXPLORE NEAREST RESTAURANT</strong>
              </h5>
            </Link>
          </div>
          <div
            className="col-lg-6 home-left"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <img
              src="https://img.freepik.com/premium-vector/curry-dishes_78118-131.jpg"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
