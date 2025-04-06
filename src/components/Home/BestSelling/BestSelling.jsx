import { Link } from "react-router-dom";
import ShowSecond from "../../showProducts/Show2";
const Bestselling = ({ products }) => {
  return (
    <>
      <div className="container mt-5">
        <div className=" d-flex align-items-center mb-3">
          <div className="box me-2"></div>
          <div className="flash-header ms-1 fs-6">This Month</div>
        </div>
        <div className="  d-flex justify-content-between ">
          <div className=" flash-sale d-flex align-items-center mt-2 mb-3">
            <p>Best Selling Products</p>
          </div>

          <div className="col-6 d-flex justify-content-end align-items-center ">
          <Link className=" view-prod px-5 py-3" to={"/product"}>
          View All 
        </Link>
          </div>
        </div>

        <div className="row mb-4">
        <ShowSecond products={products} />
        </div>
      </div>
    </>
  );
};

export default Bestselling;
