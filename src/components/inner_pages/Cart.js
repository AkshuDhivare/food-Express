import React from "react";
import { Link } from "react-router-dom";
import cart from "../../images/cart.webp";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row py-5 text-center justify-content-center ">
          <div className="">
            <img src={cart} style={{ width: "40%" }} />
          </div>

          <h4 className="py-3">Your Cart is Empty</h4>
          <br />
          <Link
            className="btn text-white w-25"
            style={{ background: "#F28F0D" }}
            to="/resturant"
          >
            <p className=" m-0">
              <strong>EXPLORE NEAREST RESTAURANT</strong>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
