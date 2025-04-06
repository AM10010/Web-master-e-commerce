import React, { useContext, useMemo } from "react";
import { CartContext } from "../Cart/CartContex";
import { Link } from "react-router-dom";
import "./Cart.css";
import { AuthContext } from "../Auth/AuthContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  // Optimize subtotal calculation using useMemo
  const subtotal = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0),
    [cart]
  );
  if (!isLoggedIn) {
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Cart</h2>
        <p className="text-muted">You need to log in to view your cart.</p>
        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    console.log("Apply Coupon Clicked");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Table */}
          <div className="table-responsive cart-table-container">
            <table className="cart-table  text-center">
              <thead>
                <tr >
                  <td className="p-3 text-start">Product</td>
                  <td className="p-3">Price</td>
                  <td className="p-3">Quantity</td>
                  <td className="p-3">Subtotal</td>
                </tr>
              </thead>
              <tbody >
                {cart.map((item) => (
                  <tr  key={item.id}>
                    <td className="d-flex align-items-center position-relative">
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => removeFromCart(item.id)}
                        className="remove-icon"
                      />
                      <img
                        src={item.image}
                        className="cart-item-image me-2"
                        alt={item.title}
                      />
                      <div >
                        <p className="mb-1 item-title">{item.title.substring(0,12)}</p>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td className="d-flex align-items-center justify-content-center">
                      <input
                        type="number"
                        className="counter text-center"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                      />
                    </td>
                    <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mb-5">
            <Link to="/product">
              <button className="btn btn-outline-dark px-5 py-3">
                Return To Shop
              </button>
            </Link>
            <Link to="/product">
              <button className="btn btn-outline-dark px-5 py-3">
                Update Cart
              </button>
            </Link>
          </div>

          {/* Coupon Input */}
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-6 ">
              <form
                className="d-flex gap-2 mb-3 row"
                onSubmit={handleApplyCoupon}
              >
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="form-control w-50 py-3 px-4"
                />
                <button className="btn btn-danger col-5" type="submit">
                  Apply Coupon
                </button>
              </form>
            </div>

            {/* Cart Total Section */}
            <div className=" p-3  total-section col-5">
              <h5>Cart Total</h5>
              <p className="d-flex justify-content-between">
                <span>Subtotal:</span> <strong>${subtotal.toFixed(2)}</strong>
              </p>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Shipping:</span> <strong>Free</strong>
              </p>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Total:</span> <strong>${subtotal.toFixed(2)}</strong>
              </p>
              <div className="d-flex justify-content-center ">
                <Link to="/checkout">
                <button
                  className="btn btn-danger px-5  py-3 "
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
