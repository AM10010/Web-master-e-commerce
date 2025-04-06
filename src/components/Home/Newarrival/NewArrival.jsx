const NewArrival = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className=" d-flex align-items-center mb-3">
          <div className="box me-2"></div>
          <div className="flash-header">Featured</div>
        </div>
        <div className="  d-flex justify-content-between ">
          <div className=" flash-sale d-flex align-items-center mt-4">
            <p className="mb-4">New Arrival</p>
          </div>
        </div>
        <div className="container ">
          <div className="row mb-4 d-flex justify-content-around">
            <div className="col-md-6 mb-4">
<img src={require("../../../Assets/images/Frame 684.png")} alt="" />
            </div>
            <div className="col-md-6 mb-4">
                <div className="mb-4">
<img src={require("../../../Assets/images/Frame 685.png")} alt="" />
                </div>
                <div className="row">
                <div className="col-md-6">
<img src={require("../../../Assets/images/Frame 686.png")} alt="" />
                </div>
                <div className="col-md-6" >
<img src={require("../../../Assets/images/Frame 687.png")} alt="" />
                </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
