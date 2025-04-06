import "./Found.css";
import { Link } from "react-router-dom";
const Found = () => {
  return (
    <div className="container mt-5 found">
      <nav className="breadcrumb ">
        <a
          href="/"
          className="breadcrumb-item text-decoration-none text-black-50"
        >
          Home
        </a>
        <span className="breadcrumb-item ">404 Error</span>
      </nav>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <h1  >404 Not Found</h1>
      <p className="mb-5">Your visited page not found. You may go home page.</p>
      <Link rel="stylesheet" to="/Home" >
      <button className="btn  px-5 py-3 mt-5">Back to home page</button>
      </Link>
      </div>
    </div>
  );
};

export default Found;
