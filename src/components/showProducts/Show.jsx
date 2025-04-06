
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts} from "../Product/ServiceProduct";
  const Show = () => {
    const [products, setProducts] = useState([]);
  
    const loadFirstProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
  useEffect(() => {
    loadFirstProducts();
  }, []);
  return (
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card product-card">
              <img
                src={product.image}
                className="card-img-top product-image"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title product-title">{product.title}</h5>
                <p className="card-text product-description">
                  {product.description.substring(0, 80)}...
                </p>
                <p className="product-price">${product.price}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/product/${product.id}`}>
                    <button className="btn btn-primary details-btn">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

  );
};

export default Show;
