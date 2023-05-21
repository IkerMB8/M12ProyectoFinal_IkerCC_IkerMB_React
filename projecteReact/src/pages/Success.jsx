import "./success.css";
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="success">
      <div class="carta">
        <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
          <i class="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>¡Gracias por tu compra!</p>
          <p>Estamos emocionados de atenderte. Te notificaremos tan pronto como tu pedido esté listo para ser recogido. Esperamos verte pronto en nuestra tienda.</p>

          <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default Success;
