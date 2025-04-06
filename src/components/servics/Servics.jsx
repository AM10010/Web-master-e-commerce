import React from "react";

import "./Servics.css";
const Service = () => {
  return (
    <>
      <div className="row text-center servics mt-5">
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center service-card service-card p-2">
          <div className="mb-3 ">
            <img src={require("../../Assets/images/Services.png")} alt="" />
          </div>
          <h5>Free and Fast Delivery</h5>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center service-card">
        <div className="mb-3 ">
            <img src={require("../../Assets/images/Services (1).png")} alt="" />
          </div>
          <h5>24/7 Customer Service</h5>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-center service-card">
        <div className="mb-3 ">
            <img src={require("../../Assets/images/Services (2).png")} alt="" />
          </div>
          <h5>Money Back Guarantee</h5>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </>
  );
};

export default Service;
