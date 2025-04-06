const Adbanner = () => {
    return (
        <div className="container mt-5 adbanner mb-5">
            <div className="row">
                <div >
                    <img
                        src={require("../../../Assets/images/Frame 600.png")}  
                        className="img-fluid rounded w-100"   
                        alt="Ad Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Adbanner;