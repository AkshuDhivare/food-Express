import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Footer() {
  return (
    <>
      <section className="footer py-3">
        <div className="container">
          <div className="row  justify-content-end ">
            <div className="col-lg-5 my-2 mb-0 text-center ">
              <h6 className="text-white pt-2">
                &copy; {new Date().getFullYear()} FoodExpress, Develop by Akshay
                Dhivare.
              </h6>
            </div>
            <div className="col-lg-2  my-2 mb-0">
              <ul className="d-flex mb-0">
                <li className="px-3">
                  <a
                    href="https://github.com/AkshuDhivare"
                    target="_blank"
                    className="footer_link"
                  >
                    <GitHubIcon style={{ cursor: "pointer" }} />
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="https://www.linkedin.com/in/akshay-dhivare-05ab87235/"
                    target="_blank"
                    className="footer_link"
                  >
                    <LinkedInIcon style={{ cursor: "pointer" }} />
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="https://personal-portfolioo.onrender.com/"
                    target="_blank"
                    className="footer_link"
                  >
                    <PublicIcon style={{ cursor: "pointer" }} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5  my-2 mb-0">
              <ul className="d-flex mb-0">
                <li className="px-3">
                  <Link className="footer_link" to="/">
                    Home
                  </Link>
                </li>
                <li className="px-3">
                  <Link className="footer_link" to="about">
                    About
                  </Link>
                </li>

                <li className=" px-3">
                  <Link className="footer_link " to="resturant">
                    Resturant
                  </Link>
                </li>
                <li className=" px-3">
                  <Link className="footer_link " to="contact">
                    Contact
                  </Link>
                </li>
                <li className=" px-3">
                  <Link className="footer_link " to="cart">
                    <ShoppingCartIcon fontSize="large" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
