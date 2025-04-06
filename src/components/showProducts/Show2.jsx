
import { useEffect, useState } from "react";
import "../showProducts/ShowSecond.css";
import {getSecondProducts} from "../Product/ServiceProduct";
  const ShowSecond = () => {
    const [products, setProducts] = useState([]);
  
    const loadSecondProducts = async () => {
      const data = await getSecondProducts();
      setProducts(data);
    };
  useEffect(() => {
    loadSecondProducts();
  }, []);
  return (
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="">
              <img
                src={product.image}
                className="card-img-top product-image mb-3 "
                alt={product.title}
              />
              <div className=" d-flex flex-column">
                <h5 className=" product-title">{product.title.substring(0, 10)}</h5>
                <p className="product-price">${product.price}</p>
                <img
                className="w-50"
                  src={require(`../../Assets/images/Frame 566.png`)}
                  alt=""
                />

              </div>
            </div>
          </div>
        ))}
      </div>

  );
};

export default ShowSecond;
