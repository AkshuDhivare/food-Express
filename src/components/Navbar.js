import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
        <div className="container">
          <Link className="navbar-brand p-0 m-0" to="/">
            <img
              src={logo}
              className="img-fluid my-2"
              style={{ width: "31%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <Link className="nav-link  active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link " to="about">
                  About Us
                </Link>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link " to="resturant">
                  Resturant
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link " to="contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link " to="cart">
                  <ShoppingCartIcon fontSize="large" />
                </Link>
              </li>

              {/* <li className="nav-item px-3 dropdown">
                <Link
                  className="nav-link  dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
