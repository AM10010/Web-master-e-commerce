import "./FlashSale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Show from "../../showProducts/Show";
const FlashSale = ({ products }) => {


  return (
    <div className="container mt-5">
      <div className=" d-flex align-items-center mb-3">
        <div className="box me-2"></div>
        <div className="flash-header">Today's</div>
      </div>
      <div className="  d-flex justify-content-between ">
        <div className=" flash-sale d-flex align-items-center mt-4">
          <p>Flash Sales</p>
        </div>
        <div className="d-flex justify-content-around  col-3">
          <div>
            <p className="words">Days</p>
            <p className="number">03</p>
          </div>
          <div className="flash-dot">:</div>
          <div>
            <p className="words">Hours</p>
            <p className="number">23</p>
          </div>
          <div className="flash-dot">:</div>
          <div>
            <p className="words">minutes</p>
            <p className="number">19</p>
          </div>
          <div className="flash-dot">:</div>
          <div>
            <p className="words">Seconds</p>
            <p className="number">56</p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center ">
          <FontAwesomeIcon icon={faArrowLeft} className="flash-arrow me-2" />
          <FontAwesomeIcon icon={faArrowRight} className="flash-arrow" />
        </div>
      </div>
      <div className="container ">
  <div className="row">
    {/* Only slice if products is an array */}
    <Show  products={products}  />
  </div>
</div>
      <div className="d-flex justify-content-center ">
        <Link className=" view-prod px-5 py-4" to={"/product"}>
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
