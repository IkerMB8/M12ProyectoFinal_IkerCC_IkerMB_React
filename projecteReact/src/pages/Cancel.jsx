import "./cancel.css";
import { Link } from 'react-router-dom';
function Cancel() {
  return (
    <div className="cancel">
      <div class="carta">
        <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
          <i class="checkmark">X</i>
        </div>
          <h1>Cancel</h1> 
          <p>Su Compra Ha Sido Cancelada</p>
          <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default Cancel;
