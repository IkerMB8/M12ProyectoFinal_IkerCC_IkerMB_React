import { arrayProducts } from "../Products";
import Product from "../components/Product";

function Store() {
  return (
    <div>
      <h1>PRODUCTOS</h1>
      <div className="divProductos">
        {arrayProducts.map((product, index) => (
            <Product key={index} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default Store;
