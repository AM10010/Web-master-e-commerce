import React, { useState } from "react";
import Sideimg from "../../Assets/images/Side Image 2 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to login (You can also use React Router)
    navigate("/login");
  };

  return (
    <>
<div className=" d-flex  parent">  
  <div className="row">
    {/* Left side - Image */}
    <div className="col-md-6 mt-4 d-none d-md-block img ">
      <img
        src={Sideimg}  // Replace with your actual image
        alt="Signup"
        className="img w-100"
      />
    </div>

    {/* Right side - Form */}
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4">
        <h2 className="mb-3 ">Create an account</h2>
        <p className="">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="name"
               className="py-3 text-black-50"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2 ">
            <input
              type="email"
              name="email"
              className="py-3 text-black-50"
              placeholder="Email or Phone Number"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="py-3 text-black-50"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="create w-100">
            Create Account
          </button>
          <button type="submit" className="gmail w-100 mt-3">
            <FontAwesomeIcon icon={faGoogle} className="icon me-2" />
          Sign up with Google
          </button>
        </form>


        <p className="text-center login mt-3">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  </div>
</div>
    </>

  );
};

export default SignupForm;
