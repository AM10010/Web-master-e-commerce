import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContex";
import { AuthContext } from "../Auth/AuthContext";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const { cart = [] } = useContext(CartContext) || {}; // Prevent undefined
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const handleLogout = () => {
    logout();
    clearCart();
    sessionStorage.removeItem("cart");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/#">
            Exclusive
          </a>
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
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex justify-content-around ">
              <li className="nav-item">
                <Link
                  className="links active me-3"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="links me-3" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="links me-3" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="links me-3" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="search-box me-2">
              <input type="search" placeholder="What are you looking for?" />
              <FontAwesomeIcon className="iconss" icon={faMagnifyingGlass} />
            </div>
            <FontAwesomeIcon icon={faHeart} className="me-2 icons" />
            <Link to="/cart" className="text-decoration-none position-relative cart-sign text-black">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2 icons" />
              {totalItems > 0 && ( // Show badge only if there are items
                <span className="cart-count position-absolute text-white ">
                  {totalItems}
                </span>
              )}
              {isLoggedIn ? (
                
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="me-2 icons "
                    onClick={handleLogout}
                  />
                
              ) : (
                <Link to={"/signup"}>
                  <FontAwesomeIcon icon={faUser} className="me-2 icons " />
                </Link>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};
export default Navbar;
