import { Cart } from "../Cart";
import { useContext } from "react";
import "./productos.css";
function Product(props) {
  const { product } = props;
  const cart = useContext(Cart);
  const quantity = cart.getQuantity(product.id);

  return (
    <div className="product">
      <img
        src={product.image}
        className="card-img-top img-fluid w-75"
        alt={product.name}
      />
      <div className="product-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="precio">{product.price}€</p>
        {quantity > 0 ? (
            <div className="removeDiv">
              <div className="botoneraRemDiv">
                <div>In cart: {quantity}</div>
                <div>
                  <button
                    className="botonesMasMenos"
                    onClick={() => cart.addItem(product.id)}
                  >
                    +
                  </button>
                  <button
                    style={{marginLeft: "10px",}}
                    type="button"
                    className="botonesMasMenos"
                    onClick={() => cart.removeItem(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="removeButton"
                onClick={() => cart.deleteItem(product.id)}
              >
                <i className="bi bi-cart-fill"></i> Eliminar del carrito
              </button>
            </div>
        ) : (
          <button
            className="addButton"
            onClick={() => cart.addItem(product.id)}
          >
            <i className="bi bi-cart-fill"></i> Añadir al carrito 
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
