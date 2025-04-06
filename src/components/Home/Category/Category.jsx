import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Categoty.css";
const Catogery = () => {
  return (
    <div className="container mt-5">
      <div className=" d-flex align-items-center mb-3">
        <div className="box me-2"></div>
        <div className="flash-header ms-1 fs-6">Categories</div>
      </div>
      <div className="  d-flex justify-content-between ">
              <div className=" flash-sale d-flex align-items-center mt-2">
                <p>Browse By Category</p>
              </div>

              <div className="col-6 d-flex justify-content-end align-items-center ">
                <FontAwesomeIcon icon={faArrowLeft} className="flash-arrow me-2" />
                <FontAwesomeIcon icon={faArrowRight} className="flash-arrow" />
              </div>
            </div>
      <div className="d-flex justify-content-between">
        <div className="category row  ">
          <div className="category-card col ">
            <div className="mb-3">
            <img src={require("../../../Assets/images/Category-CellPhone.png")} alt="" />
            </div>
            <div>Phones</div>
          </div>
          <div className="category-card col ">
            <div className="mb-3">
              <img src={require("../../../Assets/images/Category-Computer.png")} alt="" />
            </div>
            <div>Computers</div>
          </div>
          <div className="category-card col ">
            <div className="mb-3">
              <img src={require("../../../Assets/images/Category-SmartWatch.png")} alt="" />
            </div>
            <div>SmartWatch</div>
          </div>
          <div className="category-card col ">
            <div className="mb-3">
              <img src={require("../../../Assets/images/Category-Camera.png")} alt="" />
            </div>
            <div>Camera</div>
          </div>
          <div className="category-card col ">
            <div className="mb-3">
              <img src={require("../../../Assets/images/Category-Headphone.png")} alt="" />
            </div>
            <div>HeadPhones</div>
          </div>
          <div className="category-card col ">
            <div className="mb-3">
              <img src={require("../../../Assets/images/Category-Gamepad.png")} alt="" />
            </div>
            <div>Gaming</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Catogery;
