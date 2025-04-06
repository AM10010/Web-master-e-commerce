import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
  };

  return (
    <div className="container mt-5 contact ">
      <nav className="breadcrumb ">
        <a
          href="/"
          className="breadcrumb-item text-decoration-none text-black-50"
        >
          Home
        </a>
        <span className="breadcrumb-item ">Contact</span>
      </nav>

      <div className="row mt-5">
        {/* Left Section - Contact Info */}
        <div className="col-md-4 ">
          <div className="card p-4 mb-3">
            <div className="mb-3  d-flex align-items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="me-2 fs-5 p-2 contact-icons"
              />
              <span>Call To Us</span>
            </div>
            <div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +989197777222</p>
            </div>
            <hr />
            <div className=" mb-3 d-flex align-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 fs-5 p-2 contact-icons"
              />
              <span>Write To Us</span>
            </div>
            <div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: customer@exclusive.com</p>
              <p>Email: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-8 right-section h-100">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"

                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    name="phone"
               
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className=""
                  placeholder="Your Message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="my-3 btn contact-btn btn-danger py-3 px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
