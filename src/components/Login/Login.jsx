import React, { useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../Auth/AuthContext";
import "../Signup/Signup.css";
import Sideimg from "../../Assets/images/Side Image 2 (1).png";              
const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Retrieve saved user from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
  
      if (
        storedUser &&
        formData.email === storedUser.email &&
        formData.password === storedUser.password
      ) {
        login();
        navigate("/product"); // Redirect after login
      } else {
        alert("Invalid Email or Password!");
      }
    };
  return (
    <>

<div className=" d-flex  parent">  
  <div className="row">
    {/* Left side - Image */}
    <div className="col-md-6 mt-4 d-none d-md-block img ">
      <img
        src={Sideimg}  // Replace with your actual image
        alt="Login"
        className="img w-100"
      />
    </div>

    {/* Right side - Form */}
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4">
        <h2 className="mb-3 ">Log in to Exclusive</h2>
        <p className="">Enter your details below</p>
        <form onSubmit={handleSubmit}>
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
          <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="create w-50">
            Log in
          </button>
        <a href="/" className="forget">Forget Password?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>

  );
};

export default Login;
