import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"; // ✅ CORRECT

const Header = () => {
  return (
    <div className=" main-header ">
        <div></div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="me-3">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <a href="/#">Shop now</a>
      </div>
      <div className="lang d-flex justify-content-center align-items-center">
        <div className="me-3">English</div>
        <FontAwesomeIcon icon={faCircleChevronDown} className="icon" />
      </div>
    </div>
  );
};
export default Header;
