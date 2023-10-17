import React, { useState } from "react";
import "./Contact_us.css";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";
import cart from "../../images/cart.webp";

function Contact_us() {
  const [form, setForm] = useState({});
  const [swalProps, setSwalProps] = useState({});

  const send_feedback = () => {
    // Check for wrong input
    if (!form.email || !form.mobile_no || !form.comment) {
      // Display an error message if any of the fields are empty
      Swal.fire("Error!", "Please fill in all fields!", "error");

      return; // Exit the function to prevent further execution
    }

    // If all fields are filled, proceed with sending feedback
    Swal.fire("Success!", "Thanks For Your Valuable Feedback!", "success");

    setForm({ email: "", mobile_no: "", comment: "" });
  };
  return (
    <>
      <section className="contact_us_section">
        <div className="container ">
          <div className="row py-5 justify-content-evenly">
            <div
              className="col-lg-3 my-3 "
              data-aos="zoom-out-down"
              data-aos-duration="1200"
            >
              <div className="contact_box ">
                <AttachEmailIcon fontSize="large" />
                <h5 className="py-4">
                  <strong>Email</strong>
                </h5>
                <h5>
                  <strong> Demo@gmail.com</strong>
                </h5>
              </div>
            </div>
            <div
              className="col-lg-3 my-3 "
              data-aos="zoom-out-down"
              data-aos-duration="1200"
            >
              <div className="contact_box">
                <PlaceIcon fontSize="large" />
                <h5 className="py-4">
                  <strong>Location</strong>
                </h5>
                <h5>
                  <strong> Mumbai, India.</strong>
                </h5>
              </div>
            </div>
            <div
              className="col-lg-3 my-3 "
              data-aos="zoom-out-down"
              data-aos-duration="1200"
            >
              <div className="contact_box">
                <CallIcon fontSize="large" />
                <h5 className="py-4">
                  <strong>Contact No.</strong>
                </h5>
                <h5>
                  <strong> +91 - 1234567890</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="row py-5 justify-content-evenly ">
            <div
              className="col-lg-5 my-3"
              data-aos="zoom-out-down"
              data-aos-duration="1200"
            >
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292430808!2d72.71637054316062!3d19.082502007375787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696362309722!5m2!1sen!2sin"
                  width="100%"
                  height="490"
                  style={{ border: "1px solid green" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div
              className="col-lg-5 my-3"
              data-aos="zoom-out-down"
              data-aos-duration="1200"
            >
              <div className="contact_form py-5 px-4 text-center ">
                <h3 className="pb-5">Connect With Us </h3>
                <form class="form-floating">
                  <div class="form-floating mb-3">
                    <input
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <br />
                  <div class="form-floating">
                    <input
                      value={form.mobile_no}
                      onChange={(event) =>
                        setForm({ ...form, mobile_no: event.target.value })
                      }
                      type="tel"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Mobile No.</label>
                  </div>
                  <br />
                  <div class="form-floating">
                    <textarea
                      value={form.comment}
                      onChange={(event) =>
                        setForm({ ...form, comment: event.target.value })
                      }
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>
                  <br />
                  <div>
                    <Button
                      variant="contained"
                      className=""
                      onClick={send_feedback}
                      style={{ background: "#F28F0D" }}
                    >
                      <h5 className="mb-0">
                        <strong>Send !</strong>
                      </h5>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SweetAlert */}
      <SweetAlert2 {...swalProps} />
    </>
  );
}

export default Contact_us;
