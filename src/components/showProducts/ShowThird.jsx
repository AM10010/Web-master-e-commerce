
import { useEffect, useState } from "react";
import "../showProducts/ShowSecond.css";
import {getThirdProducts} from "../Product/ServiceProduct";
  const ShowThird = () => {
    const [products, setProducts] = useState([]);
  
    const loadThirdProducts = async () => {
      const data = await getThirdProducts();
      setProducts(data);
    };
  useEffect(() => {
    loadThirdProducts();
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

export default ShowThird;
