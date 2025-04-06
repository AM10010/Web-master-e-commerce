import React from "react";
import "./CheckOut.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
const CheckOut = () => {
  const storedCart = sessionStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : [];
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [coupon, setCoupon] = useState("");

  // Sample cart data (Replace with actual cart state)



  const shipping = 0; // Assuming free shipping
  const total = subtotal + shipping;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    console.log("Applying Coupon:", coupon);
  };

  const handlePlaceOrder = () => {
    console.log("Order placed with payment method:", paymentMethod);
  };
  return (
    <div className="container">
      <nav className="breadcrumb ">
        <a
          href="/"
          className="breadcrumb-item text-decoration-none text-black-50"
        >
          Home / My Account / Product / View Cart
        </a>
        <span className="breadcrumb-item ">CheckOut</span>
      </nav>
      <div className="row mt-5">
        <div className="col-md-5">
          <h1 className="mb-5">Billing Details</h1>
          <form>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                First Name
              </label>
              <input type="text" class="CheckOut-Input" />
            </div>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Company Name
              </label>
              <input type="text" class="CheckOut-Input" />
            </div>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Street Address*
              </label>
              <input type="text" class="CheckOut-Input" />
            </div>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" class="CheckOut-Input" />
            </div>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Town/City*
              </label>
              <input type="text" class="CheckOut-Input" />
            </div>
            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Phone Number*
              </label>
              <input type="tel" class="CheckOut-Input" />
            </div>

            <div class="mb-4">
              <label
                for="exampleInputEmail1"
                class="CheckOut-Input-label text-black-50"
              >
                Email Address*
              </label>
              <input type="email" class="CheckOut-Input" />
            </div>

            <div class="mb-4 form-check">
              <input
                type="checkbox"
                class="form-check-input bg-danger border-none"
                id="exampleCheck1"
              />
              <label class="form-check-label " for="exampleCheck1">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="ms-5 mt-5 col-md-5">
          <div className="container mt-5">
            {/* Cart Items */}
            <div className="mb-2  p-3 ">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center pb-2 mb-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <span className="flex-grow-1 ms-3">{item.title}</span>
                  <span >${item.price}</span>
                </div>
              ))}
            </div>

            {/* Subtotal & Total */}
            <div >
              <div className="d-flex  justify-content-between">
                <span className="mb-2">Subtotal:</span>
                <span >${subtotal.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Shipping:</span>
                <span >Free</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-3">
              <div className="form-check d-flex justify-content-between align-items-center">
                <div>
                <input
                  type="radio"
                  className="form-check-input mb-3"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <label className="form-check-label ms-2">Bank</label>
                </div>
                <div>
              <FontAwesomeIcon icon={faCcMastercard} className="ms-3" />
              <FontAwesomeIcon icon={faCcVisa} className="ms-3" />
              <FontAwesomeIcon icon={faPaypal} className="ms-3" />
                </div>
              </div>
              <div className="form-check mt-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="form-check-label ms-2">
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Coupon Input */}
            <div className="mt-4 d-flex">
              <input
                type="text"
                className="form-control me-3 py-3 px-3 w-100 "
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn btn-danger w-75" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <div className="text-start mt-4">
              <button
                className="btn btn-danger w-50 py-2"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>``
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
