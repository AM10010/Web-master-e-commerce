import { Link } from "react-router-dom";
import ShowThird from "../../showProducts/ShowThird";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Explore = () => {
  return (
    <div className="container my-5 ">
      <div className="row mb-4 ">
        <div className=" d-flex align-items-center mb-3">
          <div className="box me-2"></div>
          <div className="flash-header">Our Products</div>
        </div>
        <div className=" d-flex align-items-center justify-content-between ">
          <h4>Explore Our Products</h4>
          <div className=" d-flex justify-content-end align-items-center ">
            <FontAwesomeIcon icon={faArrowLeft} className="flash-arrow me-2" />
            <FontAwesomeIcon icon={faArrowRight} className="flash-arrow" />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <ShowThird />
      </div>
      <div className="d-flex justify-content-center ">
        <Link className=" view-prod px-5 py-4" to={"/product"}>
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default Explore;
